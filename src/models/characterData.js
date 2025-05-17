import mongoose from "mongoose";

const characterDataSchema = new mongoose.Schema({
  moveSpeed: {
    type: Number,
    required: true,
  },
  jumpForce: {
    type: Number,
    required: true,
  },
  styleName: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "StyleNameData",
    required: true,
  },
});

export default mongoose.model("CharacterData", characterDataSchema);