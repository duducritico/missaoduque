const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativa");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [ 
    {
        enunciado: "Você esta se preparando para pegar a primeira curva. Qual a sua estratégia?",
        alterntivas: [
            {
                texto;"Ao chegar na curva frear",
                firmação:"Resposta errada",
                pontos:0
            },
            {
                texto:"Diminur a velocidade antes da curva e acelerar ao chegar na curva",
                afirmação:"Respota corrta",
                pontos:1
            }
        ]
    },
 {
        enunciado: "Quem foi o campeão de trilha em 2024?",
        alterntivas: [
            {
                texto;"Vinicius Calafati",
                firmação:"Resposta errada",
                pontos:0
            },
            {
                texto:"Bruno Crivilin",
                afirmação:"Respota corrta",
                pontos:1
            }
        ]
    },
     {
        enunciado: "Qual foi a moto usada por Bruno Crivilin?",
        alterntivas: [
            {
                texto;"Honda CRF 450RX",
                firmação:"Resposta errada",
                pontos:0
            },
            {
                texto:"Honda CRF 250RX",
                afirmação:"Respota corrta",
                pontos:1
            }
        ]
    },
     {
        enunciado: "Qual foi o local que ocorreu a corrida?",
        alterntivas: [
            {
                texto;"Xique-Xique(BA)",
                firmação:"Resposta errada",
                pontos:0
            },
            {
                texto:"Mairiporã (SP)",
                afirmação:"Respota corrta",
                pontos:1
            }
        ]
    },
     {
        enunciado: "O que valorizou mais a habilidade dos pilotos da equipe Honda Racing?",
        alterntivas: [
            {
                texto;"Motores e as motos",
                firmação:"Resposta errada",
                pontos:0
            },
            {
                texto:"Muita técnica por conta das fortes chuvas ",
                afirmação:"Respota corrta",
                pontos:1
            }
        ]
    },
]

