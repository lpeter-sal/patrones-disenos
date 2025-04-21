import { COLORS } from '../helpers/colors.ts';
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

class Projector {
    
    turnOn() {
        console.log('Proyector encendido');

    }

    turnOff() {
        console.log('Proyector apagado');
    }

}

class SoundsSystem {

    on() {
        console.log('Sistema de sonido encendido');
    }

    off() {
        console.log('Sistema de sonido apagado');
    }
}

class VideoPlayer {
    on() {
        console.log('Reproductor de video encendido');
    }

    play(movie: string) {
        console.log(`Reproduciendo la película %c${movie}`, COLORS.green );
    }

    pause() {
        console.log('Pausando la película');
    }

    stop() {
        console.log('Deteniendo la película');
    }
    
    off() {
        console.log('Reproductor de video apagado');
    }
}

class PopcornMaker {
    poppingPopcorn() {
        console.log('Poniendo las palomitas de maíz a calentar...');
    }

    turnOffPoppingPopcorn() {
        console.log('Apagando la máquina de palomitas de maíz...');
    }

}

interface HomeTheaterFacadeOptions {
    Projector: Projector;
    SoundsSystem: SoundsSystem;
    VideoPlayer: VideoPlayer;
    PopcornMaker: PopcornMaker;
}

class HomeTheaterFacade {
    private projector: Projector;
    private soundsSystem: SoundsSystem;
    private videoPlayer: VideoPlayer;
    private popcornMaker: PopcornMaker;

    constructor({
        Projector,
        SoundsSystem,
        VideoPlayer,
        PopcornMaker,
    }: HomeTheaterFacadeOptions) {
        this.projector = Projector;
        this.soundsSystem = SoundsSystem;
        this.videoPlayer = VideoPlayer;
        this.popcornMaker = PopcornMaker;
    }

    watchMovie( movie: string): void {
        console.log('%cPreparando para ver la pelicula ', COLORS.blue);
        this.projector.turnOn();
        this.soundsSystem.on();
        this.popcornMaker.poppingPopcorn();
        this.videoPlayer.on();
        this.videoPlayer.play(movie);
        
        console.log('%cDisfrutando de la película', COLORS.blue);
    }

    endWatchingMovie(): void {
        console.log('%cPreparando para detener la pelicula ', COLORS.blue);
        this.projector.turnOff();
        this.soundsSystem.off();
        this.popcornMaker.turnOffPoppingPopcorn();
        this.videoPlayer.stop();
        this.videoPlayer.off();
        
        console.log('%cSistema apagado', COLORS.blue);
    }
}



function main() {

    const homeTheater = new HomeTheaterFacade({
        Projector: new Projector(),
        SoundsSystem: new SoundsSystem(),
        VideoPlayer: new VideoPlayer(),
        PopcornMaker: new PopcornMaker(),
    });

    homeTheater.watchMovie('Maradona: La mano de Dios');
    console.log('--------------------------------\n');

    homeTheater.endWatchingMovie();
    



}

main();
