// No JS existe a função Math.pow() que faz isso (eleve um numero ao quadrado)
function quadrado(x){
    return x * x // Ou: return x ** 2
}

// caracteristica da função acima
//1) Tem apenas um parâmetro
//2) Tem apenas uma linha de código, com return

console.log(quadrado(7))

//Uma função com estas características pode ser escrita de forma abreviada
// da seguinte forma
//1) A palavra function foi substituida pelo sinal => depois do parâmetro
//2) Os paranteses em torno do parâmetro foram omitidos
//3) as chaves foram omitidos
//4) A palavra return foi omitida
let quadrado2 = x => x * x

console.log(quadrado2(7))

// Função com DOIS parâmetros
function potencia(b, e) {// b = base, e = expoente}
    return b ** e
}

console.log(potencia(2, 5))

//No formato arrow function, quando há mais de um parâmetro, os
//Parenteses em volta deles retornam
let potencia2 = (b, e) => b ** e

console.log(potencia2(2, 5))