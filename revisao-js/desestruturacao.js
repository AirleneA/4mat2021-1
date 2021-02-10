let numeros = [10, 20, 30]// vetor

let carros = {
    marca: 'Volkswagen',
    modelo: 'Fusca',
    ano: 1969,
    cor: 'preto'
}// objeto

// Desestruturação do vetor
let [x, y, z] = numeros
console.log(x)
console.log(y)
Console.log(z) 

//Desestruturação parcial do vetor
// pegar apenas o segundo valor

let [, c ,] =  numeros
console.log(c)

//Pegando apenas os dois primeiros valores
let[a, b] = numeros
console.log(a)
console.log(b)

// Desestruturação de objetos: o nome das variaveis deve ser IGUAL
// ao nome das propriedades do objeto. A ordem das variáveis
// é indiferente 
let {ano, modelo, cor, marca} = carro
console.log(marca)
console.log(modelo)
console.log(ano)
console.log(cor)
//Destruturação parcial: basta passar apenas o nome das propriedades 
// desejadas

let {marca, ano} = carro
console.log(marca)
console.logo(ano)

let {marca: brand, ano: year = carro}
console.log(brand)
console.log(year)