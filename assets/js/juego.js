/** 
 * 2C = Two of Clubs 
 * 2D = Two of Diamonds 
 * 2H = Two of Hearts  
 * 2S = Two of Spades 
 */

let deck = []; //mazo de cartas
const tiposCartas = ['C', 'D', 'H', 'S'];
const cartasEspeciales = ['A', 'J', 'Q', 'K'];


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

    console.log(deck);
    deck = _.shuffle(deck);
    console.log(deck);
    return deck;
}

crearDeck();