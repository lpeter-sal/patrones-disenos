/**
 * !Patrón Visitor
 *
 * El patrón Visitor es un patrón de diseño de comportamiento
 * que te permite separar algoritmos de los objetos sobre
 * los que operan.
 *
 * * Es útil cuando necesitas añadir nuevas operaciones a
 * * clases estables sin cambiar su código.
 *
 * https://refactoring.guru/es/design-patterns/visitor
 */

/**
 * Contexto: Imagina que estás diseñando un sistema para un parque
 * temático con diferentes tipos de atracciones:
 * montañas rusas, casas del terror y ruedas de la fortuna.
 *
 * Cada atracción tiene su propio precio de entrada y ofrece un descuento
 * dependiendo del tipo de visitante (niño, adulto o adulto mayor).
 *
 * Aquí es donde entra el patrón Visitor, que permite aplicar operaciones
 * específicas (como calcular el precio con descuento) dependiendo tanto
 * de la atracción como del tipo de visitante,
 * sin modificar las clases originales.
 */

interface Visitor {
    visitRollerCoaster(rollerCoaster: RollerCoaster): void;
    visitHauntedHouse(hauntedHouse: HauntedHouse): void;
    visitFerrisWheel(ferrisWheel: FerrisWheel): void;
}

interface Attraction {
    accept(visitor: Visitor): void;
}

class RollerCoaster implements Attraction {
    private price: number = 50;

    public accept(visitor: Visitor): void {
        visitor.visitRollerCoaster(this);
    }

    public getPrice(): number {
        return this.price;
    }
}

class HauntedHouse implements Attraction {
    private price: number = 40;

    public accept(visitor: Visitor): void {
        visitor.visitHauntedHouse(this);
    }

    public getPrice(): number {
        return this.price;
    }
}

class FerrisWheel implements Attraction {
    private price: number = 30;

    public accept(visitor: Visitor): void {
        visitor.visitFerrisWheel(this);
    }

    public getPrice(): number {
        return this.price;
    }
}

// Visitors
class ChildVisitor implements Visitor {
    public visitRollerCoaster(rollerCoaster: RollerCoaster): void {
        console.log(`
            Niño en montaña rusa: Precio con descuento: $${
                rollerCoaster.getPrice() * 0.5
            }
        `);
    }

    public visitHauntedHouse(hauntedHouse: HauntedHouse): void {
        console.log(`
            Niño en casa del terror: Precio con descuento: $${
                hauntedHouse.getPrice() * 0.7
            }
        `);
    }

    public visitFerrisWheel(ferrisWheel: FerrisWheel): void {
        console.log(`
            Niño en rueda de la fortuna: Precio con descuento: $${
                ferrisWheel.getPrice() * 0.6
            }
        `);
    }
}

class AdultVisitor implements Visitor {
    public visitRollerCoaster(rollerCoaster: RollerCoaster): void {
        console.log(`
            Adulto en montaña rusa: $${
                rollerCoaster.getPrice()
            }
        `);
    }

    public visitHauntedHouse(hauntedHouse: HauntedHouse): void {
        console.log(`
            Adulto en casa del terror: $${
                hauntedHouse.getPrice()
            }
        `);
    }

    public visitFerrisWheel(ferrisWheel: FerrisWheel): void {
        console.log(`
            Adulto en rueda de la fortuna: $${
                ferrisWheel.getPrice()
            }
        `);
    }
}

class SeniorVisitor implements Visitor {
    public visitRollerCoaster(rollerCoaster: RollerCoaster): void {
        console.log(`
            Senior en montaña rusa: Precio con descuento: $${
                rollerCoaster.getPrice() * .85
            }
        `);
    }

    public visitHauntedHouse(hauntedHouse: HauntedHouse): void {
        console.log(`
            Senior en casa del terror: Precio con descuento: $${
                hauntedHouse.getPrice() * .85
            }
        `);
    }

    public visitFerrisWheel(ferrisWheel: FerrisWheel): void {
        console.log(`
            Senior en rueda de la fortuna: Precio con descuento: $${
                ferrisWheel.getPrice() * .85
            }
        `);
    }
}


// Ejemplo de uso
function main() {
    const attractions: Attraction[] = [
        new RollerCoaster(),
        new HauntedHouse(),
        new FerrisWheel(),
    ];

    const childVisitor = new ChildVisitor();
    const adultVisitor = new AdultVisitor();
    const seniorVisitor = new SeniorVisitor();

    console.log("Precios para niños:");
    attractions.forEach(attraction => attraction.accept(childVisitor));

    console.log("Precios para adultos:");
    attractions.forEach(attraction => attraction.accept(adultVisitor));

    console.log("Precios para adultos mayores:");
    attractions.forEach(attraction => attraction.accept(seniorVisitor));

}


main();