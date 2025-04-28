/**
 * ! Patrón Template Method
 *
 * El patrón Template Method es un patrón de diseño de comportamiento
 * que define el esqueleto de un algoritmo en una operación,
 * delegando algunos pasos a las subclases.
 *
 * Permite que las subclases redefinan ciertos pasos de un algoritmo
 * sin cambiar su estructura.
 *
 * * Es útil cuando se tiene un algoritmo que sigue una secuencia de pasos
 * * y se quiere permitir a las subclases que redefinan algunos de esos pasos.
 *
 * https://refactoring.guru/es/design-patterns/template-method
 */

/**
 * !Objetivo: 
 * Implementar el patrón Template Method para simular un sistema de limpieza 
 * de diferentes tipos de habitaciones 
 * (por ejemplo, una habitación de hotel y una sala de conferencias). 
 * 
 * Debes diseñar una clase base que defina el flujo general de limpieza 
 * y subclases que implementen pasos específicos dependiendo del tipo 
 * de habitación.
 * 
 * 
 * 
 * ! Descripción del Ejercicio
  El proceso de limpieza general incluye los siguientes pasos:
    1.	Entrar a la habitación: Abrir la puerta y entrar.
    2.	Recoger basura: Eliminar la basura de los botes.
    3.	Limpieza específica: Depende del tipo de habitación:
    •	En una habitación de hotel, se hacen las camas.
    •	En una sala de conferencias, se limpian las mesas y se organizan las sillas.
    • En una oficina, se limpian los escritorios y se organizan los documentos.
    4.	Desinfectar superficies: Desinfectar las áreas principales.
    5.	Salir de la habitación: Cerrar la puerta y marcar como terminada
 */

import { COLORS } from '../helpers/colors.ts';

// Clase Base - RoomCleaning 🆗
abstract class RoomCleaning {
  // Método plantilla: define el flujo general ✅✅✅
  cleanRoom(): void {
    this.enterRoom();
    this.collectTrash();
    this.specificCleaning(); // Este método hay que implementarlo ✅✅✅
    this.disinfectSurfaces();
    this.exitRoom();

    console.log('Limpieza terminada.\n');
  }

  // Pasos comunes ✅✅✅
  private enterRoom(): void {
    console.log('Entrando a la habitación...');
  }

  private collectTrash(): void {
    console.log('Recogiendo la basura...');
  }

  private disinfectSurfaces(): void {
    console.log('Desinfectando superficies...');
  }

  private exitRoom(): void {
    console.log('Saliendo de la habitación y marcándola como limpia.');
  }

  // Método abstracto para limpieza específica ✅✅✅
  // Implementar el método specificCleaning en las subclases ✅✅✅
  // protected abstract? ambas? ✅✅✅
  protected abstract specificCleaning(): void;
}

// Subclase - HotelRoomCleaning 🆗
class HotelRoomCleaning extends RoomCleaning {
  // Implementar método específico ✅✅✅
  // Mensaje: 'Haciendo las camas y reponiendo artículos de baño.' ✅✅✅
  protected specificCleaning(): void {
    console.log('Haciendo las camas y reponiendo artículos de baño.');
  }

}

// Subclase - ConferenceRoomCleaning 🆗
class ConferenceRoomCleaning extends RoomCleaning {
  // Implementar método específico ✅✅✅
  // Mensaje: 'Limpiando mesas y organizando sillas.' ✅✅✅
  protected specificCleaning(): void {
    console.log('Limpiando mesas y organizando sillas.');
  }

}

// Subclase - OfficeCleaning 🆗
class OfficeCleaning extends RoomCleaning {
  // Implementar método específico ✅✅✅
  // Mensaje: 'Limpiando escritorios y organizando documentos.' ✅✅✅
  protected specificCleaning(): void {
    console.log('Limpiando escritorios y organizando documentos.');
  }
}

// Código Cliente 🆗✅✅✅
function main(): void {
  console.log('%cLimpieza de una habitación de hotel:', COLORS.blue);
  const hotelRoom = new HotelRoomCleaning();
  hotelRoom.cleanRoom();

  console.log('%cLimpieza de una sala de conferencias:', COLORS.purple);
  const conferenceRoom = new ConferenceRoomCleaning();
  conferenceRoom.cleanRoom();

  console.log('%cLimpieza de una oficina:', COLORS.orange);
  const office = new OfficeCleaning();
  office.cleanRoom();
}

main();
