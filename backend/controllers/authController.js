const User = require("../models/user");

const { hash, genSalt, compare } = require("bcryptjs");
const jwt = require("jsonwebtoken");

const JWT_SECRET = "aniljjcjkjzckjjxcx";
exports.register = async (req, res, next) => {
  try {
    const { email, name, password } = req.body;
    if (!name) {
      res.status(401).json({ msg: "name required", success: false });
    }
    if (!email) {
      res.status(401).json({ msg: "email required", success: false });
    }
    if (!password) {
      res.status(401).json({ msg: "password required", success: false });
    }
    let user = await User.findOne({ email: email });

    if (user) {
      res
        .status(401)
        .json({ status: false, msg: "User Allready exist with email" });
    } else {
      const salt = await genSalt(10);
      const secPass = await hash(password, salt);
      user = await User.create({
        name: name,
        email: email,
        password: secPass,
      });
      const data = {
        user: {
          id: user.id,
        },
      };
      const token = jwt.sign(data, JWT_SECRET);

      res.status(200).json({
        status: true,
        token: token,
        msg: "You Have Register  Successfully",
        user: user,
      });
    }
  } catch (error) {
    console.log(error);
  }
};

//login user

exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email) {
      res.status(401).json({ msg: "email required", success: false });
    }
    if (!password) {
      res.status(401).json({ msg: "password required", success: false });
    }
    let user = await User.findOne({ email: email });

    if (!user) {
      res.status(401).json({ status: false, msg: "User Not exist with email" });
    } else {
      const matpassword = await compare(password, user.password);
      if (!matpassword) {
        res
          .status(401)
          .json({ status: false, msg: "User Not exist with email" });
      } else {
        const data = {
          user: {
            id: user.id,
          },
        };
        const token = jwt.sign(data, JWT_SECRET);

        res.status(200).json({
          status: true,
          token: token,
          msg: "You Have login  Successfully",
          user: user,
        });
      }
    }
  } catch (error) {
    console.log(error);
  }
};

//add staff by admin

exports.addstaff = async (req, res, next) => {
  try {
    const { email, name, password, staffttype } = req.body;
    if (!name) {
      res.status(401).json({ msg: "name required", success: false });
    }
    if (!email) {
      res.status(401).json({ msg: "email required", success: false });
    }
    if (!password) {
      res.status(401).json({ msg: "password required", success: false });
    }
    let user = await User.findOne({ email: email });

    if (user) {
      res
        .status(401)
        .json({ status: false, msg: "User Allready exist with email" });
    } else {
      const salt = await genSalt(10);
      const secPass = await hash(password, salt);
      user = await User.create({
        name: name,
        email: email,
        password: secPass,
        staffttype: staffttype,
        staff: true,
      });
      const data = {
        user: {
          id: user.id,
        },
      };
      const token = jwt.sign(data, JWT_SECRET);

      res.status(200).json({
        status: true,
        token: token,
        msg: "staff added  Successfully",
        user: user,
      });
    }
  } catch (error) {
    console.log(error);
  }
};

// get staff list for order

exports.getsfafflist = async (req, res, next) => {
  try {
    const staffmembers = await User.find({ staff: true });
    if (!staffmembers) {
      res.status(404).json({
        status: false,
        msg: "daystaff not found",
      });
    }
    res.status(200).json({
      status: true,
      staffmembers: staffmembers,
    });
  } catch (error) {
    console.log(error);
  }
};

//delete staff

exports.deletestaff = async (req, res, next) => {
  try {
    const user = await User.findOne({ _id: req.params.id });
    if (!user) {
      res.status(200).json({
        status: false,
        msg: "staff member  is not esit",
      });
    }

    await User.findByIdAndDelete({ _id: req.params.id });

    res.status(200).json({
      status: true,
      msg: "staff deleted successfuuly",
    });
  } catch (error) {
    console.log(error);
  }
};
