import { Request, Response, NextFunction } from "express";
import Ajv, { ValidateFunction } from "ajv";

const ajv = new Ajv();

let validate: ValidateFunction;

const applicantSchema = {
  type: "object",
  properties: {
    name: { type: "string", minLength: 1 },
    email: { type: "string" },
    phoneNumber: { type: "string" },
    githubLink: { type: "string" },
  },
  required: ["name", "email", "githubLink"],
};

try {
  validate = ajv.compile(applicantSchema);
} catch (error) {
  console.error("Error loading schema:", error);
  process.exit(1);
}

export default function (req: Request, res: Response, next: NextFunction) {
  const isValid = validate(req.body);
  if (!isValid) {
    return res.status(400).json({ error: "Invalid request body." });
  }
  next();
}
