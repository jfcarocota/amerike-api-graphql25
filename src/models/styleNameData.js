import mongoose from "mongoose";

const schema = new mongoose.Schema({
  styleName: {
    type: String,
    required: true,
    unique: false,
  },
  priority: {
    type: Number,
    required: true,
    unique: false,
  },
});

export default mongoose.model("StyleNameData", schema);