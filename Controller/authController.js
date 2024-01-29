const User = require("../Models/User");

exports.register = async (req, res, next) => {
  const { name, email, password } = req.body;
  const existingUser = await User.findOne({ email });

  if (existingUser) {
    return res.status(400).json({ message: "Email already registered" });
  }
  if (password.length < 6) {
    return res.status(400).json({ message: "Password less than 6 characters" });
  }
  try {
    await User.create({
      name,
      email,
      password,
    }).then((user) =>
      res.status(200).json({
        message: "User successfully created",
        id:user._id,
      })
    );
  } catch (err) {
    res.status(401).json({
      message: "User not successful created",
      error: err.message,
    });
  }
};


const User = require("../Models/User");

exports.login = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ email: username, password });
    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }
    res.status(200).json({ message: "User successfully logged in", token });
  }
  catch (err) {
    console.log(err)
  }
}
