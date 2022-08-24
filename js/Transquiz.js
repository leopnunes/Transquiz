class Transquiz {
    constructor () {
        this.userName = ""
        this.points = 80
        this.questions = [
            {
            Pergunta: "Você se considera alguém que abraça a diversidade?",
            Op1: "Sim",
            Op2: "Não",
            Resposta1: "Sim",
            Resposta2: "Não",
            TextoUsuario1: "Vamos checar isso?",
            TextoUsuario2: "Vamos checar isso?",
            },
            {
            Pergunta: "Você sabe o que significa ser trans?",
            Op1: "Sim",
            Op2: "Não",
            Resposta1: "Sim",
            Resposta2: "Não",
            TextoUsuario1: "Legal! Um passo já foi dado.",
            TextoUsuario2: "Pessoas transgêneras são pessoas que não se identificam com o gênero de registro (nascimento). Isso engloba um escopo maior, pessoas trans podem ser trans binárias (masculino/feminino) ou trans não-binárias (gênero fluido, agênero e mais). Importante: o gênero com que você se identifica NÃO possui ligação com sua sexualidade (pessoa por quem você se atrai)."
            },
            {
            Pergunta: "Você contrataria uma pessoa trans para trabalhar na sua empresa?",
            Op1: "Sim",
            Op2: "Não",
            Resposta1: "Sim",
            Resposta2: "Não",
            TextoUsuario1: "Boa! Você faz parte de uma pequena porcentagem. X% de empresas não empregam pessoas trans.",
            TextoUsuario2: "Infelizmente não são poucas pessoas que pensam igual você. A taxa de desemprego de pessoas trans no Brasil é de x%, sendo que cerca de 90% da população trans recorre à prostituição para conseguir se manter."
            },
            {
            Pergunta: "Possui alguma pessoa trans no seu círculo social?",
            Op1: "Sim",
            Op2: "Não",
            Resposta1: "Sim",
            Resposta2: "Não",
            TextoUsuario1: "Gostei de ver! Agora, quantas pessoas? Uma? Mais?",
            TextoUsuario2: "Te convido a pensar o motivo disso. Você não conhece ou nunca deu abertura à uma pessoa trans?"
            },
            {
            Pergunta: "Aceitaria um filho trans na sua casa?",
            Op1: "Sim",
            Op2: "Não",
            Resposta1: "Sim",
            Resposta2: "Não",
            TextoUsuario1: "Certo",
            TextoUsuario2: "Errado"
            },
            {
            Pergunta: "Sabia que existem homens que engravidam?",
            Op1: "Sim",
            Op2: "Não",
            Resposta1: "Sim",
            Resposta2: "Não",
            TextoUsuario1: "Certo",
            TextoUsuario2: "Errado"
            },
            {
            Pergunta: "Qual o maior medo de pessoas trans no Brasil?",
            Op1: "Ir em médicos",
            Op2: "Ser assassinado",
            Op3: "Utilizar o banheiro",
            Op4: "Não conseguir um emprego",
            Op5: "Todas as opções acima",
            Resposta1: "Todas as opções acima",
            Resposta2: ["Ir em médicos", "Ser assassinado", "Utilizar o banheiro", "Não conseguir um emprego"],
            TextoUsuario1: "Certo",
            TextoUsuario2: "Errado"
            },
            {
            Pergunta: "Qual a expectativa de vida de uma pessoa trans?",
            Op1: "86 anos",
            Op2: "68 anos",
            Op3: "35 anos",
            Op4: "21 anos",
            Op5: "16 anos",
            Resposta1: "35 anos",
            Resposta2: !("35 anos"),
            TextoUsuario1: "Você acertou. A expectativa de vida é assustadoramente baixa, não é? Vamos mudar isso juntos?",
            TextoUsuario2: "Infelizmente a expectativa de vida de uma pessoa trans é de 35 anos. Isso devido à assassinatos, ou suicídio. Que tal mudarmos isso juntos? Espalhe informação."
            }
        ]
        this.questionSelected = this.getQuestion()
        this.rodada = 0

    }

    getQuestion() {
        console.log(this.rodada)
        console.log(this.questions.length)
        if (this.rodada === this.questions.length) {
            return
        }
        this.questionSelected = this.questions[this.rodada]
        
    }

    nextQuestion() {
        if (this.rodada === this.questions.length) {
            return
        }
        this.rodada++
        this.getQuestion()
    }

    checkAnswer(btn) {
        console.log(btn)
            if(btn.innerText === this.questionSelected.Resposta1) {
                console.log("Arrasou! Continue assim ;)")
                texto.innerText = this.questionSelected.TextoUsuario1

                this.checkStatus()
            } 
            if(btn.innerText === this.questionSelected.Resposta2) {
                console.log("Errou. Veja o por que:")
                texto.innerText = this.questionSelected.TextoUsuario2
                this.points -= 10

                this.checkStatus()
            }

    }

    checkStatus() {
        console.log("checando os status")
        const quiz = document.querySelector("#quiz")
        const points20 = document.querySelector("#points20")
        const points60 = document.querySelector("#points60")
        const points80 = document.querySelector("#points80")
        const win = document.querySelector("#win")
        
        if (this.points === 0) {
            console.log("Você perdeu o jogo!")
            quiz.classList.add("hide")
            let div = document.createElement("div")
            div.innerHTML =
            `Você <strong>perdeu</strong>. Pesquise mais!`
        }

        if (this.rodada === this.questions.length) {
            if (this.points <= 20) {
                console.log("A coisa tá feia!")
                quiz.classList.add("hide")
                win.classList.remove("hide")
                points20.classList.remove("hide")
            }
            if (this.points >= 30 && this.points <= 60) {
                console.log("Você foi ok. Estude um pouco mais!")
                quiz.classList.add("hide")
                win.classList.remove("hide")
                points60.classList.remove("hide")
            }
            if (this.points >= 70) {
                console.log("CARACA!!! ARRASOU!!! ~vomitando arco-iris")
                quiz.classList.add("hide")
                win.classList.remove("hide")
                points80.classList.remove("hide")
            }
        }


    }
}
