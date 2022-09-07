const userHelper = require("../helpers/userHelpers");
module.exports = {
  loginWithGoogle: (req, res) => {
    userHelper
      .login(req.body)
      .then(() => {
        res.json({ status: "ok" });
      })
      .catch(() => {
        res.json({ status: "error" });
      });
  },
  signUp: (req, res) => {
    console.log("sign");
    userHelper
      .signUp(req.body)
      .then(() => {
        res.json({ status: "ok", user:true });
      })
      .catch((err) => {
        res.json({ status: "error" });
      });
  },
};
