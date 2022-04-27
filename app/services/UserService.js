const User = require('./../models/User')

class UserService {
    static create(id, username, name){
        return new User(id, username, name, "Sin Bio")
    }

    static getInfo(user){        
        return [user.id, user.username, user.name, user.bio]
    }

    static updateUserUsername(user, newUsername){
        return user.username = newUsername
    }

    static getAllUsernames([user1, user2, user3]){
        return [user1.username, user2.username, user3.username]
    }    
    
    
}

module.exports = UserService