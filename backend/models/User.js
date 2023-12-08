const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    fullname: { type: String, required: true },
    phone: { type: Number, required: true, unique: true },
    address: { type: String, required: true},
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true},
    age: { type: Number, required: true },
    Dob: { type: String, required: true },
    profileimg: { type: String },
    images:{type:Array},
    fatherName: { type: String },
    motherName: { type: String },
    height: { type: Number },
    education: { type: String },
    jobDetails: { type: String },
    numberOfBrothers: { type: Number },
    numberOfSisters: { type: Number },
    maritalStatus: { type: String },
    description: { type: String },
    isVerified: { type: Boolean, default: false },
    isAdmin: { type: Boolean, default: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
