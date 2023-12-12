const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcryptjs"); // Import bcryptjs for password hashing
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");

router.use(cookieParser());
// REGISTER rout
router.post("/register", async (req, res) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    const newUser = new User({
      fullname: req.body.fullname,
      phone: req.body.phone,
      address: req.body.address,
      residence: req.body.residence,
      email: req.body.email,
      password: hashedPassword,
      age: req.body.age,
      Dob: req.body.Dob,
      profileimg: req.body.profileimg,
      images: req.body.images,
      fatherName: req.body.fatherName,
      motherName: req.body.motherName,
      height: req.body.height,
      education: req.body.education,
      jobDetails: req.body.jobDetails,
      numberOfBrothers: req.body.numberOfBrothers,
      numberOfSisters: req.body.numberOfSisters,
      maritalStatus: req.body.maritalStatus,
      description: req.body.description,
    });

    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(500).json(err.message);
  }
});

router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ phone: req.body.phone });

    if (!user) {
      return res.status(401).json("Wrong credentials!");
    }

    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );

    if (!validPassword) {
      return res.status(401).json("Wrong credentials!");
    }
    if (!user.registerVerified) {
      console.log("Registration not approved. Please wait.");
      return res.status(401).json("Registration is not approved. Please wait.");
    }

    const accessToken = jwt.sign(
      {
        id: user._id,
        // isAdmin: user.isAdmin,
      },
      process.env.JWT_SEC,
      { expiresIn: "3d" }
    );

    const { password, ...others } = user._doc;

    // Set the access token as a cookie in the response
    res.cookie("access_token", accessToken, {
      httpOnly: true, // Makes the cookie accessible only through HTTP
      secure: process.env.NODE_ENV === "production", // Set to true if using HTTPS
      sameSite: "strict", // Set the appropriate value based on your needs
      expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000), // 3 days expiration
    });

    res.status(200).json({ ...others, accessToken });
  } catch (err) {
    console.error(err);
    res.status(500).json("Internal Server Error");
  }
});
module.exports = router;
