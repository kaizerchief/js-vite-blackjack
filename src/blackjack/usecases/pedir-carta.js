/**
 * 
 * @param {Array<String>} deck tiene que ser un arreglo de String
 * @returns {String} retorna la carta del deck
 */


// Esta función me permite tomar una carta
export const pedirCarta = ( deck ) => {

    if (!deck || deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    return carta;
}