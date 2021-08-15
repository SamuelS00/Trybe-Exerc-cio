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
