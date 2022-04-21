
const User = require('./../../app/models/User')
describe("Prueba de jest", () => {
    test("Creacion de user", () => {
        const user = new User(1,"JosueEspino","Josue","Bio", "dateCreated", "lastUpdate")
        expect(user.id).toBe(1)
        expect(user.username).toBe("JosueEspino")

    })
})