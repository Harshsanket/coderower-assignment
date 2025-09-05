import mongoose, { Schema } from "mongoose";

const dataConfigs = new Schema(
  {
    id: {
      type: String,
      required: true,
      index: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    data: {
      type: [[String]],
      required: true,
    },
    remark: {
      type: String,
    },
  },
  {
    timestamps: true,
  },
);

export const dataConfig = mongoose.model("DataConfig", dataConfigs);
