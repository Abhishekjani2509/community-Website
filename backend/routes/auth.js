const { Router } = require("express");
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const multer = require("multer");
const multerS3 = require("multer-s3");
const { S3Client, PutObjectCommand } = require("@aws-sdk/client-s3");

const router = Router();

const s3Client = new S3Client({
  region: "ap-south-1", // Replace with your S3 region
  credentials: {
    accessKeyId: process.env.ACCESS_KEY,
    secretAccessKey: process.env.SECRET_ACCESS_KEY,
  },
});

const upload = multer({
  storage: multerS3({
    s3: s3Client,
    bucket: process.env.BUCKET_NAME,
    key: function (req, file, cb) {
      cb(
        null,
        Date.now().toString() + "-" + file.originalname
      );
    },
  }),
});
router.use(cookieParser());

router.post("/register", upload.single("profileimg"), async (req, res) => {
  try {
    const { password, confirmPassword, ...userData } = req.body;
    // Check if password and confirmPassword are present in the request body
    if (!password || !confirmPassword) {
      return res.status(400).json({ error: "Password and confirm are required" });
    }
    if (password !== confirmPassword) {
      return res.status(400).json({ error: "Password and confirm do not match" });
    }
    const imageUrl = req.file.location;
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      password: hashedPassword,
      profileimg: imageUrl,
      ...userData,
    });

    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    console.error("Error during registration:", err.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
});


router.post("/admin-login", async (req, res) => {
  try {
    const user = await User.findOne({ phone: req.body.phone, isAdmin: true });
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
    // if (!user.registerVerified) {
    //   console.log("Registration not approved. Please wait.");
    //   return res.status(401).json("Registration is not approved. Please wait.");
    // }

    const accessToken = jwt.sign(
      {
        id: user._id,
        isAdmin: user.isAdmin,
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
