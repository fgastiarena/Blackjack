/** 
 * 2C = Two of Clubs 
 * 2D = Two of Diamonds 
 * 2H = Two of Hearts  
 * 2S = Two of Spades 
 */

let deck = []; //mazo de cartas
const tiposCartas = ['C', 'D', 'H', 'S'];
const cartasEspeciales = ['A', 'J', 'Q', 'K'];

let puntosJugador = 0,
    puntosComputadora = 0;


//Referencias del HTML
const btnPedir = document.querySelector('#btnPedir');
const btnDetener = document.querySelector('#btnDetener');
const btnNuevo = document.querySelector('#btnNuevo');

const puntosHTML = document.querySelectorAll('small');
const divCartasJugador = document.querySelector('#jugador-cartas');
const divCartasComputadora = document.querySelector('#computadora-cartas');


//Esta funcion crea una nueva baraja
const crearDeck = () => {
    for (let i = 2; i <= 10; i++) {
        for (let tipo of tiposCartas) {
            deck.push(i + tipo);
        }
    }

    for (let tipo of tiposCartas) {
        for (let esp of cartasEspeciales) {
            deck.push(esp + tipo);
        }
    }

    deck = _.shuffle(deck); //Agregado desde Underscore
    console.log(deck);
    return deck;
}

crearDeck();

//Tomar una carta
const pedirCarta = () => {
    if (deck.length === 0) {
        throw 'No hay más cartas en la baraja';
    }
    const carta = deck.pop();
    return carta;
}


const valorCarta = (carta) => {

    const valor = carta.substring(0, carta.length - 1);
    return (isNaN(valor)) ?
        (valor === 'A') ? 11 : 10 :
        parseInt(valor);

}

//Turno de la computadora
const turnoComputadora = (puntosMinimos) => {

    do {

        const carta = pedirCarta();

        puntosComputadora = puntosComputadora + valorCarta(carta);
        puntosHTML[1].innerText = puntosComputadora;

        const imgCarta = document.createElement('img');
        imgCarta.src = `assets/cartas/${carta}.png`;
        imgCarta.classList.add('cartas');
        divCartasComputadora.append(imgCarta);

        if (puntosMinimos > 21) {
            break;
        }


    } while (puntosComputadora < puntosMinimos) && (puntosMinimos <= 21);

    setTimeout(() => {

        if (puntosComputadora === puntosMinimos) {
            alert('Nadie gana :(');
        } else if (puntosMinimos > 21) {
            alert('Gana la Compu');
        } else if (puntosComputadora > 21) {
            alert('Gana el Jugador');
        } else {
            alert('Gana la compu!');
        }
    }, 100);
}


//Eventos
btnPedir.addEventListener('click', () => {

    const carta = pedirCarta();

    puntosJugador = puntosJugador + valorCarta(carta);
    puntosHTML[0].innerText = puntosJugador;

    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${carta}.png`;
    imgCarta.classList.add('cartas');
    divCartasJugador.append(imgCarta);

    if (puntosJugador > 21) {
        console.warn('Perdiste !');
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        turnoComputadora(puntosJugador);
    } else if (puntosJugador === 21) {
        console.warn('Ganaste !!');
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        turnoComputadora(puntosJugador);
    }
});

btnDetener.addEventListener('click', () => {

    btnPedir.disabled = true;
    btnDetener.disabled = true;

    turnoComputadora(puntosJugador);

});

btnNuevo.addEventListener('click', () => {

    deck = [];
    deck = crearDeck();

    puntosJugador = 0;
    puntosComputadora = 0;

    puntosHTML[0].innerText = 0;
    puntosHTML[1].innerText = 0;

    divCartasComputadora.innerHTML = '';
    divCartasJugador.innerHTML = '';

    btnPedir.disabled = false;
    btnDetener.disabled = false;

});