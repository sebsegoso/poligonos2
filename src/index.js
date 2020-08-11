import Circulo from './Circulo.js'
import Triangulo from './Triangulo'
import Cuadrado from './Cuadrado'
import Rectangulo from './Rectangulo'
import Octagono from './Octagono'
import Decagono from './Decagono'

String.prototype.mayus = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

document.getElementsByTagName('select')[0].addEventListener('change', e => {
    console.clear()
    let poligono = e.target.value

        let poligonos = ["circulo", "triangulo", "cuadrado", "rectangulo", "octagono", "decagono"]

        let figura = poligonos.filter(polig => polig == poligono).toString()
        console.log(figura)

        let Figura = figura.mayus()
        console.log(Figura)


    let calculos = new 
    console.log(`Perimetro del ${Figura} ===> ${figura.perimetro()}`)
    console.log(`Area del ${Figura} ===> ${figura.area()}`)

})





















        // if (poligono === 'circulo') {
        //     let circulo = new Circulo()
        //     console.log(`Perimetro del Circulo ===> ${circulo.perimetro()}`)
        //     console.log(`Area del Circulo ===> ${circulo.area()}`)
        //   }
        //   if (poligono === 'triangulo') {
        //     let triangulo = new Triangulo()
        //     console.log(`Perimetro del Triangulo ===> ${triangulo.perimetro()}`)
        //     console.log(`Area del Triangulo ===> ${triangulo.area()}`)
        //   }
        //   if (poligono === 'cuadrado') {
        //     let cuadrado = new Cuadrado()
        //     console.log(`Perimetro del Cuadrado ===> ${cuadrado.perimetro()}`)
        //     console.log(`Area del Cuadrado ===> ${cuadrado.area()}`)
        //   }
        //   if (poligono === 'rectangulo') {
        //     let rectangulo = new Rectangulo()
        //     console.log(`Perimetro del Rectangulo ===> ${rectangulo.perimetro()}`)
        //     console.log(`Area del Rectangulo ===> ${rectangulo.area()}`)
        //   }
        //   if (poligono === 'octagono') {
        //     let octagono = new Octagono()
        //     console.log(`Perimetro del Octagono ===> ${octagono.perimetro()}`)
        //     console.log(`Area del Octagono ===> ${octagono.area()}`)
        //   }
        //   if (poligono === 'decagono') {
        //     let decagono = new Decagono()
        //     console.log(`Perimetro del Decagono ===> ${decagono.perimetro()}`)
        //     console.log(`Area del Decagono ===> ${decagono.area()}`)
        //   } 