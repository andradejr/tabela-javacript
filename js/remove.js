var paciente = document.querySelectorAll(".paciente");
console.log(paciente);

var tabela = document.querySelector("#tabela-pacientes");
console.log(tabela);

tabela.addEventListener("dblclick",function(event){
  //var alvo = event.target;
  //var paiDoalvo = alvo.parentNode;
  //paiDoalvo.remove();
  event.target.parentNode.classList.add("fadeout");

  setTimeout(function(){
    event.target.parentNode.remove();
  },500)
});

//paciente.forEach(function(paciente){
  //  paciente.addEventListener("mouseover",function(){
    //  console.log("Fui clicado");
    //  this.remove();
  //  });
//});
