let users = (
    function (list) {
        var users = []
        for (var user of list)
            users.push({
                name: user,
                present: false
            })

        return {
            setUserPresent ( userName, present ) {
                users.forEach(user => userName === user.name ? user.present = present :
                    userName === undefined ? console.log( `${user.name}` ) : null
                )
            },
            showPresent() {
                users.filter(user => user.present ? console.log(user.name) : null)
            },
            showAbsent() {
                users.filter(user => !user.present ? console.log(user.name) : null)
            }
        }
    }
)(["Иван", "Дмитрий", "Степан", "Михаил"])
users.showAbsent()

users.setUserPresent( "Иван", "+" )
users.setUserPresent( "Михаил", "присутствовал" )
users.setUserPresent( "Степан", true )

users.showPresent()