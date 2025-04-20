import { Logger } from 'jsr:@deno-library/logger';
import { COLORS } from '../../helpers/colors.ts';

// TODO: Implementar el LoggerAdapter
interface ILoggerAdapter {
    file: string;

    writeLog: (message: string) => void;
    writeWarning: (message: string) => void;
    writeError: (message: string) => void;
}

export class DenoLoggerAdapter implements ILoggerAdapter {
    file: string;
    private logger = new Logger();

    constructor(file: string) {
        this.file = file;
    }
    writeLog( msg: string ): void {
        console.log(`[${ this.file } Log] ${msg}`);
    }

    writeError( msg: string ): void {
        console.log(`[${ this.file } Error] %c${msg}`, COLORS.red);
    }

    writeWarning( msg: string ): void {
        console.log(`[${ this.file } Warning] %c${msg}`, COLORS.yellow);
    }
}