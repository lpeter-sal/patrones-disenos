/**
 * ! Patrón Prototype:

 * Es un patrón de diseño creacional que nos permite copiar objetos existentes sin hacer
 * que el código dependa de sus clases.
 * 
 * * Es útil cuando queremos duplicar el contenido, 
 * * el título y el autor de un documento, por ejemplo o cualquier objeto complejo.
 * 
 * https://refactoring.guru/es/design-patterns/prototype
 */


class CustomDocument {
    public title: string;
    private content: string;
    public author: string;

    constructor(title: string, content: string, author: string) {
        this.title = title;
        this.content = content;
        this.author = author;
    }

    // * El objetivo del patron Prototype es crear clones/copias
    // * Que tiene su propio ADN, con todas sus propiedas y metodos.
    clone(): CustomDocument {
        return new CustomDocument(this.title, this.content, this.author);
    }

    displayInfo() {
        console.log(`
            Title: ${this.title}
            Content: ${this.content}
            Author: ${this.author}`);
    }
}

function main() {

    const document1 = new CustomDocument('Cotizacion', '500 dolares', 'Luis Salvador');

    console.log({ document1 })
    document1.displayInfo();


    const document2 = document1.clone();
    document2.title = 'Factura';

    console.log({ document2 })
    document2.displayInfo();
}


main();