window.onload = function() {
    function escolhercorfundo(cores) {
      let conteudo = document.querySelector(".conteudo")
      conteudo.style.backgroundColor = cores;
      localStorage.setItem("corfundo",cores)
    }
    
    let botãocorfundo = document.querySelector("#corfundo>button")
    for (let index = 0; index < botãocorfundo.length; index += 1) {
       botãocorfundo[index].addEventlistener("click",function(evento) {
           escolhercorfundo(evento.target.innerHTML)
           console.log("a")
       })
    }

    function inicial() {
        let corfundo = localStorage.getItem("corfundo")
        if(corfundo) escolhercorfundo(corfundo)
    }

    inicial()
}