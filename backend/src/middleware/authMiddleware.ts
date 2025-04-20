import { Request, Response, NextFunction } from "express";
import { auth } from "../config/firebase";

export const authMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  // 🔒 Firebase is disabled in this environment
  if (!auth || !auth.verifyIdToken) {
    console.warn("⚠️ Skipping auth verification: Firebase is not enabled.");
    // You can choose to skip auth or block access here
    return res.status(403).json({ message: "Authentication is disabled in this environment" });
  }

  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).json({ message: "Authorization is required" });
  }

  const accessToken = authHeader.split(" ")[1];
  if (!accessToken) {
    return res.status(401).json({ message: "Authorization is required" });
  }

  try {
    const decodedToken = await auth.verifyIdToken(accessToken);
    req.uid = decodedToken.uid;
    req.role = decodedToken.role;
    next();
  } catch (error) {
    res.status(401).json({ message: "Unauthorized" });
  }
};
