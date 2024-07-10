let phrases = ["Não dê atenção às palavras vãs de más línguas.",
    "Seja orgulhoso, porém tolerante e generoso.",
    "Uma boa época para terminar tarefas antigas.",
    "Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu.",
    "Pare de procurar eternamente, a felicidade está bem ao seu lado",
    "A vontade das pessoas é a melhor das leis",
    "Sua mente é criativa, original e perspicaz"
]

//Events
function showLuck() {
    document.querySelector(".closedCookie").classList.add("hide")
    document.querySelector(".openedCookie").classList.remove("hide")
    document.querySelector(".openedCookie p" ).innerHTML= `${phrases[((Math.random()*(phrases.length-1)).toFixed(0))]}`

}
function goBack() {
    document.querySelector(".closedCookie").classList.remove("hide")
    document.querySelector(".openedCookie").classList.add("hide")
}
let cookie = document.querySelector(".closedCookie img")
cookie.addEventListener('click', showLuck)

let button = document.querySelector("button")
button.addEventListener('click', goBack)
