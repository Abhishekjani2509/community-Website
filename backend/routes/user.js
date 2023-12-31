const User = require("../models/User");
const bcrypt = require("bcryptjs");
const nodemailer = require("nodemailer");

const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("./verifyTokens");

const router = require("express").Router();

const multer = require("multer");
const multerS3 = require("multer-s3");
const { S3Client, PutObjectCommand } = require("@aws-sdk/client-s3");

const s3Client = new S3Client({
  region: "ap-south-1", // Replace with your S3 region
  credentials: {
    accessKeyId: process.env.ACCESS_KEY,
    secretAccessKey: process.env.SECRET_ACCESS_KEY,
  },
});

// Configure multer for file uploads to S3
const upload = multer({
  storage: multerS3({
    s3: s3Client,
    bucket: process.env.BUCKET_NAME,
    key: function (req, file, cb) {
      cb(null, Date.now().toString() + "-" + file.originalname);
    },
  }),
});

//UPDATE
router.post("/:id", upload.array("images", 6), async (req, res) => {
  try {
    // Check if a new password is provided
    if (req.body.password) {
      // Hash the new password using bcrypt
      req.body.password = await bcrypt.hash(req.body.password, 15); // Adjust the number of rounds (salt) as needed
    }

    // Check if images are uploaded
    if (req.files && req.files.length > 0) {
      // Extract S3 URLs from uploaded files
      if (req.files.length > 6) {
        return res.status(400).json({ error: "Only 6 images are allowed." });
      }
      const s3Urls = req.files.map((file) => file.location);

      // Add the S3 URLs to the req.body
      req.body.images = s3Urls;
    }

    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: {
          ...req.body,
          profileVerified: false,
          isRejected: false,
        },
      },
      { new: true }
    );

    res.status(200).json(updatedUser);
  } catch (err) {
    console.error("Error updating user:", err);
    res.status(500).json(err);
  }
});

// Profile endpoint
router.get("/profile", verifyToken, async (req, res) => {
  try {
    // Get the user ID from the token
    const userId = req.user.id;

    // Retrieve the user's profile data based on the user ID
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Return the user's profile data (excluding the password) as a JSON response
    const { password, ...userData } = user._doc;
    res.status(200).json(userData);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
});

//og.. router.put("/:id", verifyTokenAndAuthorization, async (req, res) => {
//   if (req.body.password) {
//     req.body.password = CryptoJS.AES.encrypt(
//       req.body.password,
//       process.env.PASS_SEC
//     ).toString();
//   }

//   try {
//     const updatedUser = await User.findByIdAndUpdate(
//       req.params.id,
//       {
//         $set: req.body,
//       },
//       { new: true }
//     );
//     res.status(200).json(updatedUser);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

//DELETE
router.delete("/:id", async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json("User has been deleted...");
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET USER
router.get("/find/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    const { password, ...others } = user._doc;
    res.status(200).json(others);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET ALL USER    verified
router.get("/all", async (req, res) => {
  const { gender, minAge, maxAge, residence } = req.query;

  // Create a filter object based on the provided parameters
  const filter = {
    profileVerified: true,
    gender: gender || { $exists: true }, // Apply gender filter if provided
    age: { $gte: minAge || 0, $lte: maxAge || 150 }, // Apply age range filter if provided
    residence: residence || { $exists: true }, // Apply residence filter if provided
  };
  try {
    const users = await User.find(filter).sort({ _id: -1 });
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET USER STATS

// router.get("/stats", async (req, res) => {
//   const date = new Date();
//   const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));

//   try {
//     const data = await User.aggregate([
//       { $match: { createdAt: { $gte: lastYear } } },
//       {
//         $project: {
//           month: { $month: "$createdAt" },
//         },
//       },
//       {
//         $group: {
//           _id: "$month",
//           total: { $sum: 1 },
//         },
//       },
//     ]);
//     res.status(200).json(data);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

//Admin Routes
// All uers
router.get("/admin", verifyTokenAndAdmin, async (req, res) => {
  const query = req.query.new;
  try {
    const users = query
      ? await User.find({ registerVerified: true })
      : await User.find({ registerVerified: true });
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json(err);
  }
});
router.get("/rejected", verifyTokenAndAdmin, async (req, res) => {
  const query = req.query.new;
  try {
    const users = query
      ? await User.find({ isRejected: true })
      : await User.find({ isRejected: true });
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json(err);
  }
});
router.get("/registerReq", verifyTokenAndAdmin, async (req, res) => {
  const query = req.query.new;
  try {
    const users = query
      ? await User.find({ registerVerified: false })
      : await User.find({ registerVerified: false });
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json(err);
  }
});
router.get("/profileReq", verifyTokenAndAdmin, async (req, res) => {
  const query = req.query.new;
  try {
    const users = query
      ? await User.find({ profileVerified: false, isRejected: false })
      : await User.find({ profileVerified: false, isRejected: false });
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json(err);
  }
});
router.put("/admin/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    console.log(req.body.message);
    // Check if a new password is provided
    if (req.body.password) {
      // Hash the new password using bcrypt
      req.body.password = await bcrypt.hash(req.body.password, 15); // Adjust the number of rounds (salt) as needed
    }

    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    const phone = updatedUser.phone;
    const message = req.body.message;
    const mail = updatedUser.email;
    sendEmail(phone, message, mail);

    res.status(200).json(updatedUser);
  } catch (err) {
    res.status(500).json(err);
  }
});
// Rejected Users

// Node Mailer

function sendEmail(phone, message, mail) {
  // Configure nodemailer to use your email service
  let Transport = nodemailer.createTransport({
    service: "GMAIL",
    auth: {
      user: "tt7302398@gmail.com",
      pass: process.env.PASSWORD,
    },
    debug: true,
  });

  // Email content
  const mailOptions = {
    from: "tt7302398@gmail.com",
    to: mail,
    subject: "Account Update",
    text: message,
  };

  // Send email
  Transport.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email:", error);
    } else {
      console.log("Email sent:", info.response);
    }
  });
}
module.exports = router;
