const User = require("../models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
module.exports = {
  login: (data) => {
    return new Promise((resolve, reject) => {
      try {
        resolve();
      } catch {
        reject();
      }
    });
  },
  signUp: (data) => {
    return new Promise(async (resolve, reject) => {
      try {
        const password = await bcrypt.hash(data.password, 10);
        await User.create({
          name: data.name,
          email: data.email,
          password: password,
        });
        resolve();
      } catch (error) {
        console.log(error);
        console.log("this is catck");
        reject(error);
      }
    });
  },
  getToken: (email) => {
    return new Promise(async (resolve, reject) => {
      try {
        const user = await User.findOne({ email: email });
        const token = jwt.sign(
          {
            name: user.name,
            email: user.email,
          },
          "secret123"
        );
        resolve(token);
      } catch (err) {
        console.log(err);
        reject(err);
      }
    });
  },
};
