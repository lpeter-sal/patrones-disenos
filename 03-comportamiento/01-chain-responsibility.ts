import { COLORS } from '../helpers/colors.ts';
/**
 * ! Patron Chain of Responsibility
 * Es un patrón de diseño de comportamiento que te permite pasar solicitudes
 * a lo largo de una cadena de manejadores.
 *
 * * Es útil cuando se necesita procesar datos de diferentes maneras, pero no
 * * se sabe de antemano qué tipo de procesamiento se necesita o en qué orden
 * * pero se sabe que se necesita procesar en una secuencia.
 *
 * https://refactoring.guru/es/design-patterns/chain-of-responsibility
 */

interface Handler {
    setNext(handler: Handler): Handler;
    handle(request: string): void;
}

abstract class BaseHandler implements Handler {
    private nextHandler?: Handler;

    setNext(handler: Handler): Handler {
        this.nextHandler = handler;
        return handler;
    }

    handle(request: string): void {
        if (this.nextHandler) {
            this.nextHandler.handle(request);
        }
    }
}

// Soporte basico
class BasciSupporte extends BaseHandler {
    handle(request: string): void {
        if (request === 'basico') {
            console.log('%cSoporte basico: Resolviendo problema basico', COLORS.green);
            return;
        } 

        console.log('%cSoporte basico: No puedo resolver el problema, se traslada a Soporte Avanzado', COLORS.red);
        super.handle(request);
    }
}

// Soporte avanzado
class AdvancedSupporte extends BaseHandler {
    handle(request: string): void {
        if (request === 'avanzado') {
            console.log('%cSoporte Avanzado: Resolviendo problema basico', COLORS.green);
            return;
        } 

        console.log('%cSoporte Avanzado: No puedo resolver el problema, se traslada a Soporte Experto', COLORS.red);
        super.handle(request);
    }
}

// Soporte especialista
class ExpertSupport extends BaseHandler {
    handle(request: string): void {
        if (request === 'experto') {
            console.log('%cSoporte Experto: Resolviendo problema basico', COLORS.green);
            return;
        } 

        console.log('%cSoporte Experto: No hay nada que hacer, lo siento.', COLORS.red);
        super.handle(request);
    }
}


function main() {

    const basicSupport = new BasciSupporte();
    const advancedSupport = new AdvancedSupporte();
    const expertSupport = new ExpertSupport();

    
    basicSupport.setNext(advancedSupport).setNext(expertSupport);

    console.log('%cProblema', COLORS.blue);
    basicSupport.handle('basico');
    basicSupport.handle('avanzado');
    basicSupport.handle('experto');
    basicSupport.handle('desconocido');




}

main();