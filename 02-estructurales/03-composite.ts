/**
 * ! Patrón Composite
 * Es un patrón de diseño estructural que permite componer objetos
 * en estructuras de árbol para representar jerarquías.
 *
 * El patrón permite a los clientes tratar de manera uniforme a los objetos
 * individuales y a sus composiciones.
 *
 * * Es útil cuando necesitas tratar a los objetos individuales
 * * y a sus composiciones de manera uniforme, y la estructura
 * * de los objetos forma una jerarquía en árbol.
 *
 * https://refactoring.guru/es/design-patterns/composite
 *
 */

interface FileSystemComponent {
    showDetails(indent?: string): void;
}


class FileExemplo implements FileSystemComponent {
    constructor(private name: string) {}

    showDetails(indent: string = ''): void {
        console.log(`${indent} - File: ${this.name}`);
    }
}

class Folder implements FileSystemComponent {
    constructor(private name: string, private contents: FileSystemComponent[] = [] ){ }

    add( component: FileSystemComponent ): void {
        this.contents.push(component);
    }

    showDetails(indent: string = ''): void {
        console.log(`${indent} + Folder: ${this.name}`);
        if (this.contents) {
            this.contents.forEach( component => component.showDetails(`${indent}  `));
        }
    }
}

function main() {

    const file1 = new FileExemplo('file1.txt');
    const file2 = new FileExemplo('file2.txt');
    const file3 = new FileExemplo('file3.txt');
    const file4 = new FileExemplo('file4.txt');
    const file5 = new FileExemplo('file5.txt');


    const folder1 = new Folder('folder1', [file1, file2]);
    const folder2 = new Folder('folder2', [file3]);
    const folder3 = new Folder('folder3', [file4, file5]);
    const folder4 = new Folder('folder4', [file1, file2]);
    const folder5 = new Folder('folder5', [file3]);

    
    folder2.add(folder3);
    folder2.add(folder4);

    folder3.add(folder5);


    const rootFolder = new Folder('root', [folder1, folder2, folder3]);
    rootFolder.showDetails();

}


main();