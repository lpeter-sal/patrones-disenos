import { configManager } from './singleton/config-manager.ts';
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



configManager.setConfig('apiURL', 'https://api.example.com');
configManager.setConfig('timeout', '5000');
configManager.setConfig('apiKey', '123');

console.log(configManager.getConfig('apiURL')); // https://api.example.com
console.log(configManager.getConfig('timeout')); // https://api.example.com
console.log(configManager.getConfig('apiKey')); // https://api.example.com