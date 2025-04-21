/**
 * ! Patrón Facade
 * Este patrón proporciona una interfaz unificada para un conjunto de interfaces
 * en un subsistema.
 *
 * Facade define una interfaz de nivel más alto que hace que el subsistema
 * sea más fácil de usar.
 *
 * * Es útil cuando un subsistema es complejo o difícil de entender para
 * * proporcionar una interfaz simplificada para el cliente.
 *
 * https://refactoring.guru/es/design-patterns/facade
 */

// !Tarea: Tarea: Sistema de Encendido de una Computadora con el Patrón Facade

import { COLORS } from '../helpers/colors.ts';

// 1. Clases del Subsistema 🆗✅✅✅

class CPU {
  stopOperations(): void {
    console.log('CPU: Deteniendo operaciones.');
  }

  jump(position: number): void {
    console.log(`CPU: Saltando a la posición de memoria ${position}.`);
  }

  execute(): void {
    console.log('CPU: Ejecutando instrucciones.');
  }
}

class HardDrive {
  read(position: number, size: number): string {
    console.log(
      `HardDrive: Leyendo ${size} bytes desde la posición ${position}.`
    );
    return '001010001010100';
  }

  close() {
    console.log('HardDrive: Deteniendo disco duro.');
  }
}

class Memory {
  load(position: number, data: string): void {
    console.log(`Memory: Cargando datos en la posición ${position} ${data}.`);
  }

  free(): void {
    console.log('Memory: Liberando memoria.');
  }
}

// 2. Clase Facade - ComputerFacade 🆗✅✅✅


class ComputerFacade {
  //Agregar los atributos necesarios CPU, Memory y HardDrive ✅✅✅
  private cpu: CPU; 
  private memory: Memory;
  private hardDrive: HardDrive;
  //Agregar el constructor para instanciar los atributos CPU, Memory y HardDrive ✅✅✅
  constructor() {
      this.cpu = new CPU();
      this.memory = new Memory();
      this.hardDrive = new HardDrive();
    }

  startComputer(): void {
    console.log('\n%cIniciando la computadora...', COLORS.cyan);

    // ejecutar las operaciones necesarias para encender la computadora🆗
    // 1. Cargar el sistema operativo en la memoria - memory.load(0, hardDrive.read(0, 1024)) ✅✅✅
    this.memory.load(0, this.hardDrive.read(0, 1024));
    // 2. Saltar a la posición de memoria 0 - cpu.jump(0) ✅✅✅
    this.cpu.jump(0);
    // 3. Ejecutar las instrucciones del CPU - cpu.execute() ✅✅✅
    this.cpu.execute();

    console.log('Computadora lista para usar.\n');
  }

  shutDownComputer(): void {
    console.log('\n%cApagando la computadora...', COLORS.red);
    console.log('Cerrando procesos y guardando datos...');

    // ejecutar las operaciones necesarias para apagar la computadora 🆗
    // 1. Detener las operaciones del CPU - cpu.stopOperations() ✅✅✅
    this.cpu.stopOperations();
    // 2. Liberar la memoria - memory.free() ✅✅✅
    this.memory.free();
    // 3. Cerrar el disco duro - hardDrive.close() ✅✅✅
    this.hardDrive.close();

    console.log('Computadora apagada.\n');
  }
}

// 3. Código Cliente para Usar la Facade 🆗
// Aquí no hay nada que hacer, debe de encender la computadora y apagarla sin problemas
function main() {
  const computer = new ComputerFacade();

  // Encender la computadora usando la fachada ✅✅✅
  computer.startComputer();

  // Apagar la computadora usando la fachada ✅✅✅
  computer.shutDownComputer(); 
}

main();
