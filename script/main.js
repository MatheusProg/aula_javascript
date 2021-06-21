
function soma(n1, n2){
  return n1 + n2
}

var validar

function validaIdade(idade) {

  if(idade >= 18) {
    validar = true
  }else {
    validar = false
  }
  return validar
  
}

var idade = prompt("Qual a sua idade?")
validaIdade(idade)
console.log(validar)

//alert(soma(5, 10))

/*
var d = new Date();
alert(d.getDay())
alert(d.getHours())
alert(d.getMinutes())
*/

/*
var count
for(count = 0; count <= 5; count++){
  alert(count)
}
*/

/*
var count = 0
while (count <= 5) {
  console.log(count)
  alert(count)
  count++
}
*/


/*
var idade = prompt("Qual sua idade? ")

if(idade >= 18) {
  alert("Maior de idade")
}else {
  alert("Menor de idade")
}
*/

/*
var frutas = [{nome:"maça", cor:"vermelha"}, {nome:"uva", cor:"roxa"}]
console.log(frutas)
alert(frutas[1].nome)
*/

/*
var fruta = {nome:"maça", cor:"vermelha"}
console.log(fruta.nome)
alert(fruta.cor)
*/

//var lista = ["maça", "pêra", "laranja"]
//lista.push("uva")
//lista.pop()

//console.log(lista)
//console.log(lista.toString())
//console.log(lista.join(" - "))


//var nome = "Matheus Dias"
//var n1 = 23
//var n2 = 10
//var frase = "Matheus é Incrível"
// alert(nome + " tem " + idade + " anos")
//alert(idade + idade2)
//console.log(nome)
//console.log(n1 * n2)
//console.log(frase.replace("Incrível", "Super incrível"))
//alert(frase.replace("Incrível", "Super incrível"))