const db = require('../business-logic/user-db')
const loginFn = require('../controls/loginFn')

module.exports = {

    userRegister_ : async(req,res)=>{
        try {
            let user = req.body;
            let checkUser = await db.checkUSerExistOrnot(user)
            let newUser = await db.userRegisterdb(user);
            res.status(200).json({status:'success',data:newUser});
        } catch (error) {
            res.status(500).json({status:'server error',errMsg:"registration failed"});
        }
    },

    loginUser:async(req,res)=>{
        try {
            let user = req.body;
            let authUser = await loginFn.login(user);
            if(authUser.msg){
                res.status(200).json({status:false,msg:authUser.msg})
            }else{
                res.statu(200).json({status:true,user:authUser.user})
            }
        } catch (error) {
            res.status(500).json({statu:'server error',errMsg:"login failed"})
        }
    }
}