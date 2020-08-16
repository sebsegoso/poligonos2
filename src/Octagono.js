import Poligono from './Poligono'

export default class Octagono extends Poligono {
  constructor(){
    super()
    this.id = 5
    this.name = 'octagono'
  }
  perimetro(){
    return this.lado *8
  }
  area(){
    return (this.perimetro() * this.apotema) / 2
  }
}