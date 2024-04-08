/* EJERCICIO 1
let name= "Javi";
const sentence = `Hello there ${name}, how are you?`;


console.log(sentence);
console.info(sentence);
console.warn( sentence + ` See you tomorrow`);
function saludo (name) {
    return `Mañana llueve ${name}`
}
document.getElementById("greeting").textContent=saludo('Lolo');
*/

let num= 5;
let result = num %2; //Si es par da 0. En este caso, con 5 devuelve 1, por lo q no es par
if (result === 0){
    console.log(`Number ${num} is odd`)
}else {
    console.log(`Number ${num} is not odd`)
};
