
/**
 * 
 * @param {Array<String>} deck  es elñ arreglo de string
 * @returns  retorna el deck comppleto
 */
// Esta función me permite tomar una carta
export const pedirCarta = (deck) => {

    if ( deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    return carta;
}
