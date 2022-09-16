const adminHelper = require("../helpers/adminHelper");
module.exports = {
  adminLogin: (req, res) => {
    adminHelper
      .login(req.body)
      .then((adminData) => {
        adminHelper
          .getAdminToken(adminData)
          .then((token) => {
            res.json({ status: "Done", token: token, admin: true });
          })
          .catch((error) => {
            res.json({ status: error.status, admin: false });
          });
      })
      .catch((error) => {
        res.json({ status: error.status, admin: false });
      });
  },
};
