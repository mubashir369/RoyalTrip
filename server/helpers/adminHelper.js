const Admin = require("../models/adminModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

module.exports = {
  login: (data) => {
    return new Promise(async (resolve, reject) => {
      try {
        const admin = await Admin.findOne({ email: data.adminEmail });
        if (data.adminEmail === admin.email) {
          const validate = await bcrypt.compare(
            data.adminPassword,
            admin.password
          );
          if (validate) {
            resolve(admin);
          } else {
            reject({ status: "Wrong Password" });
          }
        } else {
          reject({ status: "Wrong Email ID" });
        }
      } catch (error) {
        reject({ status: "Email ID Not Exist", error: error });
      }
    });
  },
  getAdminToken: (data) => {
    return new Promise((resolve, reject) => {
      try {
        const token = jwt.sign(
          {
            email: data.email,
            password: data.password,
          },
          "secret123"
        );
        resolve(token);
      } catch (error) {
        reject({ status: "Something Wrong try Again Later", error: error });
      }
    });
  },
};
