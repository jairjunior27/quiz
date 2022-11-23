let questaoAtual = 0;
let respostaCerta = 0;
let num = 10;
document.querySelector(".btn-iniciar").addEventListener("click", () => {
  document.querySelector(".tela-inicial").style.display = "none";
  document.querySelector(".area-quiz").style.display = "block";
});

gerarDadosNaTela();

function gerarDadosNaTela() {
  if (questoes[questaoAtual]) {
    let q = questoes[questaoAtual];

    let porcentagem = Math.floor((questaoAtual / questoes.length) * 100);

    document.querySelector(".progresso").style.width = `${porcentagem}%`;

    console.log(porcentagem);

    document.querySelector(".pergunta").innerHTML = q.questao;
    document.querySelector(".opcoes-resposta").innerHTML = "";

    let html = "";

    for (let i in q.opcao) {
      html += `<div data-ob ="${i}" class="opcao"><span>${
        parseInt(i) + 1
      }</span>${q.opcao[i]}</div>`;
    }

    document.querySelector(".opcoes-resposta").innerHTML = html;

    document.querySelectorAll(".opcoes-resposta .opcao").forEach((item) => {
      item.classList.remove('acerto')
      item.addEventListener("click", clickQuestoes);
     
    });
  } else {
    finalDeQuiz();
  }
}

function clickQuestoes(e) {
  
  let opcaoClicada = parseInt(e.target.getAttribute("data-ob"));
  if (questoes[questaoAtual].resposta === opcaoClicada) {
  

     
   
    let audio = new Audio("./audio/som de acerto.mp3");
    audio.play();
    respostaCerta++;
   
  }
  
  
  else {
    
    audio = new Audio("./audio/som de erro.mp3");
    audio.play();
  }
  questaoAtual++;

  gerarDadosNaTela();
}

function finalDeQuiz() {
  let texto1 = document.querySelector(".resultado-txt-01");
  let textoPct = document.querySelector(".pct-acerto");
  let img = document.querySelector(".resultado-area img");

  let pontos = Math.round((respostaCerta / questoes.length) * 100);

  document.querySelector(".progresso").style.width = "100%";
  document.querySelector(".area-quiz").style.display = "none";
  document.querySelector(".resultado-area").style.display = "block";

  textoPct.innerHTML = `Você acertou ${pontos}%`;
  document.querySelector(
    ".resultado-txt-02"
  ).innerHTML = `Você respondeu ${questoes.length} e acertou ${respostaCerta}`;

  if (pontos <= 40) {
    texto1.innerHTML = "Tá ruim kkkkkkk";
    textoPct.style.color = "#FF0000";
    img.src = "./img/face-palm-1f926.png";
  } else if (pontos <= 60) {
    texto1.innerHTML = "Tá melhorando";
    textoPct.style.color = "#FFFF00";
    img.src = "./img/shrug-1f937.png";
  } else {
    texto1.innerHTML = "Parabéns!";
    textoPct.style.color = "#0D630D";
    img.src = "./img/prize.png";
  }
}

document.querySelector(".btn").addEventListener("click", resetar);

function resetar() {
  questaoAtual = 0;
  respostaCerta = 0;
  gerarDadosNaTela();
  document.querySelector(".resultado-area").style.display = "none";
  document.querySelector(".tela-inicial").style.display = "block";
}


//tela dark

document.querySelector('.icone').addEventListener('click', ()=>{

  document.querySelector('body').classList.toggle('dark')
})

