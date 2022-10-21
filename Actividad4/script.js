var Licuadora = /** @class */ (function () {
    function Licuadora(marcaInstancia, modeloInstancia, potenciaInstancia, capacidadInstancia, estaPrendido, cantidadInstancia) {
        this.marca = marcaInstancia;
        this.modelo = modeloInstancia;
        this.potencia = potenciaInstancia;
        this.capacidad = capacidadInstancia;
        this.estaPrendido = estaPrendido;
        this.cantidad = cantidadInstancia;
    }
    //getter
    Licuadora.prototype.mostrarMarca = function () {
        return this.marca;
    };
    //setter
    Licuadora.prototype.establecerCantidad = function (cantidadUsuario) {
        this.cantidad = cantidadUsuario;
    };
    // getter
    Licuadora.prototype.mostrarModelo = function () {
        return this.modelo;
    };
    //getter
    Licuadora.prototype.mostrarPotencia = function () {
        return this.potencia;
    };
    //getter
    Licuadora.prototype.mostrarCapacidad = function () {
        return this.capacidad;
    };
    //setter
    Licuadora.prototype.prenderApagar = function () {
        if (this.estaPrendido === true) {
            this.estaPrendido = false;
        }
        else {
            this.estaPrendido = true;
        }
    };
    return Licuadora;
}());
var licuadora11 = new Licuadora("phillips", "HR2126/90", "500w", "1.5 litros", false, 5);
//console.log(licuadora1.mostrarNroSerie())
// licuadora1.establecerNroSerie("a98-99900ilk");
// console.log(licuadora1.mostrarNroSerie());
