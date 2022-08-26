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
            TextoUsuario1: "Legal! Um passo já foi dado. Lembre também que identidade de gênero (como você se identifica) e sexualidade (por quem você se atrai) não possuem ligação!",
            TextoUsuario2: "Você errou. Pessoas transgêneras são pessoas que não se identificam com o gênero de registro (nascimento). Pessoas trans podem ser trans binárias (masculino/feminino) ou trans não-binárias (gênero fluido, agênero e mais). Importante: o gênero com que você se identifica NÃO possui ligação com sua sexualidade (pessoa por quem você se atrai)."
            },
            {
            Pergunta: "Você contrataria uma pessoa trans para trabalhar na sua empresa?",
            Op1: "Sim",
            Op2: "Não",
            Resposta1: "Sim",
            Resposta2: "Não",
            TextoUsuario1: "Boa! Você faz a diferença. Aproximadamente 38% de empresas tem restrições para a contratação de pessoas LGBTQIA+. Mas não basta apenas contratar, é necessário também o reconhecimento do(a) profissional!",
            TextoUsuario2: "Você errou. Infelizmente não são poucas as pessoas que pensam igual você. A taxa de desemprego de pessoas trans no Brasil é de 29,8%, porém 56,82% estão em situação de insegurança alimentar e cerca de 90% das mulheres trans e travestis recorrem à prostituição para conseguirem se manter."
            },
            {
            Pergunta: "Possui alguma pessoa trans no seu círculo social?",
            Op1: "Sim",
            Op2: "Não",
            Resposta1: "Sim",
            Resposta2: "Não",
            TextoUsuario1: "Gostei de ver! Agora, quantas pessoas? Uma? Mais?",
            TextoUsuario2: "Você errou. Te convido a pensar o motivo disso. Você não conhece ou nunca deu abertura à uma pessoa trans?"
            },
            {
            Pergunta: "Aceitaria um filho trans dentro da sua casa?",
            Op1: "Sim",
            Op2: "Não",
            Resposta1: "Sim",
            Resposta2: "Não",
            TextoUsuario1: "Isso aí! A maior demonstração de amor que você pode dar à alguém é aceitá-los(as) como eles(as) são. <3",
            TextoUsuario2: "Você errou. Das pessoas trans expulsas de casa, 29% tinham 15 anos ou menos e 49% tinham entre 16-20 anos. Em 2019, 35,5% das mortes violentas de LGBTQIA+ aconteceram dentro de suas próprias casas. Não faça parte dessa porcentagem e não deixe sua criança passar por isso."
            },
            {
            Pergunta: "Sabia que existem homens que engravidam?",
            Op1: "Sim",
            Op2: "Não",
            Resposta1: "Sim",
            Resposta2: "Não",
            TextoUsuario1: "Parabéns! Poucas pessoas tem a ciência disso.",
            TextoUsuario2: "Você errou. Homens trans que possuem útero podem gerar uma criança, porém é necessário a interrupção do tratamento hormonal (testosterona). Podem até amamentar, caso não tenham passado por uma cirurgia de retirada das mamas (mastectomia). Mulheres trans também podem amamentar, caso utilizem hormônios!"
            },
            {
            Pergunta: "Qual o maior medo de pessoas trans no Brasil?",
            Op1: "Ir em médicos",
            Op2: "Ser assassinado",
            Op3: "Utilizar o banheiro",
            Op4: "Não conseguir um emprego",
            Op5: "Todas as opções acima",
            Resposta1: "Todas as opções acima",
            Resposta2: "Ir em médicos" || "Ser assassinado" || "Utilizar o banheiro" || "Não conseguir um emprego",
            TextoUsuario1: "Acertou. Que bom que você tem a consciência disso!",
            TextoUsuario2: "Você errou. Ser trans no Brasil envolve muitos medos. Parece até piada dizer que uma coisa simples como ir ao banheiro é motivo para sentir medo, porém é a verdade. É onde podemos sofrer agressão caso a pessoa errada entre no banheiro."
            },
            {
            Pergunta: "Qual a expectativa de vida de uma pessoa trans?",
            Op1: "86 anos",
            Op2: "68 anos",
            Op3: "35 anos",
            Op4: "21 anos",
            Op5: "16 anos",
            Resposta1: "35 anos",
            Resposta2: "86 anos" || "68 anos" || "21 anos" || "16 anos",
            TextoUsuario1: "Você acertou. A expectativa de vida é assustadoramente baixa, não é? Vamos mudar isso juntos?",
            TextoUsuario2: "Você errou. Infelizmente a expectativa de vida de uma pessoa trans é de 35 anos. Isso devido à assassinatos, ou suicídio. Que tal mudarmos isso juntos? Espalhe informação."
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
            } else {
                console.log('nao é a certa, entao é a errada')
                texto.innerText = this.questionSelected.TextoUsuario2
                this.points -= 10

                this.checkStatus()
            }
            /* if(btn.innerText === this.questionSelected.Resposta2) {
                console.log("Errou. Veja o por que:")
                texto.innerText = this.questionSelected.TextoUsuario2
                this.points -= 10

                this.checkStatus()
            } */

    }

    checkStatus() {
        console.log("checando os status")
        const quiz = document.querySelector("#quiz")
        const win = document.querySelector("#win")
        const points20 = document.querySelector("#points20")
        const points60 = document.querySelector("#points60")
        const points80 = document.querySelector("#points80")
        const lose = document.querySelector("#lose")
        const btnContinue = document.querySelector("#score button")
        /* const score = document.querySelector("#score") */
        
        if (this.points === 0) {
            console.log("Você perdeu o jogo!")
            quiz.style.display = 'none'
            lose.style.display = 'flex'
        }


        if (this.rodada === this.questions.length-1) {
            if (this.points <= 20) {
                console.log("A coisa tá feia!")
                quiz.style.display = 'none'
                win.style.display = 'flex'
                btnContinue.style.display = 'none'
                points20.classList.remove("hide")
            }
            if (this.points >= 30 && this.points <= 60) {
                console.log("Você foi ok. Estude um pouco mais!")
                quiz.style.display = 'none'
                win.style.display = 'flex'
                btnContinue.style.display = 'none'
                points60.classList.remove("hide")
            }
            if (this.points >= 70) {
                console.log("CARACA!!! ARRASOU!!! ~vomitando arco-iris")
                quiz.style.display = 'none'
                win.style.display = 'flex'
                btnContinue.style.display = 'none'
                points80.classList.remove("hide")
            }
        }


    }
}
