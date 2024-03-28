// src/routes/applicants.ts

import express, { Request, Response } from "express";
import db from "../database";
import validate from "../middleware/validate"; // Import validate middleware

const router = express.Router();

router.post("/apply", validate, async (req: Request, res: Response) => {
  const { name, email, githubLink, phoneNumber } = req.body;

  try {
    const stmt = db.prepare(
      "INSERT INTO applicants (name, email, githubLink, phoneNumber) VALUES (?, ?, ?, ?)"
    );
    stmt.run(name, email, githubLink, phoneNumber);

    res.status(201).json({ message: "Application submitted successfully." });
  } catch (error) {
    console.error("Error submitting application:", error);
    res
      .status(500)
      .json({ error: "An error occurred while processing your application." });
  }
});

export default router;
