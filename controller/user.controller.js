const UserService = require("../services/user.service");

const createUser = async (req, res, next) => {
  const name = req.body.name;
  const surname = req.body.surname;
  const age = req.body.age;
  const company = req.body.companyName;
  try {
    const user = await UserService.userCreate(name, surname, age, company);
    console.log(user);
    res.status(201).json({
      succes: true,
      user: user,
    });
  } catch (error) {
    console.log(error);
    next();
  }
};
const lister = async (req, res, next) => {
  try {
    const list = await UserService.userList();
    console.log(list);
    res.status(200).json({
      succes: true,
      data: list,
    });
  } catch (error) {
    console.log(error);
    next();
  }
};
const deleter = async (req, res, next) => {
  const name = req.body.name;
  try {
    const del = await UserService.userDel(name);
    res.status(200).json({
      succes: true,
      data: del,
    });
  } catch (error) {
    console.log(error);
    next();
  }
}; 
const updater = async (req, res, next) => {
  const id = req.body.id;
  const name = req.body.name;
  const surname = req.body.surname;
  const age = req.body.age;
  const company = req.body.companyName
  try {
    const update = await UserService.userUpdate(id,surname,name,age,company);
    console.log(update);
    res.status(200).json({
      succes: true,
      data: update,
    });
  } catch (error) {
    console.log(error);
    next();
  }
}
module.exports = { createUser, lister, deleter, updater };
