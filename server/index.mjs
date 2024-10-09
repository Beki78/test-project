import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import Music from "./models/music.models.js";
import cors from "cors";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

// Set the PORT
const PORT = process.env.PORT || 3001;



// POST route with image upload
app.post("/", async (req, res) => {
  const { title, artist } = req.body;
  try {
    if (!title || !artist) {
      return res.status(400).json({ message: "All fields are required" });
    }
    const music = await Music.create({ title, artist });
    res.status(200).json({ music });
  } catch (error) {
    res.status(500).json(error.message);
  }
});

// GET all music entries
app.get("/", async (req, res) => {
  try {
    const music = await Music.find({});
    res.status(200).json({ music });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET a single music entry by ID
app.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const music = await Music.findById(id);
    if (!music) {
      return res.status(404).json({ message: "Music not found" });
    }
    res.status(200).json({ music });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// PUT (update) a music entry
app.put("/:id",  async (req, res) => {
  const { id } = req.params;
  const { title, artist } = req.body;

  try {
    // Find the music entry and update it
    const music = await Music.findByIdAndUpdate(
      id,
      { title, artist }, 
      { new: true }
    );

    if (!music) {
      return res.status(404).json({ message: "Music not found" });
    }

    res.status(200).json({ music });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// DELETE a music entry
app.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const music = await Music.findByIdAndDelete(id);
    if (!music) {
      return res.status(404).json({ message: "Music not found" });
    }
    res.status(200).json({ message: "Music deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Connect to MongoDB and start the server
mongoose
  .connect(process.env.DB_URI)
  .then(() => {
    console.log("Database connected"); 
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error(error.message);
  });
