import UserSignup from "../model/UserSignup.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import multer from "multer";
import nodemailer from "nodemailer"

const getallUsers = async (req, res) => {
  try {
    const records = await UserSignup.find();

    if (!records) {
      res.status(404).json({
        success: false,
        data: null,
        message: "Data not found...",
      });
    } else {
      res.status(200).json({
        success: true,
        data: records,
        message: "Data Fetch Successfully... ",
      });
    }
  } catch (error) {
    res.status(400).json({
      success: false,
      data: null,
      message: error.message,
    });
  }
};

const addUser = async (req, res) => {
  try {
    const { name, username, email, password } = req.body;

    // console.log("name=", name)
    // console.log("username=", username)
    // console.log("email==", email);
    // console.log("password==", password);

    if (!name || !username || !email || !password) {
      return res.status(400).json({
        success: false,
        data: null,
        message: "Enter All fields..",
      });
    } else {
      const record = await UserSignup.findOne({ email: email });

      if (!record) {
        const hasedPassword = await bcrypt.hash(password, 10);

        const newData = await UserSignup.create({
          name,
          username,
          email,
          password: hasedPassword,
        });

        const token = jwt.sign(
          { email: newData.email, password: newData.password },
          process.env.SECURITY_KEY
        );

        return res.status(201).json({
          success: true,
          data: newData,
          token: token,
          message: "Data Stored in DB...",
        });
      } else {
        return res.status(409).json({
          success: false,
          data: null,
          message: "Data is allready Present...",
        });
      }
    }
  } catch (error) {
    res.status(400).json({
      success: false,
      data: null,
      message: error?.message,
    });
  }
};

const signinUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log("e=", email, "pp=", password);

    if ((!email, !password)) {
      return res.status(400).json({
        success: false,
        message: "Enter All Fields.",
      });
    }

    const isexistUser = await UserSignup.findOne({ email: email });
    // console.log(record)

    if (!isexistUser) {
      return res.status(400).json({
        success: false,
        data: null,
        message: "Data Not found...",
      });
    } else {
      const match_pass = await bcrypt.compare(password, isexistUser?.password);

      if (!match_pass) {
        return res.status(401).json({
          success: false,
          message: "Invalid password",
        });
      } else {
        const token = jwt.sign(
          { email: isexistUser?.email, password: isexistUser?.password },
          process.env.SECURITY_KEY,
          { expiresIn: "1d" }
        );

        //set cookie in backend when token is created
        res.cookie("token", token, {
          httpOnly: true,
          secure: true,
          sameSite: "Lax",
          maxAge: 1 * 24 * 60 * 60 * 1000,
        });

        return res.status(201).json({
          success: true,
          data: isexistUser,
          token: token,
          message: "User Signin...",
        });
      }
    }
  } catch (error) {
    res.status(400).json({
      success: false,
      data: null,
      message: error?.message,
    });
  }
};

const siginoutUser = async (req, res) => {
  try {
    res.cookie("token", "", {
      httpOnly: true,
      secure: true,
      sameSite: "Lax",
      expires: new Date(0),
    });

    return res.status(200).json({
      success: true,
      data: null,
      message: "Sigin out User Sucessfully..",
    });
  } catch (error) {
    console.log(error.message);
  }
};

const forgotPassword = async (req, res) => {
  const { email } = req.body;

  try {
    const User = await UserSignup.findOne({ email });
    if (!User) {
      return res.status(404).json({
        success: false,
        data: null,
        message: "User not Found!",
      });
    }
    const token = jwt.sign({ email: User.email }, process.env.SECURITY_KEY, {
      expiresIn: "5m",
    });

    let baseUrl;

    if (process.env.NODE_ENV === "production") {
      baseUrl = "https://donorcircle-server.onrender.com";
    } else {
      baseUrl = "http://localhost:5001";
    }


    const link = `${baseUrl}/Users/reset-password/${User.email}/${token}`;
    console.log(`${baseUrl}`)
    //nodemailer code
    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      service: 'gmail',
      auth: {
        user: 'tanmayvidhate7@gmail.com',
        pass: 'shmtnhuiczrfgdev'
      },
      connectionTimeout: 20000,
      greetingTimeout: 20000,
      socketTimeout: 20000,
      tls: {
        rejectUnauthorized: false
      }
    });

    let mailOptions = {
      from: 'tanmayvidhate7@gmail.com',
      to: `${email}`,
      subject: 'Reset The Password.',
      text: link
    };

    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });

    console.log("link==",link)
    return res.status(200).json({
      success: true,
      data:link,
      message:"link created..." ,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      data: null,
      message: error?.message,
    });
  }
};

const resetPassword = async (req, res) => {
  const { email, token } = req.params;
  //   console.log("tttttttttttttt==========", token);
  try {
    const User = await UserSignup.findOne({ email });
    if (!User) {
      return res.status(404).json({
        success: false,
        data: null,
        message: "User not Found!",
      });
    }

    try {
      //   console.log("hooooooooooo");
      const verify = jwt.verify(token, process.env.SECURITY_KEY);
      res.render("index.ejs", { email: verify.email,status:"not verify" });
    } catch (error) {
      return res.send(error.message);
    }
    
  } catch (error) {
    return res.status(400).json({
      success: false,
      data: null,
      message: error?.message,
    });
  }
};

