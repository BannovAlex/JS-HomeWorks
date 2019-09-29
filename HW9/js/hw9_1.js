function typeMessage ( message, velocity ) {
    var container = document.getElementById ( "demo" ) ?
        document.getElementById ( "demo" ) :
        document.body.appendChild (
            document.createElement ( "h3" )
        )
    container.style = `color: magenta;`
    message.split("").forEach ((item, index ) =>  setTimeout (
            () => container.textContent += item,
            1000 * velocity * index
        )
    )
}

typeMessage ( `Welcome to the hell`, 1 )