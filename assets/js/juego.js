/** 
 * 2C = Two of Clubs 
 * 2D = Two of Diamonds 
 * 2H = Two of Hearts  
 * 2S = Two of Spades 
 */

let deck = []; //mazo de cartas
const tiposCartas = ['C', 'D', 'H', 'S'];
const cartasEspeciales = ['A', 'J', 'Q', 'K'];


const crearDeck = () => { //Esta funcion crea una nueva baraja
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

const pedirCarta = () => {
    if (deck.length === 0) {
        throw 'No hay más cartas en la baraja';
    }


    const carta = deck.pop();

    console.log(deck);
    console.log(carta);
    return carta;
}


const valorCarta = (carta) => {

    const valor = carta.substring(0, carta.length - 1);
    return (isNaN(valor)) ?
        (valor === 'A') ? 11 : 10 :
        parseInt(valor);

}


const valor = valorCarta(pedirCarta());
console.log({ valor });