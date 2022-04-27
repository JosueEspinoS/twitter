const User = require('../../app/models/User')
const UserService = require ('./../../app/services/UserService')

describe("Test for UserService", () =>{
    test("1.-Create a new user using the UserService", () =>{
        const user = UserService.create (1, "JosueES", "Josue")
        expect(user.username).toBe("JosueES")
        expect(user.name).toBe("Josue")
        expect(user.id).toBe(1)
        expect(user.bio).not.toBeUndefined()
    })


    test("2.-Get all user data in list", () => {
        const user = UserService.create(1, "JosueES", "Josue")
        const userInfoInList = UserService.getInfo(user)
        expect(userInfoInList[0]).toBe(1)
        expect(userInfoInList[1]).toBe("JosueES")
        expect(userInfoInList[2]).toBe("Josue")
        expect(userInfoInList[3]).toBe("Sin Bio")
    })
    
    test("3.-Update username", () =>{
        const user = UserService.create(1, "JosueES", "Josue")
        UserService.updateUserUsername(user,"Pedro")
        expect(user.username).toBe("Pedro")
    })

    test("4.-Given a list of users give me the list of usernames", () => {
        const user1 = UserService.create(1,"carlogilmar1", "Carlo")
        const user2 = UserService.create(1,"carlogilmar2", "Carlo")
        const user3 = UserService.create(1,"carlogilmar3", "Carlo")
        const usernames = UserService.getAllUsernames([user1, user2, user3])

        expect(usernames).toContain("carlogilmar1")
        expect(usernames).toContain("carlogilmar2")
        expect(usernames).toContain("carlogilmar3")
    })
})