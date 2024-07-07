import passport from "passport";

export const authenticate = (req, res, next) => {
  passport.authenticate("jwt", { session: false }, (err, user, info) => {
    if (err) {
      console.error("Error in authentication middleware:", err);
      return next(err);
    }
    if (!user) {
      return res.status(401).json({
        success: false,
        message: info ? info.message : "Unauthorized access: no token or invalid token",
      });
    }
    req.user = user;
    next();
  })(req, res, next);
};
