import { COLORS } from '../helpers/colors.ts';
/**
 * ! Inmutabilidad con copia
 * Aunque la inmutabilidad es una buena práctica, no siempre es posible.
 * En estos casos, se puede hacer una copia del objeto y modificar la copia.
 *
 *  * Es útil para mantener un historial de estados en aplicaciones interactivas.
 *
 */


class CodeEditorState {
    readonly content: string;
    readonly cursorPosition: number;
    readonly unsavedChanges: boolean;

    constructor(
        content: string,
        cursorPosition: number,
        unsavedChanges: boolean
    ) {
        this.content = content;
        this.cursorPosition = cursorPosition;
        this.unsavedChanges = unsavedChanges;
    }

    copyWith( {
        content,
        cursorPosition,
        unsavedChanges
    }: Partial<CodeEditorState> ): CodeEditorState {
        return new CodeEditorState(
            content ?? this.content,
            cursorPosition ?? this.cursorPosition,
            unsavedChanges ?? this.unsavedChanges
        );
    }

    displayState() {
        console.log('\n%cEstado del editor: ', COLORS.green);
        console.log(`
            Contenido: ${this.content}
            Posición del cursor: ${this.cursorPosition}
            Cambios no guardados: ${this.unsavedChanges}
        `);
    }
}

class CodeEditorHistory {

    private history: CodeEditorState[] = [];
    private currentStateIndex: number = -1;

    save( state: CodeEditorState) {

        if(this.currentStateIndex < this.history.length - 1) {
            this.history = this.history.slice(0, this.currentStateIndex + 1);
        }


        this.history.push(state);
        this.currentStateIndex++;
    }

    undo(): CodeEditorState | null {
        if (this.currentStateIndex > 0) {
            this.currentStateIndex--;
            return this.history[this.currentStateIndex];
        }
        return null;
    }


    redo(): CodeEditorState | null {
        if (this.currentStateIndex < this.history.length - 1) {
            this.currentStateIndex++;
            return this.history[this.currentStateIndex];
        }

        return null;
    }


}

function main() {

    const history = new CodeEditorHistory();
    let editorState = new CodeEditorState("console.log('Hola Mundo')", 2, false);

    history.save(editorState);

    console.log('%cEstado inicial: ', COLORS.blue);
    editorState.displayState();


    editorState = editorState.copyWith({
        content: "console.log('Hola Mundo') \n console.log('Nueva Linea')",
        cursorPosition: 3,
        unsavedChanges: true
    });

    history.save(editorState);
    console.log('\n%cEstado modificado: ', COLORS.blue);
    editorState.displayState();


    editorState = editorState.copyWith({
        cursorPosition: 4
    });
    history.save(editorState);
    console.log('\n%cEstado modificado 2: ', COLORS.blue);
    editorState.displayState();


}

main();

