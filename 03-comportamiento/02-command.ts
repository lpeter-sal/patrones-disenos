import { COLORS } from '../helpers/colors.ts';
/**
 * ! Patrón Command
 * Este patrón encapsula una solicitud como un objeto,
 * lo que le permite parametrizar otros objetos con diferentes solicitudes,
 * encolar solicitudes, o registrar solicitudes, y soporta operaciones que pueden deshacerse.
 *
 * Me gustó mucho la explicación de Refactoring Guru
 * https://refactoring.guru/es/design-patterns/command
 *
 * * Es útil cuando se necesita desacoplar el objeto que invoca
 * * la operación del objeto que sabe cómo realizarla.
 *
 *
 */
interface Command {
    execute(): void;

}

class Light {
    turnOn () {
        console.log('%cLa luz está encendida', COLORS.yellow);
    }

    turnOff () {
        console.log('%cLa luz está apagada', COLORS.red);
    }

}


class Fan {
    turnOn () {
        console.log('%cEl ventilador esta encendido', COLORS.green);
    }

    turnOff () {
        console.log('%cEl ventilador esta apagado', COLORS.red);
    }
}


class LightOnCommand implements Command {
    private light: Light;

    constructor (light: Light) {
        this.light = light;
    }

    execute () {
        this.light.turnOn();
    }
}

class LightOffCommand implements Command {
    private light: Light;

    constructor (light: Light) {
        this.light = light;
    }

    execute () {
        this.light.turnOff();
    }
}

class FanOnCommand implements Command {
    private fan: Fan;

    constructor (fan: Fan) {
        this.fan = fan;
    }

    execute () {
        this.fan.turnOn();
    }
}

class FanOffCommand implements Command {
    private fan: Fan;

    constructor (fan: Fan) {
        this.fan = fan;
    }

    execute () {
        this.fan.turnOff();
    }
}

class RemoteControl {
    private command: Record<string, Command> = {};

    setCommand ( button: string, command: Command ) {
        this.command[button] = command;
       
    }

    pressButton ( button: string): void {
        if (this.command[button]) {
            this.command[button].execute();
            return;
        } 
        
        console.log('%cNo hay comando asignado a este botón', COLORS.red);
    }
}


function main() {
    const remote = new RemoteControl();
    const light = new Light();
    const fan = new Fan();

    const lightOn = new LightOnCommand(light);
    const lightOff = new LightOffCommand(light);
    const fanOn = new FanOnCommand(fan);
    const fanOff = new FanOffCommand(fan);

    remote.setCommand('1', lightOn);
    remote.setCommand('2', lightOff);
    remote.setCommand('3', fanOn);
    remote.setCommand('4', fanOff);
    let continueProgram = true;

    do {
        console.clear();
        const pressedButton = prompt(
            `%cPresiona un botón del control: 
            1. Encender luz
            2. Apagar Luz
            3. Encender ventilador
            4. Apagar ventilador 

            Boton: ` 
        ) ?? ''

        remote.pressButton(pressedButton);

        const continueProgramResponse = prompt(
            `%c¿Quieres continuar? (y/n)`
        )?.toLowerCase();

        continueProgram = continueProgramResponse === 'y' || continueProgramResponse === 'yes' || continueProgramResponse === 'si' || continueProgramResponse === 's';


    } while( continueProgram )

}

main();

