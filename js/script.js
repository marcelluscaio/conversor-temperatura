let botaoConverte = document.querySelector("#botaoConverte");
botaoConverte.onclick = converteTemperatura;

function converteTemperatura(e){
   e.preventDefault();
   let escalaUm = document.querySelector("#escalaUm");
   let valorEscalaUm = escalaUm.value;
   let escalaDois = document.querySelector("#escalaDois");
   let valorEscalaDois = escalaDois.value;
   let temperaturaInformada = document.querySelector("#temperaturaInformada");    
   let temperaturaInformadaValor = parseFloat(temperaturaInformada.value);
   let temperaturaTratada = parseFloat(temperaturaInformadaValor.toFixed(1));
   let resultado;
   let erro = false;
   switch(valorEscalaUm){
      case "celsius":
         switch(valorEscalaDois){
            case "celsius":
               resultado = "Assim é fácil. Tente escolher uma escala diferente, fera!";
               erro = true;
            break;
            case "fahrenheit":
               resultado = ((temperaturaTratada*9)/5)+32;
            break;
            case "kelvin":
               resultado = temperaturaTratada + 273;
            break;
         }
      break;
      case "fahrenheit":
         switch(valorEscalaDois){
            case "celsius":
               resultado = ((temperaturaTratada-32)*5)/9;
            break;
            case "fahrenheit":
               resultado = "Assim é fácil. Tente escolher uma escala diferente, fera!";
               erro = true;
            break;
            case "kelvin":
               resultado = (((temperaturaTratada-32)*5)/9)+273;
            break;
         }
      break;
      case "kelvin":
         switch(valorEscalaDois){
            case "celsius":
               resultado = temperaturaTratada - 273;
            break;
            case "fahrenheit":
               resultado = (((temperaturaTratada-273)*9)/5)+32
            break;
            case "kelvin":
               resultado = "Assim é fácil. Tente escolher uma escala diferente, fera!";
               erro = true;
            break;
         }
      break;   
   }
    console.log(temperaturaInformada.value);
   let respostaHTML = document.querySelector(".resposta");
   
   if(erro){
      respostaHTML.innerHTML = `${resultado}`;
   } else if(temperaturaInformada.value == ""){
      respostaHTML.innerHTML = `Ops, parece que você não preencheu o valor. Confere lá!`
   } else{
   respostaHTML.innerHTML = `Claro que converto! A temperatura de ${temperaturaTratada} ${valorEscalaUm} é equivalente a ${resultado.toFixed(2)} ${valorEscalaDois}`;
   }
}
   


