const request = new XMLHttpRequest
request.open ("GET", "first.json")
request.onreadystatechange = event => {
    this.readyState === 4 && this.status === 200 ?
        appendElement(JSON.parse(this.responseText)) :
        null
}
function addImage (tags) {
    for (var tag of tags) {
        let elem = document.body.appendChild(document.createElement(tag.name))
        elem.setAttribute("src", tag.ref)
        elem.setAttribute("title", tag.title)
        elem.width = 200
    }
}

request.send()