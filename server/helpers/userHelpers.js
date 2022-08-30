const User = require("../models/userModel");
const bcrypt = require("bcryptjs");
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
        console.log(password);
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
};
