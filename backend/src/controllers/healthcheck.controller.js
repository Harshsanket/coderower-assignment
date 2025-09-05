import { ApiResponse } from "../utils/api-response.js";

export const healthCheck = (req, res) => {
  try {
    res.status(200).json(new ApiResponse(200, {}, "Server is alive"));
  } catch (error) {
    console.log(error);
  }
};
