import { dataConfig } from "../models/configurations.models.js";
import { ApiResponse } from "../utils/api-response.js";
import { ApiError } from "../utils/api-error.js";

// CREATE
export const createConfiguration = async (req, res) => {
  try {
    const { id, data, remark } = req.body;

    const existing = await dataConfig.findOne({ id });
    if (existing) {
      return res.status(400).json(new ApiError(400, "Configuration already exists"));
    }

    const config = await dataConfig.create({ id, data, remark });
    return res.status(201).json(new ApiResponse(201, config, "Configuration created"));
  } catch (error) {
    console.error("Error creating config:", error);
    return res.status(500).json(new ApiError(500, "Server error creating config", error));
  }
};

// READ (by ID)
export const getConfigurationById = async (req, res) => {
  try {
    const { id } = req.params;
    const config = await dataConfig.findOne({ id });

    if (!config) {
      return res.status(404).json(new ApiError(404, "Configuration not found"));
    }

    return res.json(new ApiResponse(200, config, "Fetched successfully"));
  } catch (error) {
    console.error("Error fetching config:", error);
    return res.status(500).json(new ApiError(500, "Server error fetching config", error));
  }
};

// UPDATE (remark or data)
export const updateConfiguration = async (req, res) => {
  try {
    const { id } = req.params;
    const { data, remark } = req.body;

    const config = await dataConfig.findOneAndUpdate(
      { id },
      { $set: { ...(data && { data }), ...(remark && { remark }) } },
      { new: true }
    );

    if (!config) {
      return res.status(404).json(new ApiError(404, "Configuration not found"));
    }

    return res.json(new ApiResponse(200, config, "Configuration updated"));
  } catch (error) {
    console.error("Error updating config:", error);
    return res.status(500).json(new ApiError(500, "Server error updating config", error));
  }
};

// DELETE
export const deleteConfiguration = async (req, res) => {
  try {
    const { id } = req.params;
    const config = await dataConfig.findOneAndDelete({ id });

    if (!config) {
      return res.status(404).json(new ApiError(404, "Configuration not found"));
    }

    return res.json(new ApiResponse(200, null, "Configuration deleted"));
  } catch (error) {
    console.error("Error deleting config:", error);
    return res.status(500).json(new ApiError(500, "Server error deleting config", error));
  }
};
