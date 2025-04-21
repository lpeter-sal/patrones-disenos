import { COLORS } from '../helpers/colors.ts';
/**
 * ! Patrón decorador
 * Es un patrón de diseño estructural que permite añadir
 * funcionalidades a objetos, colocando estos objetos dentro de
 * objetos encapsuladores especiales que contienen estas funcionalidades.
 *
 * No confundirlo con los decoradores de TypeScript que son anotaciones.
 *
 * * Es útil cuando necesitas añadir funcionalidades a objetos
 *  * de manera dinámica y flexible.
 *
 * https://refactoring.guru/es/design-patterns/decorator
 */

interface Notifitation {
    send(message: string): void;

}

class BasicNotification implements Notifitation {
    send(message: string): void {
        console.log(`%cEnviando notificación basica: %c${message}`, COLORS.blue, COLORS.white);
    }
}

// Clase decoradora
abstract class NotificationDecorator implements Notifitation {
    protected notification: Notifitation;

    constructor(notification: Notifitation) {
        this.notification = notification;
    }

    send(message: string): void {
        this.notification.send(message);
    }
}

// Crear diferentes decoradores
class EmailDecorator extends NotificationDecorator {
    private sendEmail(message:string) {
        console.log(`%cEnviando notificacion por email: %c${message}`, COLORS.green, COLORS.white);
    }

    send(message: string): void {
        super.send(message);
        this.sendEmail(message);
    }
}

class SMSDecorator extends NotificationDecorator {
    private sendSMS(message:string) {
        console.log(`%cEnviando notificacion por SMS: %c${message}`, COLORS.red, COLORS.white);
    }

    send(message: string): void {
        super.send(message);
        this.sendSMS(message);
    }
}

class FacebookDecorator extends NotificationDecorator {
    private sendFacebook(message:string) {
        console.log(`%cEnviando notificacion por Facebook: %c${message}`, COLORS.yellow, COLORS.white);
    }

    send(message: string): void {
        super.send(message);
        this.sendFacebook(message);
    }
}


function main() {

    let notification: Notifitation = new BasicNotification();

    notification = new EmailDecorator(notification);
    notification = new SMSDecorator(notification);
    notification = new FacebookDecorator(notification);


    notification.send('Alerta de sistema!');
}

main();