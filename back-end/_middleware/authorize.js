const jwt = require("express-jwt");
const { secret } =
  require("config.json")[process.env.NODE_ENV || "development"];
const db = require("_helpers/db");

module.exports = authorize;

function authorize(option = 0) {
  if (option == 1) {
    return [];
  } else {
    return [
      // authenticate JWT token and attach decoded token to request as req.user
      jwt({ secret, algorithms: ["HS256"] }),

      // attach full user record to request object
      async (req, res, next) => {
        // get user with id from token 'sub' (subject) property
        const user = await db.User.findByPk(req.user.sub);

        // check user still exists
        if (!user) return res.status(401).json({ message: "Unauthorized" });

        // authorization successful
        req.user = user.get();
        next();
      },
    ];
  }
}
