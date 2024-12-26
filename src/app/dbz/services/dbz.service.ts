import { Injectable } from "@angular/core";
import { v4 as uuid } from 'uuid';
import { Character } from '../interfaces/character';

// Decorador @Injectable indica que este servicio puede ser inyectado en otros componentes o servicios.
@Injectable({
  providedIn: 'root' // Especifica que el servicio estará disponible en todo el nivel raíz de la aplicación.
})
export class DBZService {

  // Lista pública de personajes inicializados con valores por defecto.
  public characters: Character[] = [{
    id: uuid(),
    name: 'krillin', // Nombre del personaje.
    power: 1000      // Poder del personaje.
  },{
    id: uuid(),
    name: 'Goku',
    power: 9500
  },{
    id: uuid(),
    name: 'vegeta',
    power: 9000
  }];

  /**
   * Método para agregar un nuevo personaje al arreglo de personajes.
   * @param character - Objeto de tipo Character que se agregará a la lista.
   */
  onNewCharacter(character: Character): void {

    //se le asigna la uuid aleatoriamente añadiendo los valores de charecter
    const newCharecter: Character = {id: uuid(), ...character}

    this.characters.push(newCharecter); // Añade el nuevo personaje al final del array.
  }

  /**
   * Método para eliminar un personaje de la lista basado en su índice.
   * @param index - Índice del personaje que será eliminado del arreglo.
   */
  onDeleteCharacter(index: number): void {
    this.characters.splice(index, 1); // Elimina un elemento de la lista según su índice.
  }

  /**
   * Método para eliminar un personaje de la lista basado en su identificador.
   * @param id - Identificador del personaje que será eliminado del arreglo.
   */
  onDeleteCharacterById(id: string): void {

    this.characters = this.characters.filter(character => character.id !== id);

  }

  // Constructor del servicio, actualmente no realiza ninguna acción.
  constructor() {}
}
