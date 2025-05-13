document.getElementById("btCalcular").addEventListener("click", function(event){
  event.preventDefault()
});

function converter() {
  let de = document.formulario.de.value;
  let para = document.formulario.para.value;
  let quantia = document.formulario.quantia.value;
  if (quantia == "") {
    alert("Voce precisa informar a quantia da moeda!");
    return false;
  }
  if (de == para || de == "") {
    alert("Atenção!Informe moedas diferentes!");
    return false;
  }
  if (de == "Real" && para == "Dolar") resultado = quantia / 5;
  else if (de == "Dolar" && para == "Real") resultado = quantia * 5;
  else if (de == "Real" && para == "Euro") resultado = quantia / 5.5;
  else if (de == "Euro" && para == "Real") resultado = quantia * 5.5;
  else if (de == "Dolar" && para == "Euro") resultado = quantia / 0.9;
  else if (de == "Euro" && para == "Dolar") resultado = quantia * 1.1;

  document.formulario.resultado.value = resultado;
  return true;
}
