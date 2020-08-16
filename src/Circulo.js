import Poligono from "./Poligono"

export default class Circulo extends Poligono {
    constructor() {
        super()
        this.id = 1
        this.name = 'circulo'
    }
    area() {
        return Math.pow(this.radio, 2) * Math.PI
    }
    perimetro() {
        return Math.PI * 2 * this.radio
    }
}