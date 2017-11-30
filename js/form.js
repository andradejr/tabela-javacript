var button = document.querySelector("#adicionar-paciente");
button.addEventListener("click",increment);

function increment(event){
  event.preventDefault();

var form = document.querySelector("#form");

var paciente = obtemPacienteDoFormulario(form);

var pacienteTr = montarTr(paciente);

var erros = validapaciente(paciente);
console.log(erros);
if(erros.length > 0){
    exibeMensagemDeErro(erros);
    return;
}

var tabela = document.querySelector("#tabela-pacientes");
tabela.appendChild(pacienteTr);

form.reset();
var mensagemDeErro = document.querySelector("#mensagem-erro");
      mensagemDeErro.innerHTML = "";
  }

  function exibeMensagemDeErro(erros){
    var ul = document.querySelector("#mensagem-erro");
    ul.innerHTML = "";
       erros.forEach(function(erro){
         var li = document.createElement("li");
         li.textContent = erro;
         ul.appendChild(li);
       });
  }


  function obtemPacienteDoFormulario(form){
   var form = {
     nome:form.nome.value,
     peso:form.peso.value,
     altura:form.altura.value,
     gordura:form.gordura.value,
     imc:calculaimc(form.peso.value,form.altura.value)
   }
   return form;
  }

  function montarTr(paciente){
    var formTd = document.createElement("tr");
    formTd.classList.add("paciente");

    formTd.appendChild(montaTd(paciente.nome,"info-nome"));
    formTd.appendChild(montaTd(paciente.peso,"info-peso"));
    formTd.appendChild(montaTd(paciente.altura,"info-altura"));
    formTd.appendChild(montaTd(paciente.gordura,"info-gordura"));
    formTd.appendChild(montaTd(paciente.imc,"info-imc"));


    return formTd;
  }
function montaTd(dado,classe){
  var td = document.createElement("td");
  td.textContent = dado;
  td.classList.add(classe);

  return td;
}

function validapaciente(paciente){
  var erros = [];
  if(paciente.nome.length == 0) erros.push("É necessário de um nome para cadastrar.");
  if(paciente.gordura.length == 0) erros.push("É necessário de uma porcentagem de gordura para cadastrar.");
  if(paciente.peso.length == 0) erros.push("É necessário de um peso para cadastrar.");
  if(paciente.altura.length == 0) erros.push("É necessário uma altura para cadastrar.");

  if(!validapeso(paciente.peso)) erros.push("Peso é inválido.");
  if(!validaltura(paciente.altura)) erros.push("Altura é inválida.");


  return erros;
}
