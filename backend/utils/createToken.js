import jwt from "jsonwebtoken";

const generateToken = (res, userId) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });

  // JWT টোকেনটি HTTP-Only কুকিতে সেট করুন
  res.cookie('jwt', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV !== "development",
    sameSite: "strict",
    maxAge: 30 * 24 * 60 * 60 * 1000, // ৩০ দিন
  });

  return token;
};

export default generateToken;