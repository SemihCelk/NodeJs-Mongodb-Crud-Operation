const User = require("../model/user");
class UserService {
  async userCreate(name, surname, age) {
    const user = new User();
    user.name = name;
    user.surname = surname;
    user.age = age;
    return await user.save();
  }
  async userList(){
    return await User.find()
  }
  async userDel(name){
    return await User.deleteOne({name: name})
  } 
  async userUpdate(id){
   return await User.findByIdAndUpdate(id,{name:"test",surname:"as"})
  }
}
module.exports = new UserService();
