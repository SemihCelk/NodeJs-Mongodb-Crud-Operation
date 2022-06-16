const UserService = require("../services/user.service")

const createUser = async (req, res,next) => {
    const name = req.body.name
    const surname = req.body.surname
    const age = req.body.age
    try {
        const user = await UserService.userCreate(name,surname,age)
        res.status(201).json({
        succes:true,
        user:user
        })
    } catch (error) {
    console.log(error);
}
}
const lister= async(req,res,next)=>{
    const list = await UserService.userList()
    res.status(200).json({
        succes:true,
        data:list
    })
} 
const deleter = async(req,res,next)=>{
    const name = req.body.name
    const del = await UserService.userDel(name)
    res.status(200).json({
        succes:true,
        data:del
    })
}
const updater = async(req,res,next)=>{
    const id = req.body.id
    const update = await userService.userUpdate(id)
    res.status(200).json({
        succes:true,
        data:update
    }) 
}
module.exports = {createUser,lister,deleter,updater}