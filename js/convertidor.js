let InputEntrada = document.querySelector(".InputEntrada");
let InputSalida = document.querySelector(".InputSalida");

let btnConvertir = document.querySelector(".btnConvert");

let opcionEntrada = document.querySelector(".opcEntrada");

let opcionSalida = document.querySelector(".opcSalida");

let categoria = document.querySelector(".selet-categoria");



categoria.addEventListener("click", function () {


  if (categoria.value == "Longitud") {
    opcionEntrada.innerHTML = `
<option value="km">Kilometros</option>
<option value="m">Metros</option>
<option value="millas">Millas</option>
<option value="CM">Centimetros</option>
<option value="PS">Pies</option>
<option value="PG">Pulgada</option>

`;

    opcionSalida.innerHTML = `
<option value="km">KM</option>
<option value="m">Metros</option>
<option value="millas">Millas</option>
<option value="CM">Centimetros</option>
<option value="PS">Pies</option>
<option value="PG">Pulgada</option>
`;
  }



  if(categoria.value == "Peso"){


  opcionEntrada.innerHTML = `
<option value="kg">Kilogramos</option>
<option value="GR">Gramos</option>
<option value="IB">Libra</option>
<option value="OZ">Onza</option>
<option value="TN">Toneladas</option>
<option value="MG">Miligramos</option>

`;

opcionSalida.innerHTML = `
<option value="kg">Kilogramos</option>
<option value="GR">Gramos</option>
<option value="IB">Libra</option>
<option value="OZ">Onza</option>
<option value="TN">Toneladas</option>
<option value="MG">Miligramos</option>
`;

}





if(categoria.value == "Temperatura"){

  opcionEntrada.innerHTML = `
<option value="C">°C</option>
<option value="F">°F</option>
`;

opcionSalida.innerHTML = `
<option value="C">°C</option>
<option value="F">°F</option>
`;

}

if(categoria.value == "Tiempo"){

  opcionEntrada.innerHTML = `
<option value="HR">Hora</option>
<option value="MIN">Minuto</option>
<option value="SEG">Segundos</option>
`;

opcionSalida.innerHTML = `
<option value="HR">Hora</option>
<option value="MIN">Minuto</option>
<option value="SEG">Segundos</option>
`;

}





//PROXIMAMENTE
/*
if(categoria.value == "Dinero"){

  opcionEntrada.innerHTML = `
<option value="Dl">Dolar$</option>
<option value="ER">Euro$</option>
`;

opcionSalida.innerHTML = `
<option value="Dl">Dolar$</option>
<option value="ER">Euro$</option>
`;

}
*/

});





btnConvertir.addEventListener("click", function () {
  let Opcentrada = opcionEntrada.value;
  let Opcsalida = opcionSalida.value;

  let valoEntrada = Number(InputEntrada.value);
  let resultado = 0;



  //Longitud 

  // km a millas
  if (Opcentrada == "km" && Opcsalida == "millas") {
    resultado = valoEntrada * 0.621371;
    InputSalida.value = resultado.toFixed(2);
  }

  //milla a km
  if (Opcentrada == "millas" && Opcsalida == "km") {
    resultado = valoEntrada * 1.60934;
    InputSalida.value = resultado.toFixed(2);
  }


  //Km a metros

  if (Opcentrada == "km" && Opcsalida == "m") {
    resultado = valoEntrada * 1000;
    InputSalida.value = resultado.toFixed(2);
  }

  //m a km

   if (Opcentrada == "m" && Opcsalida == "km") {
    resultado = valoEntrada / 1000;
    InputSalida.value = resultado.toFixed(2);
  }


//milla a  m 


   if (Opcentrada == "millas" && Opcsalida == "m") {
    resultado = valoEntrada * 1609.34;
    InputSalida.value = resultado.toFixed(2);
  }

  // m a millas 

   if (Opcentrada == "m" && Opcsalida == "millas") {
    resultado = valoEntrada / 1609.34;
    InputSalida.value = resultado.toFixed(2);
  }







//Temperatura 

  //c a f
   if (Opcentrada == "C" && Opcsalida == "F") {
    resultado = (valoEntrada * 9) / 5 + 32;
    InputSalida.value = resultado.toFixed(2);
  }


  //f a C

  if (Opcentrada == "F" && Opcsalida == "C") {
    resultado = (valoEntrada - 32) * 5/9 ;
    InputSalida.value = resultado.toFixed(2);
  }




  //Tiempo 

    //h a min
   if (Opcentrada == "HR" && Opcsalida == "MIN") {
    resultado = (valoEntrada * 60);
    InputSalida.value = resultado.toFixed(2);
  }


  //MIN a H

  if (Opcentrada == "MIN" && Opcsalida == "HR") {
    resultado = (valoEntrada /60);
    InputSalida.value = resultado.toFixed(2);
  }


    //MIN a SEG
   if (Opcentrada == "MIN" && Opcsalida == "SEG") {
    resultado = (valoEntrada * 60);
    InputSalida.value = resultado.toFixed(2);
  }


  //SEG a MIN

  if (Opcentrada == "SEG" && Opcsalida == "MIN") {
    resultado = (valoEntrada /60);
    InputSalida.value = resultado.toFixed(2);
  }


    //HR a SEG
   if (Opcentrada == "HR" && Opcsalida == "SEG") {
    resultado = (valoEntrada * 3600);
    InputSalida.value = resultado.toFixed(2);
  }


  //SEG a HR

  if (Opcentrada == "SEG" && Opcsalida == "HR") {
    resultado = (valoEntrada /3600);
    InputSalida.value = resultado.toFixed(2);
  }




});
