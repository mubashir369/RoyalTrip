const userHelper = require("../helpers/userHelpers");

module.exports = {
  signUp: (req, res) => {
    console.log("SignUp api call Received");
    userHelper
      .signUp(req.body)
      .then(() => {
        userHelper
          .getToken(req.body.email)
          .then((token) => {
            res.json({ status: "Done", user: true, token: token });
          })
          .catch(() => {
            console.log(req.body.email);
            res.json({ status: "User Not Fount", user: false });
          });
      })
      .catch((err) => {
        res.json({ status: `${req.body.email} Already Exist`, user: false });
      });
  },
  userLogin: (req, res) => {
    console.log("login api call Received");
    userHelper
      .login(req.body)
      .then(() => {
        userHelper.getToken(req.body.email).then((token) => {
          res.json({ status: "Done", user: true, token: token });
        });
      })
      .catch(({ status }) => {
        res.json({ status: status, user: false });
      });
  },
};
