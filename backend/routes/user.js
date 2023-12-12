const User = require("../models/User");
const bcrypt = require("bcryptjs");

const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("./verifyTokens");

const router = require("express").Router();

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

//UPDATE
router.put("/:id", verifyTokenAndAuthorization, async (req, res) => {
  try {
    // Check if a new password is provided
    if (req.body.password) {
      // Hash the new password using bcrypt
      req.body.password = await bcrypt.hash(req.body.password, 15); // Adjust the number of rounds (salt) as needed
    }

    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
        profileVerified:false,
      },
      { new: true }
    );

    res.status(200).json(updatedUser);
  } catch (err) {
    res.status(500).json(err);
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
router.delete("/:id", verifyTokenAndAuthorization, async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json("User has been deleted...");
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET USER
router.get("/find/:id",async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    const { password, ...others } = user._doc;
    res.status(200).json(others);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET ALL USER     admin only
router.get("/all", async (req, res) => {
  const query = req.query.new;
  try {
    const users = query
      ? await User.find({profileVerified:true}).sort({ _id: -1 }).limit(5)
      : await User.find({profileVerified:true});
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET USER STATS

router.get("/stats", async (req, res) => {
  const date = new Date();
  const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));

  try {
    const data = await User.aggregate([
      { $match: { createdAt: { $gte: lastYear } } },
      {
        $project: {
          month: { $month: "$createdAt" },
        },
      },
      {
        $group: {
          _id: "$month",
          total: { $sum: 1 },
        },
      },
    ]);
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
