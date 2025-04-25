import { sleep } from '../helpers/sleep.ts';
/**
 * ! Patrón State
 * Este patrón permite a un objeto cambiar su comportamiento
 * cuando su estado interno cambia.
 *
 * * Es útil cuando un objeto tiene un comportamiento que depende de su estado
 * * y debe cambiar su comportamiento en tiempo de ejecución dependiendo de ese estado.
 *
 * https://refactoring.guru/es/design-patterns/state
 */

/**
 * * Objetivo: Implementar el patrón State para simular el funcionamiento
 * * de una máquina expendedora.
 * * La máquina tiene diferentes estados,
 *  * Como Esperando Dinero,
 *  * Seleccionando Producto,
 *  * Entregando Producto,
 * * y su comportamiento varía dependiendo del estado actual.
 */


interface State {
    name: string;

    insertMoney(): void;
    selectProduct(): void;
    dispenseProduct(): void;
}

class VendingMachine {
    private state: State;

    constructor() {
        this.state = new WaitingForMoney(this);
    }

    getStateName() {
        return this.state.name;
    }

    setState(newState: State) {
        this.state = newState;
        console.log(`Estado cambiado a: ${newState.name}`);
    }

    insertMoney() {
        this.state.insertMoney();
    }

    selectProduct() {
        this.state.selectProduct();
    }

    dispenseProduct() {
        this.state.dispenseProduct();
    }
}

class WaitingForMoney implements State {
    public name: string = 'Esperando Dinero';
    private vendingMachine: VendingMachine;

    constructor(vendingMachine: VendingMachine) {
        this.vendingMachine = vendingMachine;
    }

    insertMoney() {
        console.log('Dinero insertado. Ahora puedes seleccionar un producto');
        this.vendingMachine.setState( new SelectingProduct(this.vendingMachine));
    }

    selectProduct() {
        console.log('Por favor, inserte dinero primero');
    }

    dispenseProduct() {
        console.log('Por favor, inserte dinero primero');
    }
}

class SelectingProduct implements State {
    public name: string = 'Seleccionando Producto';
    private vendingMachine: VendingMachine;

    constructor( vendingMachine: VendingMachine) {
        this.vendingMachine = vendingMachine;
    }

    insertMoney() {
        console.log('Por favor, selecciona un producto - dinero ya insertado');
    }

    selectProduct() {
        console.log('Producto seleccionado. Ahora puedes retirar tu producto');
        this.vendingMachine.setState(new DispensingProduct(this.vendingMachine));
    }

    dispenseProduct() {
        console.log('Por favor, selecciona un producto primero');
    }
}

class DispensingProduct implements State {
    public name: string = 'Despachando Producto';
    private vendingMachine: VendingMachine;

    constructor( vendingMachine: VendingMachine) {
        this.vendingMachine = vendingMachine;
    }

    insertMoney() {
        console.log('Por favor, espera a que se entregue el producto');
    }

    selectProduct() {
        console.log('Producto despachado. Por favor, retíralo');
    }

    dispenseProduct() {
        console.log('Producto entregado. Gracias por usar la máquina expendedora');
        this.vendingMachine.setState(new WaitingForMoney(this.vendingMachine));
    }
}


async function main() {
    const vendingMachine = new VendingMachine();
    let selectedOption: string | null = '4';

    do {
        console.log(`Estado actual: ${vendingMachine.getStateName()}`);
        console.log('1. Insertar dinero');
        console.log('2. Seleccionar producto');
        console.log('3. Despachar producto');
        console.log('4. Salir');

        selectedOption = prompt('Selecciona una opción: ');

        switch (selectedOption) {
            case '1':
                vendingMachine.insertMoney();
                break;
            case '2':
                vendingMachine.selectProduct();
                break;
            case '3':
                vendingMachine.dispenseProduct();
                break;
            case '4':
                console.log('Saliendo...');
                break;
            default:
                console.log('Opción no válida');
        }
        await sleep(3000);
    } while (selectedOption !== '4');
}

main();