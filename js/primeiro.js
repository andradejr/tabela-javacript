  var titulo = document.querySelector(".titulo");
                //console.log(titulo.textContent);
               // console.log(titulo.textContent);
                titulo.textContent = "Aparecida Nutricionista";


            var paciente = document.querySelectorAll(".paciente");

            for (var i = 0; i < paciente.length; i++) {

              var pacientes = paciente[i];

              var tdpeso = paciente[i].querySelector(".info-peso");
              var peso = tdpeso.textContent;

              var tdaltura = paciente[i].querySelector(".info-altura");
              var altura = tdaltura.textContent;
              var tdimc = paciente[i].querySelector(".info-imc");


  var pesoehvalido = validapeso(peso);
  var alturaehvalido = validaltura(altura);

  if(!pesoehvalido){
      console.log("Peso inválido");
      pesoehvalido = false;
      pacientes.classList.add("paciente-invalido");
      tdimc.textContent = "Peso inválido";

  }

  if(!alturaehvalido){
      console.log("Altura é inválida");
      alturaehvalida = false;
      tdimc.textContent = "Altura inválida";
      pacientes.classList.add("paciente-invalido");
  }
  if (pesoehvalido && alturaehvalido) {
    var imc = calculaimc(peso,altura);
          tdimc.textContent = imc;
  }

            }
      function calculaimc(peso,altura){
        var imc = 0;
    imc = peso / (altura * altura);
        return imc.toFixed(2);
      }

      function validapeso(peso){
        if(peso > 0 && peso < 1000 ){
          return true;
        }else {
          return false;
        }
      }
      function validaltura(altura){
       if (altura > 0 && altura < 3.00) {
         return true;
       }else {
         return false;
       }
      }
