import { COLORS } from '../helpers/colors.ts';
/**
 * !Patrón Memento
 * Permite capturar y externalizar un estado interno de un objeto,
 * de manera que el objeto pueda ser restaurado a ese estado más tarde.
 *
 * * Es útil cuando se necesita guardar el estado de un objeto para poder
 * * volver a él en un futuro.
 *
 * https://refactoring.guru/es/design-patterns/memento
 */

class GameMemento {
    private level: number;
    private health: number;
    private position: string;


    constructor(level: number, health: number, position: string) {
        this.level = level;
        this.health = health;
        this.position = position;
    }

    public getLevel(): number {
        return this.level;
    }
    public getHealth(): number {
        return this.health;
    }
    public getPosition(): string {
        return this.position;
    }
}


class Game {
    private level: number = 1;
    private health: number = 100;
    private position: string = 'Inicio';


    constructor() {
        console.log(`
            * Iniciando Juego
            * Nivel: ${this.level}
            * Salud: ${this.health}
            * Posición: ${this.position}
            * -------------------
        `);
    }

    save(): GameMemento {
        return new GameMemento(this.level, this.health, this.position);
    }

    play(leve: number, health: number, position: string): void {
        this.level = leve;
        this.health = health;
        this.position = position;

        console.log(`
            * En Juego
            * Nivel: ${this.level}
            * Salud: ${this.health}
            * Posición: ${this.position}
            * -------------------
        `);
    }

    restore(memento: GameMemento): void {
        this.level = memento.getLevel();
        this.health = memento.getHealth();
        this.position = memento.getPosition();

        console.log(`
            * Progreso restaurando
            * Nivel: ${this.level}
            * Salud: ${this.health}
            * Posición: ${this.position}
            * -------------------\n
        `);
    }
}


class GameHistory {
    private history: GameMemento[] = [];

    push( memento: GameMemento){
        this.history.push(memento);
    }

    pop(): GameMemento | null {
        return this.history.pop() ?? null;
    }

}


function main(){

    const game = new Game();
    const history = new GameHistory();

    history.push(game.save());

    // Jugador avanza en el juego
    game.play(2, 80, 'Bosque');
    history.push(game.save());

    // Jugador avanza en el juego
    game.play(3, 60, 'Bosque');
    history.push(game.save());

    // Jugador avanza en el juego
    game.play(4, 40, 'Castillo del Dragon');
    console.log(`%cEstado actual: `, COLORS.green);
    
    game.restore(history.pop()!);
    console.log(`%c\nDespues de restaurar el ultimo estado guardado`, COLORS.red);
    
    game.restore(history.pop()!);
    console.log(`%c\nDespues de restaurar el ultimo estado guardado`, COLORS.red);
    console.log('\n\n')
}

main();