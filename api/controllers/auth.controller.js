import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";

const signup = async (req, res) => {
  const { usernames, email, password } = req.body;
  const hashedPassword = bcryptjs.hashSync(password, 10);
  const newUser = new User({ usernames, email, password: hashedPassword });

  try {
    await newUser.save();
    res.json({ message: "Signup Successful" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
export default signup;
