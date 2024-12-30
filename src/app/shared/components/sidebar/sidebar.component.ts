import { Component } from '@angular/core';
import { GifsService } from '../../../gifs/services/gifs.service';
import { Onclick } from '../../../gifs/interfaces/gifs.interfaces';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

  constructor(private gifsService:GifsService){}

  get tagsHistory() {
    return this.gifsService.tagsHistory;
  }

  Onclick(gifTag: string){

    this.gifsService.searchTag(gifTag);

  }

}
