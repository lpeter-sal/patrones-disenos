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

class Pokemon {
  name: string;
  type: string;
  level: number;
  attacks: string[];

  constructor(name: string, type: string, level: number, attacks: string[]) {
    this.name = name;
    this.type = type;
    this.level = level;
    this.attacks = [...attacks]; // * ✅✅✅ Esto es correcto, ya que se pasa por valor  y no por referencia


    // ! this.attacks = attacks; ❌❌❌ // ! Esto no es correcto, ya que se pasa por referencia
    // * Otras alternativas
    // * this.attacks = [...attacks]; ✅✅✅ // ✅ Esto es correcto, ya que se pasa por valor y no por referencia
    // * this.attacks = attacks.slice(); ✅✅✅ // ✅ Esto es correcto, ya que se pasa por valor y no por referencia
    // * this.attacks = attacks.concat(); ✅✅✅ // ✅ Esto es correcto, ya que se pasa por valor y no por referencia
    // * this.attacks = [...attacks]; ✅✅✅ // ✅ Esto es correcto, ya que se pasa por valor y no por referencia
    // * this.attacks = attacks.map((attack) => attack); ✅✅✅ // ✅ Esto es correcto, ya que se pasa por valor y no por referencia
  }

  // Método para clonar el Pokémon
  clone(): Pokemon {
    // Los ataques deben de evitar pasarse por referencia, es decir, no deben de ser el mismo arreglo.
    // Completar: Debe devolver un nuevo Pokémon con los mismos atributos
    return new Pokemon(
      this.name,
      this.type,
      this.level,
      [...this.attacks]
    );

  }

  displayInfo(): void {
    console.log(
      `Nombre: ${this.name}\nTipo: ${this.type}\nNivel: ${
        this.level
      }\nAtaques: ${this.attacks.join(', ')}\n`
    );
  }
}

// Tarea: 🆗
// 1. Crear un Pokémon base. ✅
// 2. Clonar el Pokémon base y modificar algunos atributos en los clones. ✅
// 3. Llamar a displayInfo en cada Pokémon para mostrar sus detalles. ✅

// Ejemplo:
// const basePokemon = new Pokemon("Charmander", "Fuego", 1, ["Llamarada", "Arañazo"]); ✅
// const clone1 = basePokemon.clone(); ✅
// clone1.name = "Charmeleon"; ✅
// clone1.level = 16; ✅
// clone1.attacks.push("Lanzallamas"); ✅

// basePokemon.displayInfo(); // Aquí no debe de aparecer "Lanzallamas" ✅
// clone1.displayInfo(); ✅

function main() {
  const basePokemon = new Pokemon(
    'Charmander',
    'Fuego',
    1,
    ['Llamarada', 'Arañazo']
  );

  const clone1 = basePokemon.clone();
  clone1.name = 'Charmeleon';
  clone1.level = 16;
  clone1.attacks.push('Lanzallamas');

  basePokemon.displayInfo(); // Aquí no debe de aparecer "Lanzallamas"
  console.log('--------------------------------\n');
  clone1.displayInfo(); // Aqui debe de aparecer "Lanzallamas"
}

main();