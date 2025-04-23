import { COLORS } from '../helpers/colors.ts';
/**
 * ! Patrón Flyweight
 * Es un patrón de diseño estructural que nos permite usar objetos compartidos
 * para soportar eficientemente grandes cantidades de objetos.
 *
 * * Es útil cuando necesitamos una gran cantidad de objetos y queremos reducir
 * * la cantidad de memoria que utilizan.
 *
 * https://refactoring.guru/es/design-patterns/flyweight
 */

interface Location {
    display( coordinates: {x: number, y: number }): void;
}

//Flyweight
class LocationIcon implements Location {
    private iconImage: string;
    private type: string

    constructor(icon: string, type: string) {
        this.iconImage = icon;
        this.type = type;
    }

    display(coordinates: {x: number, y: number }): void {
        console.log(`Coords: ${this.iconImage}  at (${coordinates.x}, ${coordinates.y}) with icon: %c[${this.type}]`, COLORS.gray );
    }
}

// Flyweight Factory
/**
 * {
 *  escuela: 'escuela.png',
 *  hostial: 'hospital.png',
 * 
 * }
 */
class LocationFactory {
    private icons: Record< string, LocationIcon > = {};

    getLocationIcon( type: string): LocationIcon {
        if( !this.icons[type] ) {
            console.log(`%cCreando una instancia de ${type}`, COLORS.red);
            const iconImage = `imagen_de_${ type.toLowerCase() }.png`;
            this.icons[type] = new LocationIcon( type, iconImage );
        }

        return this.icons[type];
    }
}

class MapLocation {
    private coordinates: {x: number, y: number };
    private icon: LocationIcon;

    constructor( coordinates: {x: number, y: number }, icon: LocationIcon ) {
        this.coordinates = coordinates;
        this.icon = icon;
    }

    display(): void {
        this.icon.display( this.coordinates );
    }
}

function main() {

    const factory = new LocationFactory();
    const locations: MapLocation[] = [
        new MapLocation({x: 10, y: 20}, factory.getLocationIcon('hospital')),
        new MapLocation({x: 20, y: 40}, factory.getLocationIcon('hospital')),
        new MapLocation({x: 30, y: 60}, factory.getLocationIcon('hospital')),

        new MapLocation({x: 40, y: 80}, factory.getLocationIcon('Parque')),
        new MapLocation({x: 40, y: 80}, factory.getLocationIcon('Parque')),
        new MapLocation({x: 40, y: 80}, factory.getLocationIcon('Parque')),
        new MapLocation({x: 40, y: 80}, factory.getLocationIcon('Parque')),
        new MapLocation({x: 40, y: 80}, factory.getLocationIcon('Parque')),

        new MapLocation({x: 40, y: 80}, factory.getLocationIcon('hospital')),
        new MapLocation({x: 40, y: 80}, factory.getLocationIcon('escuela')),
        new MapLocation({x: 40, y: 80}, factory.getLocationIcon('escuela')),
        new MapLocation({x: 40, y: 80}, factory.getLocationIcon('escuela')),
        new MapLocation({x: 40, y: 80}, factory.getLocationIcon('escuela')),
        new MapLocation({x: 40, y: 80}, factory.getLocationIcon('escuela')),
    ];

    locations.forEach( location => location.display() );
    console.log('----------------------------------');


    


}

main();