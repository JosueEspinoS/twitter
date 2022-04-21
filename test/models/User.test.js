
const User = require('./../../app/models/User')
describe("Prueba de jest", () => {
    test("Requerimiento 1: Creacion de user", () => {
        const user = new User(1,"JosueEspino","Josue","Bio", "dateCreated", "lastUpdate")
        expect(user.id).toBe(1)
        expect(user.username).toBe("JosueEspino")

    })

    test("Requerimiento 2: Fechas en atributos de User", () => {
        const user = new User(1, "JosueEspino", "Josue" , "Bio")
        expect(user.dateCreated).not.toBeUndefined()
        expect(user.lastUpdate).not.toBeUndefined()
    })

    test("Requerimiento 3: Agregando Getters", ()=> {
        const user = new User(1, "JosueEspino", "Josue" , "Bio")
        expect(user.getUsername).toBe("JosueEspino")
    })

    test("Requerimiento 4: agregando setters" , () =>{
        const user = new User(1, "JosueEspino", "Josue" , "Bio")
        user.setUsername = "JosueES"
        expect(user.username).toBe("JosueES")

    })
})