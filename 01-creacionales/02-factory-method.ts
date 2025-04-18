/**
 * ! Factory Method:
 * El patrón Factory Method permite crear objetos sin especificar
 * la clase exacta del objeto que se creará.
 *
 * En lugar de eso, delegamos la creación de objetos a subclases o métodos
 * que encapsulan esta lógica.
 *
 * * Es útil cuando una clase no puede anticipar la clase
 * * de objetos que debe crear.
 *
 * https://refactoring.guru/es/design-patterns/factory-method
 *
 */

import { COLORS } from "../helpers/colors.ts";


interface Hamburger {
    prepare(): void;

}

class ChickenHamburger implements Hamburger {
    prepare(): void {
        console.log('Preparando hamburguesa de %cpollo ', COLORS.yellow);
    }
}

class BeefHamburger implements Hamburger {
    prepare(): void {
        console.log('Preparando hamburguesa de %cres ', COLORS.brown);
    }
}

class BeanHamburger implements Hamburger {
    prepare(): void {
        console.log('Preparando hamburguesa de %cfrijoles ', COLORS.black);
    }
}


// * La idea de las clases abstractas es que no se pueden instanciar; yo no puedo hacer un: ❌❌❌ const restaurant = new Restaurant(); ❌❌❌
// * En su lugar, se utilizan como base para crear otras clases.

abstract class Restaurant  {
    protected abstract createHamburger(): Hamburger;

    orderHamburger(): void {
        const hamburger = this.createHamburger();
        hamburger.prepare();
    }
}

// * La diferencia entre extender e implementar es que al extender una clase, heredo su comportamiento y propiedades.
// * En cambio, al implementar una interfaz, estoy obligando a la clase a cumplir con un contrato, pero no heredo nada de ella.
class ChickenRestaurant extends Restaurant {
    createHamburger(): Hamburger {
        return new ChickenHamburger();
    }
}

class BeefRestaurant extends Restaurant {
    createHamburger(): Hamburger {
        return new BeefHamburger();
    }
}

class BeanRestaurant extends Restaurant {
    createHamburger(): Hamburger {
        return new BeanHamburger();
    }
}

function main () {

    let restaunt: Restaurant;
    const burgerType = prompt('¿Qué tipo de hamburguesa quieres? (chicken/beef/bean)')?.toLowerCase();

    switch (burgerType) {
        case 'chicken':
            restaunt = new ChickenRestaurant();
        break;

        case 'beef':
            restaunt = new BeefRestaurant();
        break;

        case 'bean':
            restaunt = new BeanRestaurant();
        break;

        default:

            console.log('No tenemos ese tipo de hamburgesa, lo sentimos... 😪');
        return;
    }

    restaunt.orderHamburger();

}

main();