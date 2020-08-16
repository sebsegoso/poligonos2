import Poligono from './Poligono'

export default class Rectangulo extends Poligono {
  constructor() {
    super()
    this.id = 4
    this.name = 'rectangulo'
  }
  area() {
    return (this.base * this.altura)
  }
  perimetro() {
    return (this.base + this.altura) * 2
  }
}