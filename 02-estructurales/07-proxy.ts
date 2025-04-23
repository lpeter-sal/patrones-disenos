import { COLORS } from '../helpers/colors.ts';
/**
 * ! Patrón Proxy
 * Este patrón se utiliza para controlar el acceso a un objeto, es decir,
 * se crea un objeto que actúa como intermediario entre el cliente y el objeto real.
 *
 * * Es útil cuando necesitamos controlar el acceso a un objeto,
 * * por ejemplo, para verificar si el cliente tiene permiso
 * * para acceder a ciertos métodos o propiedades.
 *
 * https://refactoring.guru/es/design-patterns/proxy
 *
 */

class Player {
    name: string;
    level: number;

    constructor( name: string, level: number) {
        this.name = name;
        this.level = level;
    }

}

interface Room {
    enter( player: Player): void;

}

class SecretRoom implements Room {

    enter( player: Player): void {
        console.log(`%cEl jugador ${player.name} ha entrado a la sala secreta`, COLORS.blue);
        console.log('Un gran enemigo te espera...')
    }

}

// 3. Clase Proxy - Magic Portal
class MagicPortal implements Room {
    private secretRoom: SecretRoom;

    constructor( room: SecretRoom) {
        this.secretRoom = room;
    }

    enter(player: Player): void {
        
        if( player.level >= 10 ){
            this.secretRoom.enter(player);
            return;
        }
        console.log(`%cEl jugador ${player.name} no tiene el nivel suficiente para entrar a la sala secreta`, COLORS.red);
    }
}


function main() {

    const portal = new MagicPortal(new SecretRoom());
    const player1 = new Player('Goku', 5);
    const player2 = new Player('Vegeta', 10);

    console.log('Goku intenta entrar a la sala secreta... \n');
    portal.enter(player1);


    console.log('\nVegeta intenta entrar a la sala secreta... \n');
    portal.enter(player2);
}


main();