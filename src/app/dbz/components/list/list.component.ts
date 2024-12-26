import { Component, EventEmitter, input, Input, Output, output } from '@angular/core';
import { Character } from '../../interfaces/character';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  @Input()
  public characterList: Character[] = [{
    name: 'Trunks',
    power: 4000
  }];

  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();

  onDeleteCharacter(index: number):void {
    //Todo: Emitir el ID del personaje
    //this.onDelete.emit( index );
  }

  onDeleteCharacterById(id: string): void {
    if (!id) {
      console.warn('ID no válido');
      return;
    }
    console.log('eliminando character con: ' + id);
    this.onDelete.emit(id);
  }

}
