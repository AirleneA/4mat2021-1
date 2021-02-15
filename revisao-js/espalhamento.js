console.log(Math.min(20, 3, 47, 33, 41))// retorna o menor número da lista
console.log(Math.max(20, 3, 47, 33, 41))// retorna o maior número da lista  

let numeros = [20, 3, 47, 33, 41]

// ... fazendo o espalhamento do vetor para conseguir os parâmetros soltos
console.log(Math.min(...numeros))// retorna o menor número da lista
console.log(Math.max(...numeros))// retorna o maior número da lista

// Primeira tentativa de fazer um vetor que inclua os elementos de outro vetor
//let maiNumeros = [19, 7, 38, numeros, 0, - 5]
//console.log(maisNumeros)

//Usar o espalhamento
let maisNumeros = [19, 7, 38, ... numeros, 0 - 15]
console.log(maisNumeros)

// Usando espalhamento em parâmetros de função (prâmetro de resto)
function somaTudo(...nums){ // ... significa qua nao ha quantidade fixa de parâmetros
    let soma = 0
    // O parâmetro de resto, dentro de uma função, é interpretado como um vetor
    for(let n of nums) soma += n
    return soma 
}

console.log(somaTudo(14, 56, 78, 0, -4, 41))// Quantidade de números é aleatória
console.log(somaTudo(25 - 7, 14))

// Usando parâmetro de resto após um argumento obrigatório
function calcular(oper, ...nums){
    let res
    switch (oper) {
        case '+':
            res = 0
            for(let n of nums) res += n
            break
        case '*':
            res = 1 // Elemento neutro da multiplicação
            for(let n of nums) res *= n
            break
    }
    return res
}

console.log(calcular('+', 15, 19, 12, 32, -7, 6))// primeira posição parametro para a operação
console.log(calcular('*', 15, 19, 12, 32, -7, 6))

// Como chamr a função somaTudo() passando  a ela os números do vetor maisNumeros?
console.log(somaTudo(...maisNumeros))

// Chamando clcular() de forma semelhante
console.log(calcular('+', ... maisNumeros))

