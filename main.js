function Veiculo(modelo, fabricante, ano, potencia, preco) {
    this.modelo = modelo;
    this.fabricante = fabricante;
    this.ano = ano;
    this.potencia = potencia;
    this.preco = preco;
}

function Carro(modelo, fabricante, ano, potencia, preco) {
    Veiculo.call(this, modelo, fabricante, ano, potencia, preco);
}

function Moto(modelo, fabricante, ano, potencia, preco) {
    Veiculo.call(this, modelo, fabricante, ano, potencia, preco);
}


Carro.prototype.getPrecoIpva = function() {
    return this.preco * 0.04;
};

Moto.prototype.getPrecoIpva = function() {
    return this.preco * 0.02;
};

const carro1 = new Carro("Corolla", "Toyota", 2021, 177, 130000);
const carro2 = new Carro("Golf 350 GTI", "Volkswagen", 2019, 230, 200000);
const carro3 = new Carro("Civic Type R", "Honda", 2023, 297, 389000);


const moto1 = new Moto("CB 500X", "Honda", 2024, 50.2, 43260);
const moto2 = new Moto("GSX S1000", "Suzuki", 2023, 152, 69500);
const moto3 = new Moto("MT-09 Tracer", "Yamaha", 2024, 115, 70000);

console.log(carro1, "IPVA: R$", carro1.getPrecoIpva());
console.log(carro2, "IPVA: R$", carro2.getPrecoIpva());
console.log(carro3, "IPVA: R$", carro3.getPrecoIpva());

console.log(moto1, "IPVA: R$", moto1.getPrecoIpva());
console.log(moto2, "IPVA: R$", moto2.getPrecoIpva());
console.log(moto3, "IPVA: R$", moto3.getPrecoIpva());


