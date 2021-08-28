// ex01 - part 2

const factorial = numero => numero > 1 ? numero * factorial(numero - 1) : 1;
console.log(factorial(5));

//ex02 - part 2

const longestWord = frase => {
    let palavrasArray = frase.split(' ');
    let maiorCompri = 0;
    let result = '';

    for (const palavra of palavrasArray) {
        if (palavra.length > maiorCompri) {
            maiorCompri = palavra.length;
            result = palavra;
        }
    }

    return result;
}

console.log(longestWord("Antonio foi no banheiro e não sabemos o que aconteceu"));