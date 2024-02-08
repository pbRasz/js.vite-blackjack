// turno de la computadora

import{crearCartaHTML, pedirCarta, valorCarta} from './';

/**
 * 
 * @param {Number} puntosMinimos  puntos minimos que la computadora necesita
 * @param {HTML Element} puntosHtml elemento HTML para mostrar puntos
 * @param {HTML Element} divCartasComputadora elemento HTML para mostrar cartas
 *  @param {Array <String>} deck 
 */
export const turnoComputadora = ( puntosMinimos, puntosHTML,divCartasComputadora, deck =[] ) => {

    if (!puntosMinimos) throw new Error ('Puntos minimos son necesarios');

    let puntosComputadora = 0;

    do {
        const carta = pedirCarta(deck);

        puntosComputadora = puntosComputadora + valorCarta( carta );
        puntosHTML.innerText = puntosComputadora;
        
        // <img class="carta" src="assets/cartas/2C.png">
     const imgCarta = crearCartaHTML(carta);
        divCartasComputadora.append( imgCarta );

        if( puntosMinimos > 21 ) {
            break;
        }

    } while(  (puntosComputadora < puntosMinimos)  && (puntosMinimos <= 21 ) );

    setTimeout(() => {
        if( puntosComputadora === puntosMinimos ) {
            alert('Nadie gana :(');
        } else if ( puntosMinimos > 21 ) {
            alert('Computadora gana')
        } else if( puntosComputadora > 21 ) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana')
        }
    }, 100 );
}