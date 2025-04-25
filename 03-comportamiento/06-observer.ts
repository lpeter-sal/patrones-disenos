/**
 * ! Patrón Observer
 * El patrón Observer es un patrón de diseño de comportamiento que establece
 * una relación de uno a muchos entre un objeto, llamado sujeto,
 * y otros objetos, llamados observadores, que son notificados
 * y actualizados automáticamente por el sujeto
 * cuando se producen cambios en su estado.
 *
 * * Es útil cuando necesitamos que varios objetos estén
 * * pendientes de los cambios
 *
 * !No confundirlo con RXJS Observables
 *
 * https://refactoring.guru/es/design-patterns/observer
 */


interface Observe {
    notify(videoTitle:string):void
}

class YouTubeChannel {
    private subscribers: Observe[] = [];
    private name: string;

    constructor(name: string) {
        this.name = name;
    }

    subscribe(subscriber: Observe): void {
        this.subscribers.push(subscriber);
        console.log(`Nuevo se ha suscrito al canal ${this.name}`);
    }

    unsubscribe(subscriber: Observe): void {
        this.subscribers = this.subscribers.filter(
            obs => obs !== subscriber
        );
        console.log(`${ subscriber } se ha desuscrito del canal ${this.name}`);
    }

    uplaloadVideo(videoTitle: string): void {
        console.log(`El canal ${this.name} ha subido un nuevo video: ${videoTitle}`);
        for (const subscriber of this.subscribers) {
            subscriber.notify(videoTitle);
        }
    }
}

class Subscriber implements Observe {
    private name: string;

    constructor(name: string) {
        this.name = name;
    }

    notify(videoTitle: string): void {
        console.log(`${this.name} ha sido notificado del nuevo video: ${videoTitle}`);
    }
}

function main() {
    const channel = new YouTubeChannel('Canal de Ejemplo');

    const subscriber1 = new Subscriber('Juan');
    const subscriber2 = new Subscriber('Maria');
    const subscriber3 = new Subscriber('Pedro');
    const subscriber4 = new Subscriber('Luis');

    channel.subscribe(subscriber1);
    channel.subscribe(subscriber2);

    channel.uplaloadVideo('Nuevo video de ejemplo');





}

main();