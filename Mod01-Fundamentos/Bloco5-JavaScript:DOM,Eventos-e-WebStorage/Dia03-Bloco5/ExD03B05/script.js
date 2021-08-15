function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();

  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];;
  // Exercicio 1
  
  function CriaDiasDoMes() {
    let listaMes = document.getElementById("days")
    let comprimento = dezDaysList.length;
    for(let index = 0; index < comprimento; index+= 1){
      let diaNum = dezDaysList[index];
      let dia = document.createElement("li")

      if(diaNum === 4 || diaNum === 11 || diaNum === 18) {
        dia.className = "day friday" 
        dia.innerText = diaNum;
        listaMes.appendChild(dia)
      } else if (diaNum === 24 || diaNum === 31) {
        dia.className = "day holiday"
        dia.innerText = diaNum;
        listaMes.appendChild(dia)
      } else if (diaNum === 25) {
        dia.className = "day holiday friday"
        dia.innerText = diaNum;
        listaMes.appendChild(dia);
      } else {
        dia.className = "day"
        dia.innerText = diaNum;
        listaMes.appendChild(dia);
      }
    }
   }
  
  CriaDiasDoMes();


  // Exercicio 2
  function BotãoFeriado (string) {
    let divContainer = document.querySelector(".buttons-container")
    let botão = document.createElement("button")
    let IdBotão = "btn-holiday"

    botão.innerHTML = string;
    botão.id = IdBotão;
    divContainer.appendChild(botão)
  };

  BotãoFeriado("Feriados")

  //Exercicio 3
  function AdicionaEventoClickBotão () {
    let Botão = document.getElementById("btn-holiday");
    let Dias = document.querySelectorAll(".holiday");
    let corDeFundo = "rgb(238,238,238)";
    let corInicial = "white";
    let comprimentoBotão = Dias.length;
    Botão.addEventListener("click", function() {
      for(let index = 0; index < comprimentoBotão; index+= 1) {
        if(Dias[index].style.background === corInicial) {
          Dias[index].style.background = corDeFundo;
        } else {
          Dias[index].style.background = corInicial;
        }
      }
    })
  }

  AdicionaEventoClickBotão()

  //Exercicio 4
  function BotãoSexta (string) {
    let divContainer = document.querySelector(".buttons-container")
    let botão = document.createElement("button")
    let IdBotão = "btn-friday"

    botão.innerHTML = string;
    botão.id = IdBotão;
    divContainer.appendChild(botão)
  }

  BotãoSexta("Sexta-Feira")


  //Exercicio 5
  function AdicionaEventoClickBotãoSexta (array) {
    let Botão = document.getElementById("btn-friday");
    let Dias = document.querySelectorAll(".friday");
    let Texto = "DESCANSO, SQN.";
    let comprimentoBotão = Dias.length;

    Botão.addEventListener("click", function() { 
      
      for(let index = 0; index < comprimentoBotão; index += 1) {
        if(Dias[index].innerHTML !== Texto) {
           Dias[index].innerHTML = Texto;
        } else {
           Dias[index].innerHTML = Diasxta[index];
        }
      }
    })
  }
  
  let Diasxta = [4,11,18,25]
  AdicionaEventoClickBotãoSexta(Diasxta)

  //Exercicio 6
  function mouseOverZoom () {
    let Dias = document.querySelector("#days"); 

    Dias.addEventListener("mouseover",function(evento) {
      evento.target.style.fontSize = "30px";
      evento.target.style.fontWeigt = "600";
    })
 };

 function mouseOutZoom () {
    let Dias = document.querySelector("#days");

    Dias.addEventListener("mouseout", function(evento){
      evento.target.style.fontWeigt = "200";
      evento.target.style.fontSize = "20px";
    })
 };

 mouseOverZoom()
 mouseOutZoom()

 //Exercicio 7
 function tarefaPersonalizada (string) {
  let Div = document.querySelector(".my-tasks");
  let Tarefa = document.createElement("span");
  Tarefa.innerHTML = string
  Div.appendChild(Tarefa)
}

tarefaPersonalizada("cozinhar")

//Exercicio 8 
function legendaCorNaTarefa (string) {
  let DivCor = document.createElement("div");
  let Div = document.querySelector(".my-tasks");
  DivCor.className = "task"
  DivCor.style.backgroundColor = string;
  Div.appendChild(DivCor)
}

legendaCorNaTarefa("Red")
