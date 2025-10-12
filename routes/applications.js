// routes/applications.js
import express from "express";
import protect from "../middleware/authMiddleware.js";
import { applyToJob, getApplicationsByJob, getApplicationsByUser } from "../models/Application.js";
import { createNotification } from "../models/Notification.js";
import { getJobById } from "../models/Job.js";

const router = express.Router();

// student applies to job
router.post("/:jobId/apply", protect, async (req, res) => {
  try {
    const jobId = req.params.jobId;
    const userId = req.user.id;

    // check job exists
    const job = await getJobById(jobId);
    if (!job) return res.status(404).json({ message: "Job not found" });

    // create application
    const applicationId = await applyToJob(userId, jobId);

    // create notification for recruiter (poster)
    const msg =` ${req.user.name} applied for job "${job.title}"`;
    await createNotification(job.posterId, msg, { applicationId, jobId, applicantId: userId });

    res.status(201).json({ message: "Applied successfully", applicationId });
  } catch (err) { console.error(err); res.status(500).json({ message: "Server error" }); }
});

// recruiter: list applications for a job (protect + recruiter)
router.get("/job/:jobId", protect, async (req, res) => {
  try {
    const jobId = req.params.jobId;
    // optional: check that req.user is poster of job or recruiter
    const apps = await getApplicationsByJob(jobId);
    res.json(apps);
  } catch (err) { res.status(500).json({ message: "Server error" }); }
});

// student: list own applications
router.get("/me", protect, async (req, res) => {
  try {
    const rows = await getApplicationsByUser(req.user.id);
    res.json(rows);
  } catch (err) { res.status(500).json({ message: "Server error" }); }
});

export default router;