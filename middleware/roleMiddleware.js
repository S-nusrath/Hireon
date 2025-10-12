// middleware/roleMiddleware.js
export const requireRecruiter = (req, res, next) => {
  if (!req.user) return res.status(401).json({ message: "Not authorized" });
  if (req.user.userRole !== "recruiter") return res.status(403).json({ message: "Recruiter access only" });
  next();
};