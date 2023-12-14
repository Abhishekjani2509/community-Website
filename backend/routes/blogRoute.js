const express = require("express");
const router = express.Router();
const Blog = require("../models/blog");
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("./verifyTokens");

// Create a new blog
router.post("/create",verifyTokenAndAdmin, async (req, res) => {
  try {
    const blog = await Blog.create(req.body);
    res.status(201).json(blog);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get all blogs
router.get("/all", async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.status(200).json(blogs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get a specific blog by ID
router.get("/:id",verifyTokenAndAdmin, async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    res.status(200).json(blog);
  } catch (error) {
    res.status(404).json({ error: "Blog not found" });
  }
});

// Update a blog by ID
router.put("/:id",verifyTokenAndAdmin, async (req, res) => {
  try {
    const blog = await Blog.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(blog);
  } catch (error) {
    res.status(404).json({ error: "Blog not found" });
  }
});

// Delete a blog by ID
router.delete("/:id",verifyTokenAndAdmin, async (req, res) => {
  try {
    await Blog.findByIdAndDelete(req.params.id);
    res.status(204).send();
  } catch (error) {
    res.status(404).json({ error: "Blog not found" });
  }
});

module.exports = router;
