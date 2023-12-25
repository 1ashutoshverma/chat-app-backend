const mongoose = require("mongoose");

const chatSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    isGroupChat: {
      type: Boolean,
      required: false,
    },
    lastMessage: {
      type: mongoose.Types.ObjectId,
      ref: "ChatMessageModel",
    },
    participants: [{ type: mongoose.Types.ObjectId, ref: "UserModel" }],
    admin: {
      type: mongoose.Types.ObjectId,
      ref: "UserModel",
    },
  },
  { timestamps: true }
);

const ChatModel = mongoose.model("chat", chatSchema);

module.exports = { ChatModel };
