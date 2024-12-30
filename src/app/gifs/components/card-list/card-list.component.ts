import { Component, Input, OnInit } from '@angular/core';
import { Card } from '../../interfaces/card';
import { Gif } from '../../interfaces/gifs.interfaces';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrl: './card-list.component.css'
})
export class CardListComponent implements OnInit {
  cards: Card[] = [];

  @Input()
  public gifs:Gif[] = [];

  ngOnInit(): void {
    this.loadCards();
  }

  loadCards(): void {
    // Simulación de datos. En una aplicación real, estos datos vendrían de un servicio.
    this.cards = [
      {
        id: 1,
        title: 'Carta 1',
        description: 'Esta es la descripción de la carta 1.'
      },
      {
        id: 2,
        title: 'Carta 2',
        description: 'Esta es la descripción de la carta 2.'
      }
    ];
  }

}
