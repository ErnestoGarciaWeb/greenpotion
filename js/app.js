function seleccionar(link) {
    let links = document.querySelectorAll("header nav a")
    links[0].className = ";"
    links[1].className = ";"
    links[2].className = ";"
    links[3].className = ";"

    link.className = "selected";
}