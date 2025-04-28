/**
 * ! Patrón Strategy
 *
 * El patrón Strategy es un patrón de diseño de software que define una
 * familia de algoritmos, los encapsula y los hace intercambiables.
 *
 *
 * * Es útil cuando se tiene una clase que tiene un comportamiento que puede
 * * cambiar en tiempo de ejecución y se quiere delegar la responsabilidad de
 * * la implementación a otra clase.
 *
 * https://refactoring.guru/es/design-patterns/strategy
 */

/**
 * !Objetivo: Explicar el patrón Strategy usando un ejemplo donde varios
 * ! patitos compiten en una carrera y cada uno tiene su propia
 * ! estrategia de movimiento (por ejemplo, nadar, volar o caminar).
 */


interface MovemntStrategy {
    move(): void;
}

// Strategy 1: Swin - Faster
class SwimStrategy implements MovemntStrategy {
    move(): void {
        console.log('Nadando');
    }
}

// Strategy 2: Fly - Fast
class FlyStrategy implements MovemntStrategy {
    move(): void {
        console.log('Volando');
    }
}

// Strategy 3: Walk - Slow
class WalkStrategy implements MovemntStrategy {
    move(): void {
        console.log('Caminando');
    }
}

// Context: Duck
class Duck {
    name: string;
    private movementStrategy: MovemntStrategy;

    constructor(movementStrategy: MovemntStrategy, name: string) {
        this.name = name;
        this.movementStrategy = movementStrategy;

        console.log(`El pato ${this.name} está listo para la carrera`);
    }

    performMove() {
        console.log(`El pato ${this.name} está:`);
        this.movementStrategy.move();
    }

    setMovementStrategy(movementStrategy: MovemntStrategy) {
        this.movementStrategy = movementStrategy;
        console.log(`El pato ${this.name} ha cambiado su estrategia de movimiento`);
    }
}


function main() {

    const duck1 = new Duck(new SwimStrategy(), 'Pato 1');
    const duck2 = new Duck(new FlyStrategy(), 'Pato 2');
    const duck3 = new Duck(new WalkStrategy(), 'Pato 3');

    duck1.performMove();
    duck2.performMove();
    duck3.performMove();

    console.log('Cambio de estrategia:');

    duck1.setMovementStrategy(new FlyStrategy());
    duck1.performMove();
    




}


main();