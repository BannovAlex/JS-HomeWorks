function User ( name ) {
    this.name = name
    var presence = false
    Object.defineProperty(this, "presence", {
        get: () => presence ? `${this.name} is presencet` : `${this.name} is absent `,
        set: absent => presence = absent
    })
}
let user = new User ( "Ivan" )
console.info ( user.presence )
user.presence = "+"
console.info ( user.presence )