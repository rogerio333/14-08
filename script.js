const caixaPrincipal = document.querySelector(".principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        alternativas: [
            {
                texto: "vocẽ gosta de academia ?",
            },
            {
                texto: "Não gosta de academia ?",
            }
        ]
    },
    {
        alternativas: [
            {
                texto: "Já tentou parar de fazer supino reto ?",
            },
            {
                texto: "Naõ tentei nada.",
            }
        ]
    },
    {
        alternativas: [
            {
                texto: "Procurou auxílio na internet, vídeos no YouTube, sobre academia.",
            },
            {
                texto: "Não procurei nada.",
            }
        ]
    },
    {
        alternativas: [
            {
                texto: "Um bom local para fazer alongamento",
            },
            {
                texto: "Não quero fazer alongamento.",
            }
        ]
    },
    {
        alternativas: [
            {
                texto: "Posso procurar video na internet sobre imagrecimento.",
            },
            {
                texto: "Não quero procurar.",
            }
        ]
    },
    {
        alternativas: [
            {
                texto: "Posso fazer agachamento livre, .",
            },
            {
                texto: "Não quero fazer.",
            }
        ]
    },
    {
        alternativas: [
            {
                texto: "Espero ter ajudado no treino.",
            },
            {
                texto: "Atualize a página para começar.",
            }
        ]
    },

];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraAlternativas(){
    perguntaAtual = perguntas[atual];
    caixaAlternativas.textContent = "";

    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    atual++;
    mostraAlternativas();
}


mostraAlternativas();