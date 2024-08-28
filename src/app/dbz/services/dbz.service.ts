import { Injectable } from "@angular/core";
import { Character } from "../interfaces/character";

@Injectable({
  providedIn: 'root'
})
export class DBZService {

  public characters: Character[] = [{
    name: 'krillin',
    power: 1000
  },{
    name: 'Goku',
    power: 9500
  },{
    name: 'vegeta',
    power: 9000
  }
  ];

  onNewCharacter( character: Character ): void {
    this.characters.push(character);
  }

  onDeleteCharacter( index: number) {
    this.characters.splice(index, 1);
  }

  constructor() {}

}
