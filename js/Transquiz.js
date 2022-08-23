class Transquiz {
    constructor () {
        this.userName = ""
        this.points = 70
        this.questions = [{
            Pergunta: "Essa é a pergunta 1?",
            Op1: "Opção 1",
            Op2: "Opção 2",
            Resposta: "Opção 1"
            },
            {
            Pergunta: "Essa é a pergunta 2?",
            Op1: "Opção 1",
            Op2: "Opção 2",
            Resposta: "Opção 1"
            },
            {
            Pergunta: "Essa é a pergunta 3?",
            Op1: "Opção 1",
            Op2: "Opção 2",
            Resposta: "Opção 1"
            },
            {
            Pergunta: "Essa é a pergunta 4?",
            Op1: "Opção 1",
            Op2: "Opção 2",
            Resposta: "Opção 1"
            },
            {
            Pergunta: "Essa é a pergunta 5?",
            Op1: "Opção 1",
            Op2: "Opção 2",
            Resposta: "Opção 1"
            },
            {
            Pergunta: "Essa é a pergunta 6?",
            Op1: "Opção 1",
            Op2: "Opção 2",
            Resposta: "Opção 1"
            },
            {
            Pergunta: "Essa é a pergunta 7?",
            Op1: "Opção 1",
            Op2: "Opção 2",
            Op3: "Opção 3",
            Op4: "Opção 4",
            Op5: "Opção 5",
            Resposta: "Opção 5"
            }
            ]
        this.questionSelected = this.getQuestion()
        this.rodada = 0
        this.resposta = this.questions[4]
    }

    getQuestion() {
        this.questionSelected = this.questions[this.rodada]
    }

    nextQuestion() {
        this.rodada++
        this.getQuestion()
    }

    checkAnswer() {
        this.questionSelected.forEach(() => {
            if(this.resposta === this.questionSelected) {
                console.log("Arrasou! Continue assim ;)")

                this.checkStatus()
            } else {
                console.log("Errou. Veja o por que:")
                texto.innerText = this.questionSelected.Resposta
                this.points -= 10

                this.checkStatus()
            }
        })

    }

    checkStatus() {
        console.log("checando os status")

        if (this.points === 0) {
            console.log("Você perdeu o jogo!")
        }
    }
}
