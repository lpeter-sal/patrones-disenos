import { COLORS } from '../helpers/colors.ts';
/**
 * ! Patrón mediator
 * Es un patrón de diseño de comportamiento que ayuda a reducir
 * las dependencias desordenadas entre objetos.
 * Este patrón limita la comunicación directa entre ellos,
 * haciendo que solo interactúen a través de un objeto mediador.
 *
 * * Es útil reducir la complejidad de las relaciones entre objetos
 *
 * https://refactoring.guru/es/design-patterns/mediator
 */

// Chatroom
class Chatroom {

    private users: User[] = [];
    public title: string;

    constructor(title: string) {
        this.title = title;
    }

    addUser(user: User): void {
        this.users.push(user);
    }

    sendMessage(sender: User, message: string): void {
        const userToSend = this.users.filter(user => user !== sender);
        for( const user of userToSend) {
            user.receiveMessage(sender, message);
        }
    }
}


class User {
    private username: string;
    private chatroom: Chatroom;

    constructor(username: string, chatroom: Chatroom) {
        this.username = username;
        this.chatroom = chatroom;
    }

    sendMessage(message: string): void {
        console.log(`%c${this.username} envía el mensaje: %c${message}`, COLORS.blue, COLORS.white);
        this.chatroom.sendMessage(this, message);

        this.chatroom.addUser(this);
    }

    receiveMessage(sender: User, message: string): void {
        console.log(`%c${this.username} recibe de ${ sender.username} el mensaje: %c${message}`, COLORS.blue, COLORS.white);
    }
}


function main() {

    const chatroom = new Chatroom('Chatroom de diseño de patrones');

    const user1 = new User('Usuario 1', chatroom);
    const user2 = new User('Usuario 2', chatroom);
    const user3 = new User('Usuario 3', chatroom);

    chatroom.addUser(user1);
    chatroom.addUser(user2);
    chatroom.addUser(user3);

    user1.sendMessage('Hola a todos!');
    console.log('\n');
    
    user2.sendMessage('Hola Usuario 1!');
    
    
    console.log('\n');
    user3.sendMessage('Hola Usuario 1 y Usuario 2!');




}


main();