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
  styleNameId:{
    type: String,
    required: true,
    unique: false,
  },
  styleName: {
    type: mongoose.Schema.ObjectId,
    ref: 'StyleNameData',
    index: true
  }
});

export default mongoose.model("CharacterData", schema);