let message = document.querySelector("#message")

let button = document.querySelector("button")

let addMovie = event => {

    event.preventDefault()
    let inputField = document.querySelector("#input")    
    let movie = document.createElement("li")
    let movieTitle = document.createElement("span")
    movieTitle.textContent = inputField.value

    movieTitle.addEventListener("click", crossOffMovie)
    
    movie.appendChild(movieTitle)

    document.querySelector("ul").appendChild(movie)

    let deleteBtn = document.createElement("button")
    deleteBtn.textContent = "X"
    deleteBtn.addEventListener("click", deleteMovie)
    movie.appendChild(deleteBtn)

    

    inputField.value=""
}

document.querySelector("form").addEventListener("submit", addMovie)

let deleteMovie = event => {
    event.target.parentNode.remove()
    message.textContent = `${event.target.parentNode.firstChild.textContent} has been deleted`
 
    revealMessage()
}

let crossOffMovie = event => {
    event.target.classList.toggle("checked")
    if (event.target.classList.contains("checked")) {
        message.textContent = `${event.target.textContent} watched!`
    } else {
        message.textContent = `${event.target.textContent} added back.`
    }
    revealMessage()
    
}

let revealMessage = () => {
    message.classList.remove("hide")
    setTimeout(() => {
        message.classList = "hide"
    }, 1000);
}