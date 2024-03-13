const model = require('../models/schema');

module.exports = {

    userRegisterdb: async (user)=>{
        try {
            let createUser = await model.userModel.create(user);
            return createUser;
        } catch (error) {
            console.error("error in registering user",error);
            throw new Error('error in registeration')
        }
    },

    checkUserExist:async(user)=>{
        try {
           console.log(user);
           let getUser = await model.userModel.findOne({email:user.email});
           console.log(getUser);
           if(!getUser){
            return {status:false,msg:'user not found'};
           }
           if(getUser.password != user.password){
            return {staus:false,msg:'incorrect password'};
           }
           return {status:true,user:getUser};
        } catch (error) {
            console.error('error occured in user login',error);
            throw new Error('error in user login');
        }
    },

    checkUSerExistOrnot:async(user)=>{
        try {
            let getUser = await model.userModel.findOne({email:user.email});
            if(getUser){
                return {status:'found'}
            }else{
                return {status:"notFound"}
            }
        } catch (error) {
            
        }
    }
}