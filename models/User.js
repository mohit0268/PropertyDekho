import { Schema, model, models } from "mongoose";

const UserSchema =
  ({
    email: {
      type: String,
      unique: [true, "Email already exists."],
      required: [true, "Email is required"],
    },
    username: {
      type: String,
      required: [true, "Email is required."],
    },
    image: {
      type: String,
    },
    bookmarks: [
      {
        type: Schema.Types.ObjectId,
        ref: "property",
      },
    ],
  },
  {
    timestamps: true,
  });

  const User = model.User || model('User',UserSchema);
  export default User;