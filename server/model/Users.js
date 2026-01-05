import mongoose from "mongoose";

const { model, Schema } = mongoose;


const Users = new Schema({
    name: {
        type: String,
        required: true,
        minlength: 4,
        maxlength: 20,
        trim: true
    },
    username: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 20,
        trim: true
    },
    email: {
        type: String,
        required: true,
        lowercase: true,
        trim: true,
        match: [/^\S+@\S+\.\S+$/, 'Please use a valid email address']
    },
    // date_of_birth: {
    //     type: Date,
    //     required: true,
    // },
    role:{
        type: String,
        required:true,
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
    },

    other_info: [
        {
            userpro: {
                type: String,
                required: true, 
                // trim: true,
                // match: /\.(jpg|jpeg|png|webp)$/i
            },
            age: {
                type: Number,
                required: true,
                min: 18,
                max: 99,
                trim: true
            },
            mobile_no: {
                type: Number,
                required: true,
                trim: true,
                match: [/^\d{10}$/, "Mobile number must be exactly 10 digits"],
            },

            blood_group: {
                type: String,
                required: true,
                enum: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
                trim: true
            },

            gender: {
                type: String,
                required: true,
                enum: {
                    values: ['Male', 'Female', 'Other'],
                    message: 'Gender must be Male, Female, or Other'
                },
                trim: true
            },

            address: {
                type: String,
                required: true,
                trim: true,
                minlength: 3,
                maxlength: 100
            },

        }

    ]

}, { timestamps: true })


const Donor = model('appusers', Users);

export default Donor;