import jwt from "jsonwebtoken";

export const AuthMiddleware = (req, res, next) => {
  
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  try {
    const decoded = jwt.verify(token, "clavesupersecreta");
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(403).json({ message: "invalid token or expired" });
  }
};
