const db = require('../business-logic/user-db')

module.exports = {
    login:async(user)=>{
        try {
        let userExist = await db.checkUserExist(user);
        if(userExist.status){
            return userExist.user
        }
        return userExist.msg
        } catch (error) {
            console.error(error)   
        }
    }
}