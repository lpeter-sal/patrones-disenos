import { COLORS } from '../helpers/colors.ts';
/**
 * ! Patrón Bridge
 * Este patrón nos permite desacoplar una abstracción de su implementación,
 * de tal forma que ambas puedan variar independientemente.
 *
 * * Es útil cuando se tienen múltiples implementaciones de una abstracción
 * * Se puede utilizar para separar la lógica de negocio de la lógica de presentación
 * * Se puede utilizar para separar la lógica de la interfaz de usuario también.
 *
 * https://refactoring.guru/es/design-patterns/bridge
 */

interface Ability {
    use(): void;

}


class SwordAttack implements Ability {
    use(): void {
        console.log('%cAttack with Sword attack!', COLORS.blue);
    }
}

class AxeAttack implements Ability {
    use(): void {
        console.log('%cAttack with Axe attack!', COLORS.green);
    }
}

class MagicSpell implements Ability {
    use(): void {
        console.log('%cAttack with Magic Spell!', COLORS.purple);
    }
}

class FireballSpell implements Ability {
    use(): void {
        console.log('%cAttack with Fireball Spell!', COLORS.yellow);
    }
}



abstract class Character {
    constructor(protected ability: Ability) { }

    setAbility(ability: Ability) {
        this.ability = ability;
    }

    abstract perfomAbility(): void;

}

class Warrior extends Character {

    perfomAbility(): void {
        console.log('%cWarrior is ready to attack!', COLORS.red);
        this.ability.use();
    }
}

class Mage extends Character {

    perfomAbility(): void {
        console.log('%cMage prepare his magic', COLORS.red);
        this.ability.use();

    }
}


function main () {

    const warrior = new Warrior( new SwordAttack());
    warrior.perfomAbility();

    console.log('\n');
    
    warrior.setAbility(new AxeAttack());
    warrior.perfomAbility();
    
    console.log('\n');

    const mage = new Mage(new MagicSpell());
    mage.perfomAbility();

}

main();