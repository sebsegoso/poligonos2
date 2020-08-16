import Circulo from './Circulo.js'
import Triangulo from './Triangulo'
import Cuadrado from './Cuadrado'
import Rectangulo from './Rectangulo'
import Octagono from './Octagono'
import Decagono from './Decagono'


document.getElementsByTagName('select')[0].addEventListener('change', e => {
    console.clear()
    let select = e.target.value
    let circulo = new Circulo()
    let triangulo = new Triangulo()
    let cuadrado = new Cuadrado()
    let rectangulo = new Rectangulo()
    let octagono = new Octagono()
    let decagono = new Decagono()
    let poligonos = [circulo, triangulo, cuadrado, rectangulo, octagono, decagono]

    let figuraEscogida = poligonos.filter((x) => x.id == select)

    console.log(`La figura escogida es = ${figuraEscogida[0].name}`)
    if(figuraEscogida) {
        console.log(`Perimetro del ${figuraEscogida[0].name} ===> ${figuraEscogida[0].perimetro()}`)
        console.log(`Area del ${figuraEscogida[0].name} ===> ${figuraEscogida[0].area()}`)
    }
})