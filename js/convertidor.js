let InputEntrada = document.querySelector(".InputEntrada");
let InputSalida = document.querySelector(".InputSalida");

let btnConvertir= document.querySelector(".btnConvert")

let opcionEntrada = document.querySelector(".opcEntrada");

let opcionSalida = document.querySelector(".opcSalida");



btnConvertir.addEventListener("click", function(){

let Opcentrada = opcionEntrada.value;
let Opcsalida = opcionSalida.value;


let valoEntrada = Number(InputEntrada.value);
let resultado = 0;


if(Opcentrada == "km" && Opcsalida == "millas")
{

resultado = valoEntrada * 0.621371;
InputSalida.value = resultado.toFixed(2);

}


else if(Opcentrada == "C" && Opcsalida == "F")
{

resultado = (valoEntrada * 9/5) + 32;
InputSalida.value = resultado.toFixed(2);

}




})
