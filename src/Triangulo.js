import Poligono from './Poligono'

export default class Triangulo extends Poligono {
  constructor() {
    super()
  }
  area() {
    return (this.base * this.altura) / 2
  }
  perimetro() {
    return this.lado * 3
  }
}