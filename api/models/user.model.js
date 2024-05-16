import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: "String",
      unique: true,
      required: true,
    },
    email: {
      type: "String",
      unique: true,
      required: true,
    },
    password: {
      type: "String",
      required: true,
    },
    profilePicture: {
      type: "String",
      default:
        "https://th.bing.com/th/id/OIP.RKF36VTxTRRlWKVNnTiWUgHaHa?w=208&h=208&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    },
  },
  { timestamps: true }
);
const User = mongoose.model("User", userSchema);
export default User;
