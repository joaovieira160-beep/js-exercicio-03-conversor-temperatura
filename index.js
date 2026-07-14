const prompt = require('prompt-sync')();

let celcius = parseFloat(prompt("digite quantos graus deseja converter:"))

let f = celcius * 1.8 + 32

console.log(celcius + " graus celcius equivalem a " + f + " graus Fahrenheit")
