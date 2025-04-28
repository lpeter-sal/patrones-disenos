/**
 * ! Patrón Template Method
 *
 * El patrón Template Method es un patrón de diseño de comportamiento
 * que define el esqueleto de un algoritmo en una operación,
 * delegando algunos pasos a las subclases.
 *
 * Permite que las subclases redefinan ciertos pasos de un algoritmo
 * sin cambiar su estructura.
 *
 * * Es útil cuando se tiene un algoritmo que sigue una secuencia de pasos
 * * y se quiere permitir a las subclases que redefinan algunos de esos pasos.
 *
 * https://refactoring.guru/es/design-patterns/template-method
 */

/**
 * Contexto: Vamos a implementar un sistema que permite preparar
 * diferentes bebidas calientes, como café y té.
 *
 * Aunque el proceso general para preparar ambas bebidas es similar
 * (hervir agua, añadir el ingrediente principal, servir en una taza),
 * hay pasos específicos que varían dependiendo de la bebida.
 *
 * El patrón Template Method es perfecto para este caso,
 * ya que define un esqueleto general del algoritmo en una clase base
 * y delega los detalles específicos a las subclases.
 */

abstract class HotBeverage {
  // Método plantilla
  prepare(): void {
    this.boilWater();
    this.brew();
    this.pourInCup();
    this.addCondiments();
  }

  // Métodos concretos
  private boilWater(): void {
    console.log('Hirviendo agua...');
  }

  private pourInCup(): void {
    console.log('Vertiendo en la taza...');
  }

  // Métodos abstractos
  protected abstract brew(): void;
  protected abstract addCondiments(): void;
}

class Tea extends HotBeverage {
  protected brew(): void {
    console.log('Infusionando el té...');
  }

  protected addCondiments(): void {
    console.log('Añadiendo limón & miel...');
  }
}

class Coffee extends HotBeverage {
    protected brew(): void {
        console.log('Preparando el café...');
    }
    
    protected addCondiments(): void {
        console.log('Añadiendo azúcar & leche...');
    }
}


// Ejemplo de uso
function main() {
    console.log('Preparando té: ');
    const tea = new Tea();
    tea.prepare();

    console.log('\nPreparando café: ');
    const coffee = new Coffee();
    coffee.prepare();

}


main();
