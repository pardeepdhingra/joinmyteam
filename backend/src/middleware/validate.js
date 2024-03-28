"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var ajv_1 = __importDefault(require("ajv"));
var ajv = new ajv_1.default();
var validate;
var applicantSchema = {
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
}
catch (error) {
    console.error("Error loading schema:", error);
    process.exit(1);
}
function default_1(req, res, next) {
    var isValid = validate(req.body);
    if (!isValid) {
        return res.status(400).json({ error: "Invalid request body." });
    }
    next();
}
exports.default = default_1;
