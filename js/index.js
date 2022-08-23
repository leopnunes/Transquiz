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


btnPlay.addEventListener("click", () => {
    if (nameInput.value === "") {
        return
    }

    inicio.style.display = "none"
    score.classList.remove("hide")
    perguntaBox.classList.remove("hide")
    perguntaBox.classList.add("questions")

    game.userName = nameInput.value

    name.innerText = game.userName

    points.innerText = game.points

    
    game.getQuestion()
    console.log(game.questionSelected)
    pergunta.innerText = game.questionSelected.Pergunta
    o1.innerText = game.questionSelected.Op1
    o2.innerText = game.questionSelected.Op2
    o3.innerText = game.questionSelected.Op3

})

btnContinue.addEventListener("click", () => {
    texto.innerText = ''
    console.log("continuar")
    game.nextQuestion()
    console.log(game.questionSelected)

    pergunta.innerText = game.questionSelected.Pergunta

})

o1.addEventListener("click", () => {
    texto.innerText = game.questionSelected.Op1
    this.checkAnswer()
})

o2.addEventListener("click", () => {
    texto.innerText = game.questionSelected.Op2
    this.checkAnswer()
})

o3.addEventListener("click", () => {
    texto.innerText = game.questionSelected.Op3
    this.checkAnswer()
})

/* btnContinue.addEventListener("click", () => {
    pergunta2.classList.add("hide")
    pergunta3.classList.remove("hide")
}) */


/* const perg1 = {
    pergunta: "Essa é a pergunta 1?",
    op1: "Essa é a opção1",
    op2: "Essa é a opção2",
    op3: "Essa é a opção3",
    resp: "Essa é a resposta 1."
}

const perg2 = {
    pergunta: "Essa é a pergunta 2?",
    op1: "Essa é a opção1",
    op2: "Essa é a opção2",
    op3: "Essa é a opção3",
    resp: "Essa é a resposta 2."
}

const perg3 = {
    pergunta: "Essa é a pergunta 2?",
    op1: "Essa é a opção1",
    op2: "Essa é a opção2",
    op3: "Essa é a opção3",
    resp: "Essa é a resposta 2."
}

let perguntas = [{perg1, perg2, perg3}]
 */