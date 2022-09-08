const { json } = require("express");
const userHelper = require("../helpers/userHelpers");

module.exports = {
  signUp: (req, res) => {
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
        res.json({ status: "Email Already Exist", user: false });
      });
  },
  userLogin: (req, res) => {
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
