let nota = 6.7

let situação

/*if(nota >= 6) {
    situação = 'APROVADO'
}
else{
    situação = 'REPROVADO'
}*/

/*if(nota >= 6) situação = 'APROVADO'
else{situação = 'REPROVADO'*/

nota = 8.6

//Usando operador ternário
//1o. termos : condição ( que iria no if)
//Separando o 1o. termos do 2o termos ?
// 2o. termo: resultado caso a condição serja verdadeira
//Separando o 2o. termo do 3o. termo:
//3o. termo: resultado caso a condição seja falsa
situacao = nota >= 6 ? 'APROVADO' : 'REPROVADO'

console.log({nota, situacao})

let user = 'root'
let msg

msg = (user === 'root' || user === 'admin' ? 'Superusuário' : 'Usuário comum')

console.log(user, msg)