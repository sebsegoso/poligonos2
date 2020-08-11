import Poligono from './Poligono'

export default class Decagono extends Poligono {
  constructor(){
    super()
  }
  area () {
    return (10 * this.lado * this.apotema) / 2
  }
  perimetro() {
    return 10 * this.lado
  }
}