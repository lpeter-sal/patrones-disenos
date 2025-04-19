import { COLORS } from '../helpers/colors.ts';
/**
 * ! Singleton:
 * Es un patrón de diseño creacional que garantiza que una clase
 * tenga una única instancia y proporciona un punto de acceso global a ella.
 *
 * * Es útil cuando necesitas controlar el acceso a una única instancia
 * * de una clase, como por ejemplo, en un objeto de base de datos o en un
 * * objeto de configuración.
 *
 * https://refactoring.guru/es/design-patterns/singleton
 */

class DragonBalls {

    private static instance: DragonBalls;
    private ballsCollected: number;
    
    private constructor() {
        this.ballsCollected = 0;
    }

    public static getInstance(): DragonBalls {
        if (!DragonBalls.instance) {
            DragonBalls.instance = new DragonBalls();
            console.log('%cLas esferas del dragon han sido creadas!', COLORS.green)
        }
        return DragonBalls.instance;
    }

    collectBall(): void {
        if(this.ballsCollected < 7) {
            console.log(`%cHas recogido la esfera del dragon ${ this.ballsCollected + 1}`, COLORS.yellow);
            this.ballsCollected++;
            return;
        }
        console.log('%cYa tienes todas las esferas del dragon!', COLORS.red);

    }

    summonShenlog() {
        if( this.ballsCollected === 7) {
            console.log('%cHas invocado a Shenlong!', COLORS.blue);
            this.ballsCollected = 0;
            return;
        }
        console.log (`%cNo tienes las 7 esferas del dragon. Te faltan ${ 7 - this.ballsCollected }`, COLORS.red);
    }
}


function main() {

    const gokuDragonBalls = DragonBalls.getInstance();
    
    gokuDragonBalls.collectBall();
    gokuDragonBalls.collectBall();
    gokuDragonBalls.collectBall();
    gokuDragonBalls.collectBall();
    
    gokuDragonBalls.summonShenlog();
    
    
    const vegetaDragonBalls = DragonBalls.getInstance();
    vegetaDragonBalls.collectBall();
    vegetaDragonBalls.collectBall();
    vegetaDragonBalls.collectBall();
    
    
    gokuDragonBalls.summonShenlog();
    
    
    vegetaDragonBalls.summonShenlog();


}


main();