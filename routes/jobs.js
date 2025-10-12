// routes/jobs.js
import express from "express";
import protect from "../middleware/authMiddleware.js";
import { requireRecruiter } from "../middleware/roleMiddleware.js";
import { createJob, getJobs, getJobById } from "../models/Job.js";

const router = express.Router();

// public: list jobs
router.get("/", async (req, res) => {
  try {
    const rows = await getJobs();
    res.json(rows);
  } catch (err) { res.status(500).json({ message: "Server error" }); }
});

// public: single job
router.get("/:id", async (req, res) => {
  try {
    const job = await getJobById(req.params.id);
    if (!job) return res.status(404).json({ message: "Job not found" });
    res.json(job);
  } catch (err) { res.status(500).json({ message: "Server error" }); }
});

// protected: create job (recruiter only)
router.post("/", protect, requireRecruiter, async (req, res) => {
  try {
    const { title, description, location } = req.body;
    const posterId = req.user.id;
    const jobId = await createJob(title, description, location, posterId);
    res.status(201).json({ message: "Job created", jobId });
  } catch (err) { console.error(err); res.status(500).json({ message: "Server error" }); }
});

export default router;