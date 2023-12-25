const mongoose = require("mongoose");

const chatMessageSchema = mongoose.Schema(
  {
    sender: {
      type: mongoose.Types.ObjectId,
      ref: "UserModel",
    },
    content: {
      type: String,
    },
    attachments: {
      type: [
        {
          url: String,
          localPath: String,
        },
      ],
      default: [],
    },
    chat: {
      type: mongoose.Types.ObjectId,
      ref: "ChatModel",
    },
  },
  { timestamps: true }
);

const ChatMessageModel = mongoose.model("chatMessage", chatMessageSchema);

module.exports = { ChatMessageModel };
