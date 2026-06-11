
let numeros = [2, 5, 7, 75, 0, 49, 82, -4, 13, 6, 10];
//let numeros = [2, 5, 7, 75, 0, 49, 82, -4, 13, 6, 10, 10];
let qtdeN = numeros.length;

//1. Par ou impar?
console.log("---------------");
console.log("Par ou impar?");
console.log("---------------");
numeros.forEach((numero) => {

    if (numero % 2 == 0) {
        console.log("Par: ", numero);
    } else {
        console.log("Impar: ", numero);
    }
});

/*
 * 2. média
 *    moda
 *    mediana
 *    desvio padrão
*/
console.log("---------------");
//Média
let soma = 0;
for (numero of numeros) {
    soma = soma + numero;
};

let media = soma / qtdeN;
console.log("A média é: ", media.toFixed(2))
console.log("---------------");

//Moda

let contador = {};
let frequencia = 0;
let moda;

for (let numero of numeros) {
    contador[numero] = (contador[numero] || 0) + 1;
    
    if (contador[numero] > frequencia) {
        frequencia = contador[numero];
        moda = numero;
    }
}

if (frequencia === 1) {
    console.log("moda")
    console.log("Não existe moda nesta lista!");
} else {
    console.log("A moda é: ", moda);
}
console.log("---------------");

//Mediana
//ordena a lista em ordem crescente
let nOrdenados = [...numeros].sort((a, b) => a - b);
let meio = Math.floor(nOrdenados.length / 2)
let mediana;
//separa se o indice é par ou impar
if (nOrdenados.length % 2 === 0) {
    //se for par, soma o valor de indice do meio com o valo de indice da frente
    mediana = (nOrdenados[meio - 1] + nOrdenados[meio]) / 2;
} else {
    //se for impar mostra o valor do indice do meio
    mediana = nOrdenados[meio];
}
console.log("A mediana é: ", mediana);
console.log("---------------");

//Desvio Padrão
let somaQuadrados = 0;

for (let numero of numeros) {
    let diferenca = numero - media;
    somaQuadrados = somaQuadrados + diferenca ** 2; 
}

let variancia = somaQuadrados / qtdeN;
let desvioPadrao = variancia ** 0.5; 

console.log("Desvio Padrão:", desvioPadrao.toFixed(2));
console.log("---------------");