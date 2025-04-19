/**
 * ! Singleton:
 * Es un patrón de diseño creacional que garantiza que una clase
 * tenga una única instancia y proporciona un punto de acceso global a ella.
 *
 * * Es útil cuando necesitas controlar el acceso a una única instancia
 * * de una clase, como por ejemplo, en un objeto de base de datos o en un
 * * objeto de configuración.
 */

import { COLORS } from '../helpers/colors.ts';

class DatabaseConnection {
  private static instance: DatabaseConnection;
  private connected: boolean = false;

  // Constructor privado para evitar instancias directas ✅🆗
  private constructor() {}

  // Método estático para obtener la instancia única
  public static getInstance(): DatabaseConnection {
    // Completar: implementar el patrón Singleton ✅🆗
    if( !DatabaseConnection.instance ) {
      DatabaseConnection.instance = new DatabaseConnection();
      console.log('%cConexión a la base de datos creada!', COLORS.green);
    }
    return DatabaseConnection.instance;
  }

  // Método para conectar a la base de datos
  public connect(): void {
    // Completar: si no está conectado, mostrar mensaje de conexión ✅🆗
    if( !this.connected ) {
      this.connected = true;
      console.log('%cConectado a la base de datos!', COLORS.blue);
      return;
    }
    console.log('%cYa existe una conexión activa!', COLORS.red);
  }

  // Método para desconectar de la base de datos
  public disconnect(): void {
    // Completar: desconectar y mostrar mensaje de desconexión ✅🆗
    if( this.connected ) {
      this.connected = false;
      console.log('%cDesconectado de la base de datos!', COLORS.yellow);
      return;
    }
    console.log('%cNo hay conexión activa para desconectar!', COLORS.red);
  }
}

// Pruebas
function main() {
  const db1 = DatabaseConnection.getInstance();
  db1.connect(); // Debería conectar a la base de datos ✅

  const db2 = DatabaseConnection.getInstance();
  db2.connect(); // Debería mostrar que ya existe una conexión activa ✅

  console.log('Son iguales:', db1 === db2); // Debería mostrar true ✅

  db1.disconnect(); // Debería cerrar la conexión ✅

  db2.connect(); // Ahora debería conectar de nuevo, ya que se cerró la anterior ✅
}

main();
