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

// Função sem parâmetros
function megasenna(){
    //Esta função retorna um número aleatório entre 1 e 60
    //Math.randow() -> retorna um numro aleatório entre 0(inclusive) e 1(inclusive)
    // * 60 -> Ajusta a faixa de valores para entre 0 e 59
    // + 1 -> Ajusta a faixa de valores para 1 a 60
    // Math.floor() -> retira a parte fracionária (casas decimais)
    return Math.floor(Mat.randow() * 60 + 1)

// 6 números de um jogo da megasena
console.log(megasena(), megasena(),megasena(), megasena(),megasena(), megasena())


//Em arrow functions sem parâmetros, é necessário deixar um par de parênteses
//para marcar o lugar dos parâmetros

const megasena2 = () => Math.floor(Mat.randow() * 60 + 1)
// 6 números de um jogo da megasena
console.log(megasena2(), megasena2(),megasena2(), megasena2(),megasena2(), megasena2())
}

//Função com mais de uma linha de código no corpo
function somaTudo(...nums){ // ... significa qua nao ha quantidade fixa de parâmetros
    let soma = 0
    // O parâmetro de resto, dentro de uma função, é interpretado como um vetor
    for(let n of nums) soma += n
    return soma 
}

console.log(somaTudo(1,2,3,4,5,6,7,8,9))

// Em arrow functions com mais de uma linha no corpo, as chaves retornam e
// também é necessário voltar a usar a palhavra return para retornar um valor

const somaTudo2 = (...nums) => {
let soma = 0
    // O parâmetro de resto, dentro de uma função, é interpretado como um vetor
    for(let n of nums) soma += n
    return soma 
}
console.log(somaTudo2(1,2,3,4,5,6,7,8,9))

//CONCLUSÃO: arrow functions são ideais para quando uma função tem apenas uma
//ou poucas linhas de códigos no corpo.