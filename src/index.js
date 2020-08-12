import Circulo from './Circulo.js'
import Triangulo from './Triangulo'
import Cuadrado from './Cuadrado'
import Rectangulo from './Rectangulo'
import Octagono from './Octagono'
import Decagono from './Decagono'


document.getElementsByTagName('select')[0].addEventListener('change', e => {
    console.clear()
    let poligono = e.target.value


    let instancia = ""
    switch (poligono) {
        case "circulo":
            instancia = new Circulo
            consolaAreaPerimetro()
            break;
        case "triangulo":
            instancia = new Triangulo
            consolaAreaPerimetro()
            break;
        case "cuadrado":
            instancia = new Cuadrado
            consolaAreaPerimetro()
            break;
        case "rectangulo":
            instancia = new Rectangulo
            consolaAreaPerimetro()
            break;
        case "octagono":
            instancia = new Octagono
            consolaAreaPerimetro()
            break;
        case "decagono":
            instancia = new Decagono
            consolaAreaPerimetro()
            break;
        default:
            console.log("Selecciona un polígono")
    }


    function consolaAreaPerimetro() {
        console.log(`Perimetro del ${poligono} ===> ${instancia.perimetro()}`)
        console.log(`Area del ${poligono} ===> ${instancia.area()}`)
    }

})