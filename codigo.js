var pantalla1 = document.getElementById("pantalla1");
var pantalla2 = document.getElementById("pantalla2");
var pantalla3 = document.getElementById("pantalla3");

var numero1 = document.getElementById("1");
var numero2 = document.getElementById("2");
var numero3 = document.getElementById("3");
var numero4 = document.getElementById("4");
var numero5 = document.getElementById("5");
var numero6 = document.getElementById("6");
var numero7 = document.getElementById("7");
var numero8 = document.getElementById("8");
var numero9 = document.getElementById("9");
var numero0 = document.getElementById("0");
var punto = document.getElementById(".");
var c = document.getElementById("c");

var dividir = document.getElementById("/");
var multiplicaNegativo = document.getElementById("+/-");
var multiplicacion = document.getElementById("x");
var recta = document.getElementById("-");
var igual = document.getElementById("igual");
var suma = document.getElementById("+");
var borrar = document.getElementById("imagen");


//eventos
    numero0.onclick = function(e){
        pantalla1.textContent = pantalla1.textContent + "0";
    }
    numero1.onclick = function(e){
        pantalla1.textContent = pantalla1.textContent + "1";
    }
    numero2.onclick = function(e){
        pantalla1.textContent = pantalla1.textContent + "2";
    }
    numero3.onclick = function(e){
        pantalla1.textContent = pantalla1.textContent + "3";
    }
    numero4.onclick = function(e){
        pantalla1.textContent = pantalla1.textContent + "4";
    }
    numero5.onclick = function(e){
        pantalla1.textContent = pantalla1.textContent + "5";
    }
    numero6.onclick = function(e){
        pantalla1.textContent = pantalla1.textContent + "6";
    }
    numero7.onclick = function(e){
        pantalla1.textContent = pantalla1.textContent + "7";
    }
    numero8.onclick = function(e){
        pantalla1.textContent = pantalla1.textContent + "8";
    }
    numero9.onclick = function(e){
        pantalla1.textContent = pantalla1.textContent + "9";
    }
    c.onclick = function(e){
        resetear();
    }
    punto.onclick = function(e){
        pantalla1.textContent = pantalla1.textContent + ".";
    }

    var numerouno;
    var numerodos;
    var operacion;
    var res = 0;

suma.onclick = function(e){
    numerouno = pantalla1.textContent;
    console.log(numerouno);
    pantalla2.innerHTML = "+";
    operacion= "+";
    limpiar();
}
recta.onclick = function(e){
    numerouno = pantalla1.textContent;
    pantalla2.innerHTML = "-";
    operacion = "-";
    limpiar();
}
multiplicaNegativo.onclick = function(e){
    numerouno = pantalla1.textContent;
    pantalla2.innerHTML = "*-1"
    operacion = "-1";
    
}

multiplicacion.onclick = function(e){
    numerouno = pantalla1.textContent;
    pantalla2.innerHTML= "*";
    operacion = "*";
    limpiar();
}
dividir.onclick = function(e){
    numerouno = pantalla1.textContent;
    pantalla2.innerHTML= "/";
    operacion = "/";
    limpiar();
}

borrar.onclick = function(e) {
    numerouno = pantalla1.split(pantalla1.length);  
    operacion = "borrar"
    pantalla1.innerHTML = numerouno;
}

function limpiar(){
    pantalla1.textContent = "";
}
igual.onclick = function(e){
    numerodos = pantalla1.textContent;
    resolver();
}

function resolver(){
    switch(operacion){
      case "+":
        res = parseFloat(numerouno) + parseFloat(numerodos);
        pantalla2.innerHTML = "+";
        pantalla3.innerHTML = res;
        break;
      case "-":
          res = parseFloat(numerouno) - parseFloat(numerodos);
          pantalla2.innerHTML = "-";
          pantalla3.innerHTML = res;
          break;
  
      case "*":
        res = parseFloat(numerouno) * parseFloat(numerodos);
        pantalla2.innerHTML = "x";
        pantalla3.innerHTML = res;
        break;
  
      case "/":
          if(numerouno == 0 | numerodos == 0){
                res = "Error division por 0";
          }else
        res = parseFloat(numerouno) / parseFloat(numerodos);
        pantalla2.innerHTML = "/";
        pantalla3.innerHTML = res;
        break;

      case "-1": 
      if(res == 0 ){
        res = parseFloat(numerouno) * parseFloat(-1);
      }else
        res = res * parseFloat(-1);
        break;
    }
    pantalla3.innerHTML = res;
    pantalla1.innerHTML = "";
    pantalla2.innerHTML = ""; 
}

function resetear(){
    pantalla1.innerHTML = "";
    pantalla2.innerHTML = ""; 
    pantalla3.innerHTML = "";    
    numerouno ;
    numerodos ;
    operacion = "";
    res = 0;
}
