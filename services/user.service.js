const User = require("../model/user");
class UserService {
  async userCreate(name, surname, age,company) {
    const user = new User();
    user.name = name;
    user.surname = surname;
    user.age = age;
    user.companyName=company
    return await user.save();
  }
  async userList(){
    return await User.find()
  }
  async userDel(name){
    return await User.deleteOne({name: name})
  } 
  async userUpdate(id,surname,name,age,company){
   return await User.findByIdAndUpdate(id,{name:name,surname:surname,age:age,companyName:company})
  }
}
module.exports = new UserService();
