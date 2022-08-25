const game = new Transquiz()

const btnPlay = document.querySelector("#inicio button")
const inicio = document.querySelector("#inicio")
const nameInput = document.querySelector("#inicio input")
const name = document.querySelector("#name")
const points = document.querySelector("#points")
const score = document.querySelector("#score")
const quiz = document.querySelector("#quiz")
const pergunta = document.querySelector("#pergunta")
const perguntaBox = document.querySelector("#quiz div")
const o1 = document.querySelector("#quiz .o1")
const o2 = document.querySelector("#quiz .o2")
const o3 = document.querySelector("#quiz .o3")
const o4 = document.querySelector("#quiz .o4")
const o5 = document.querySelector("#quiz .o5")
const btnContinue = document.querySelector("#score button")
const texto = document.querySelector("#quiz .texto")
const points20 = document.querySelector("#points20")
const points60 = document.querySelector("#points60")
const points80 = document.querySelector("#points80")
const win = document.querySelector("#win")
const lose = document.querySelector("#lose")
const divGame = document.querySelector("#divGame")


btnPlay.addEventListener("click", () => {
    if (nameInput.value === "") {
        return
    }

    inicio.style.display = "none"
    o3.classList.add("hide")
    o4.classList.add("hide")
    o5.classList.add("hide")
    score.classList.remove("hide")
    score.style.display = "flex"
    perguntaBox.classList.remove("hide")
    quiz.style.display = "flex"
    perguntaBox.classList.add("questions")

    game.userName = nameInput.value

    name.innerText = game.userName

    points.innerText = game.points

    
    game.getQuestion()
    console.log(game.questionSelected)
    pergunta.innerText = game.questionSelected.Pergunta
    o1.innerText = game.questionSelected.Op1
    o2.innerText = game.questionSelected.Op2
    btnContinue.style.display = "none"
})

btnContinue.addEventListener("click", () => {
    texto.innerText = ''
    console.log("continuar")
    game.nextQuestion()
    console.log(game.questionSelected)

    //trocando as perguntas no html - perguntas com duas questoes
    pergunta.innerText = game.questionSelected.Pergunta
    o1.innerText = game.questionSelected.Op1
    o2.innerText = game.questionSelected.Op2

    //se estiver na rodada acima de 6, renderizar desse jeito
    if (game.rodada > 5) {
        console.log("renderizar outras opçoes")
        //mostrar o restante dos botoes
        //adicionar o innerText com o restante das alternativas
        o3.classList.remove("hide")
        o4.classList.remove("hide")
        o5.classList.remove("hide")
        o3.innerText = game.questionSelected.Op3
        o4.innerText = game.questionSelected.Op4
        o5.innerText = game.questionSelected.Op5

    }

    btnContinue.style.display = "none"


})

o1.addEventListener("click", () => {
    texto.innerText = game.questionSelected.Op1
    game.checkAnswer(o1)
    points.innerText = game.points
    btnContinue.style.display = "block"

})

o2.addEventListener("click", () => {
    texto.innerText = game.questionSelected.Op2
    game.checkAnswer(o2)
    points.innerText = game.points
    btnContinue.style.display = "block"

})

o3.addEventListener("click", () => {
    texto.innerText = game.questionSelected.Op3
    game.checkAnswer(o3)
    points.innerText = game.points
    btnContinue.style.display = "block"

})

o4.addEventListener("click", () => {
    texto.innerText = game.questionSelected.Op4
    game.checkAnswer(o4)
    points.innerText = game.points
    btnContinue.style.display = "block"

})

o5.addEventListener("click", () => {
    texto.innerText = game.questionSelected.Op5
    game.checkAnswer(o5)
    points.innerText = game.points
    btnContinue.style.display = "block"

})