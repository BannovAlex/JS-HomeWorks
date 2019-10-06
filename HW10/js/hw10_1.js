let messages = [
    "backspace",
    "enter",
    "shift",
    "control",
    "delete",
    "space",
    "subtract"
]

var log = {}
var sendMessage = ( message, callback ) =>
    setTimeout (
        () => callback ( message ),
        Math.random () * 7000
    )
messages.forEach (
    message => sendMessage ( message, handler )
)
messages.getKey = () => {
    var key = new Date().toLocaleString().split(", ")[1]
    return log [ key ] ? key + "[2]" : key
}
function handler (message){
    var time = messages.getKey()
    Object.defineProperty (log, time, {
        value: message
    })
}