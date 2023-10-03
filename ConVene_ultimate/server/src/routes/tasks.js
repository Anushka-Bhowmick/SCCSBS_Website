import express from "express";
import mongoose from "mongoose";
import { TasksModel } from "../models/Tasks.js";
import { UserModel } from "../models/Users.js";
import { verifyToken } from "./user.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const result = await TasksModel.find({});
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Create a new task
router.post("/", verifyToken, async (req, res) => {
  const task = new TasksModel({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    image: req.body.image,
    ingredients: req.body.ingredients,
    instructions: req.body.instructions,
    imageUrl: req.body.imageUrl,
    cookingTime: req.body.cookingTime,
    userOwner: req.body.userOwner,
  });
  console.log(task);

  try {
    const result = await task.save();
    res.status(201).json({
      createdTask: {
        name: result.name,
        image: result.image,
        ingredients: result.ingredients,
        instructions: result.instructions,
        _id: result._id,
      },
    });
  } catch (err) {
    // console.log(err);
    res.status(500).json(err);
  }
});

// Get a task by ID
router.get("/:taskId", async (req, res) => {
  try {
    const result = await TasksModel.findById(req.params.taskId);
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Save a Task
router.put("/", async (req, res) => {
  const task = await TasksModel.findById(req.body.taskID);
  const user = await UserModel.findById(req.body.userID);
  try {
    user.savedTasks.push(task);
    await user.save();
    res.status(201).json({ savedTasks: user.savedTasks });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get id of saved tasks
router.get("/savedTasks/ids/:userId", async (req, res) => {
  try {
    const user = await UserModel.findById(req.params.userId);
    res.status(201).json({ savedTasks: user?.savedTasks });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Get saved tasks
router.get("/savedTasks/:userId", async (req, res) => {
  try {
    const user = await UserModel.findById(req.params.userId);
    const savedTasks = await TasksModel.find({
      _id: { $in: user.savedTasks },
    });

    console.log(savedTasks);
    res.status(201).json({ savedTasks });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

export { router as tasksRouter };
