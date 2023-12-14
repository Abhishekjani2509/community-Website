const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    fullname: { type: String, required: true },
    phone: { type: Number, required: true, unique: true },
    address: { type: String, required: true},
    residence: { type: String},
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true},
    age: { type: Number, required: true },
    Dob: { type: String, required: true },
    profileimg: { type: String },
    images:{type:Array},
    fatherName: { type: String },
    motherName: { type: String },
    height: { type: String },
    education: { type: String },
    jobDetails: { type: String },
    numberOfBrothers: { type: Number },
    numberOfSisters: { type: Number },
    maritalStatus: { type: String },
    description: { type: String },
    registerVerified: { type: Boolean, default: false },
    profileVerified: { type: Boolean},
    isRejected: { type: Boolean, default:false},
    isAdmin: { type: Boolean,default:false},
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