const postResetPassword = async (req, res) => {
  const { email, token } = req.params;
  const {password} = req.body;
  try {
    const User = await UserSignup.findOne({ email });
    if (!User) {
      return res.status(404).json({
        success: false,
        data: null,
        message: "User not Found!",
      });
    }

    try {
      
      const verify = jwt.verify(token, process.env.SECURITY_KEY);
      const encryptedPassword = await bcrypt.hash(password,10);

      await UserSignup.updateOne(
        {email: email},
        {
            $set:{
                password:encryptedPassword,
            }
        }

      );
        let baseUrl;
        if (process.env.NODE_ENV === "production") {
        baseUrl = "https://donorcircle-server.onrender.com"; // your deployed frontend
        } else {
        baseUrl = "http://localhost:5173"; // local frontend
        }

        res.render("index",{email:verify.email,baseUrl,status:"verify"})

        // res.status(200).json({
        //   success:true,
        //   message:"Password Updated..."
        // })

    } catch (error) {
        return res.status(400).json({
        success: false,
        data: null,
        message: error?.message,
    });
    }
  } catch (error) {
    return res.status(400).json({
      success: false,
      data: null,
      message: error?.message,
    });
  }
};

const adduserallinfo = async (req, res) => {
  try {
    // const { email } = req.params;
    // console.log("e=",email)

    const { emaill, age, mobile_no, blood_group, address, gender } = req.body;

    // console.log("age=", age)
    // console.log("mobile_no=", mobile_no)
    // console.log("gender==", gender);
    // console.log("blood_gup==", blood_group);
    // console.log("address==", address);

    if (!emaill || !age || !mobile_no || !blood_group || !address || !gender) {
      let msgArr = [];
      !emaill && msgArr.push("Enter Email Field");
      !age && msgArr.push("Enter Age Field");
      !mobile_no && msgArr.push("Enter Mobile No Field");
      !blood_group && msgArr.push("Enter Blood Group Field");
      !address && msgArr.push("Enter Address Field");
      !gender && msgArr.push("Enter Gender Field");

      const errorMessage = msgArr.join(", ");

      return res.status(400).json({
        success: false,
        data: null,
        message: errorMessage,
        // message: `Enter All fields ${!email || !age || !mobile_no || !blood_group || !address || !gender}..`
      });
    } else {
      const updatedUser = await UserSignup.findOneAndUpdate(
        { email: emaill },
        {
          $set: {
            other_info: {
              emaill,
              age,
              mobile_no,
              gender,
              blood_group,
              address,
            },
          },
        },
        { new: true }
      );
      console.log("updateUser==", updatedUser);
      res.status(201).json({
        success: true,
        data: updatedUser,
        message: "User profile update...",
      });
    }
  } catch (error) {
    res.status(400).json({
      success: false,
      data: null,
      message: error?.message,
    });
  }
};

const getUserAllinfoByemail = async (req, res) => {
  try {
    const { email } = req.params;
    const record = await UserSignup.findOne({ email: email }).select(
      "-_id -password -__v -createdAt -updatedAt -profile_updates._id"
    );

    record
      ? res.status(200).json({
          success: true,
          data: record,
          message: "Data Found...",
        })
      : res.status(400).json({
          success: false,
          data: null,
          message: "Data Not Found...",
        });
  } catch (error) {
    console.log(error.message);
  }
};

const uploadimg = async (req, res) => {
  const { email } = req?.body;
  console.log("email==", email);

  const file = req?.file?.buffer?.toString("base64");
  console.log("file==", file);
  try {
    const updatedUser = await UserSignup.findOneAndUpdate(
      { email },
      { $set: { "other_info.0.userpro": file } },
      { new: true, upsert: false }
    );
    console.log("u===", updatedUser);

    res.status(201).json({
      success: true,
      data: updatedUser,
      message: "User profile photo update...",
    });
  } catch (error) {
    res.status(400).json({
      success: true,
      data: null,
      message: error.message,
    });
  }

  // console.log("body=", req.body)
  // console.log("file=", req.file)
};

const getUserImageByEmail = async (req, res) => {
  try {
    const { email } = req.params;
    console.log(email);

    const record = await UserSignup.find({ email: email });
    console.log("record=", record);

    // const image = record.profile_updates;

    // console.log("img=",image)
    // if (image) {
    //     res.status(200).json({
    //         success: true,
    //         data: image,
    //         message: "Image Found.."
    //     })
    // }
    // else {
    //     res.status(400).json({
    //         success: false,
    //         data: null,
    //         message: "Image Not Found.."
    //     })
    // }
  } catch (error) {
    res.status(400).json({
      success: false,
      data: null,
      message: "Image Not Found...",
    });
  }
};

export {
  getallUsers,
  addUser,
  signinUser,
  siginoutUser,
  forgotPassword,
  resetPassword,
  postResetPassword,
  adduserallinfo,
  uploadimg,
  getUserAllinfoByemail,
  getUserImageByEmail,
};
