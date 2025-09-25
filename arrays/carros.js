//inicialização de objeto
var meuCarro = {  marca: "honda", 
                  ano: 2016, 
                  modelo:"fit", 
                  cor:"branco", 
                  ligar: function() {
                      console.log("Carro ligado");
                  }  
               };
//exibindo as propriedades do objeto
for (item in meuCarro) {
        console.log(`${item}: ${meuCarro[item]}`);
}

meucarro.ligar();
//inicialização com construtor
function Carro(marca, ano, modelo, cor) {
    this.marca = marca;
    this.ano = ano;
    this.modelo = modelo;
    this.cor = cor;
    this.ligar = function() {
        console.log("Carro ligado");
    }
}
var meuOutroCarro = new Carro("fiat", 2018, "uno", "azul");

for (item in meuOutroCarro) {
    console.log(`${item}: ${meuOutroCarro[item]}`);
}
meuOutroCarro.ligar();
//inicialização com object()
var meuAntigoCarro = new Object();
meuAntigoCarro.marca = "toyota";
meuAntigoCarro.ano = 2010;
meuAntigoCarro.modelo = "hilux";
meuAntigoCarro.cor = "preta";
meuAntigoCarro.ligar = function() {
    console.log("Carro ligado");
}
for (item in meuAntigoCarro) {
    console.log(`${item}: ${meuAntigoCarro[item]}`);
}
meuAntigoCarro["ligar"]();