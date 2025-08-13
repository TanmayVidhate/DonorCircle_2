import express from "express"
import multer from 'multer'


import {  getallUsers, addUser, signinUser,  adduserallinfo, getUserAllinfoByemail, uploadimg, getUserImageByEmail } from '../controller/userController.js';


let userRouter = express.Router();

userRouter.get("/", getallUsers);

userRouter.post("/signup", addUser);

userRouter.post("/signin", signinUser);

userRouter.put("/addprofileinfo", adduserallinfo);

userRouter.get("/user/:email",getUserAllinfoByemail);


// const storage = multer.diskStorage({
//     destination: function (req,res,cb){
//         return cb(null,"./public/image"); 
//     },
//     filename:function(req,file,cb){
//         return cb(null,`${Date.now()}-${file.originalname}`);
//     },
// })

const storage = multer.memoryStorage({})

const upload = multer({storage});

userRouter.post("/uploadimage", upload.single('avatar') ,uploadimg);

userRouter.get("/profileImg/:email",getUserImageByEmail)

export {
    userRouter,
}












