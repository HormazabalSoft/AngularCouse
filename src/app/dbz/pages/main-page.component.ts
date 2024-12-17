import { Component, OnInit } from '@angular/core';
import { Character } from '../interfaces/character';
import { DBZService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',//html selector
  templateUrl: './main-page.component.html'//html name
})

export class MainPageComponent {

  constructor(public dbzService: DBZService){};


}


