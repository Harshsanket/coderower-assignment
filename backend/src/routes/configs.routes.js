import { Router } from "express";
import {
  createConfiguration,
  getConfigurationById,
  updateConfiguration,
  deleteConfiguration,
} from "../controllers/config.controller.js";

const router = Router();

router.post("/", createConfiguration); // Create
router.get("/:id", getConfigurationById); // Read
router.put("/update/:id", updateConfiguration); // Update
router.delete("/delete/:id", deleteConfiguration); // Delete

export default router;
