import Poligono from './Poligono'

export default class Triangulo extends Poligono {
  constructor() {
    super()
    this.id = 2
    this.name = 'triangulo'
  }
  area() {
    return (this.base * this.altura) / 2
  }
  perimetro() {
    return this.lado * 3
  }
}