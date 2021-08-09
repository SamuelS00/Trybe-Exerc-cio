// 4- Depois, faça uma pirâmide com n asteriscos de base:

let n = 5;

for (let indexLinha = 1; indexLinha  <= n; indexLinha += 1) { 
    let space = "";
   
    for (let indexColuna = 1; indexColuna <= (2 * n - 1); indexColuna += 1) {

        if (indexColuna >= n + 1 - indexLinha && indexColuna <= n - 1 + indexLinha )
        {
            space += "*";
        } else{
            space += " "; 
        }
                
    }
    console.log(space);
}
