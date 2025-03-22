import mongoose from "mongoose";

const schema = new mongoose.Schema({
  moveSpeed: {
    type: Number,
    required: true,
    unique: false,
  },
  jumpForce: {
    type: Number,
    required: true,
    unique: false,
  },
  styleName: {
    type: String,
    required: true,
    unique: false,
  }
});

export default mongoose.model("CharacterData", schema);