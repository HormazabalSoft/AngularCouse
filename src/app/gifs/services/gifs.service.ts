/**
 * Servicio GifsService
 *
 * Este servicio se encarga de gestionar el historial de etiquetas (tags) utilizadas
 * para buscar GIFs. Incluye métodos para organizar, actualizar y consultar el historial.
 */

import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchResponse } from '../interfaces/gifs.interfaces';

@Injectable({
  providedIn: 'root' // Proporciona el servicio a toda la aplicación
})
export class GifsService {

  // Propiedades privadas
  /**
   * _tagsHistory
   *
   * Arreglo privado que almacena el historial de etiquetas (tags) utilizadas para buscar GIFs.
   * Solo se puede acceder a través del getter `tagsHistory`.
   */
  public gifList:Gif[] = [];
  private _tagsHistory: string[] = [];
  private apiKey: string = 'hAAHzvLorX86UfmyDm9dPxyAnQTvulzn';
  private serviceUrl: string = 'https://api.giphy.com/v1/gifs'

  constructor( private http: HttpClient) {}

  // Getters
  /**
   * tagsHistory
   *
   * Devuelve una copia del historial de etiquetas.
   * Este getter permite acceder al historial sin modificar el arreglo original.
   *
   * @returns {string[]} Una copia del historial de etiquetas.
   */
  get tagsHistory(): string[] {
    return [...this._tagsHistory];
  }

  // Métodos privados
  /**
   * organizeHistory
   *
   * Organiza y actualiza el historial de etiquetas.
   * - Convierte la etiqueta a minúsculas para mantener uniformidad.
   * - Si la etiqueta ya existe, la elimina del historial para evitar duplicados.
   * - Agrega la etiqueta al inicio del historial.
   * - Limita el historial a un máximo de 7 etiquetas.
   *
   * @param {string} tag La etiqueta que se va a organizar.
   */
  private organizeHistory(tag: string): void {
    tag = tag.toLowerCase();

    // Elimina la etiqueta si ya existe en el historial
    if (this._tagsHistory.includes(tag)) {
      this._tagsHistory = this._tagsHistory.filter((oldTag) => oldTag !== tag);
    }

    // Agrega la etiqueta al inicio del historial
    this._tagsHistory.unshift(tag);

    // Limita el historial a las últimas 7 etiquetas
    this._tagsHistory = this.tagsHistory.splice(0, 7);
  }

  // Métodos públicos
  /**
   * searchTag
   *
   * Busca una etiqueta (tag) y actualiza el historial de etiquetas.
   * - Si la etiqueta está vacía, no realiza ninguna acción.
   * - Organiza el historial de etiquetas llamando a `organizeHistory`.
   * - (Opcional) Aquí se podría implementar la lógica para realizar la búsqueda en una API.
   *
   * @param {string} tag La etiqueta que se va a buscar.
   */
  searchTag(tag: string): void {
    if (tag.length === 0) return; // No realiza nada si el tag está vacío

    this.organizeHistory(tag);

    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('limit', '10')
      .set('q', tag);

    this.http.get<SearchResponse>(`${ this.serviceUrl }/search`, {params})
     .subscribe(resp => {

        this.gifList = resp.data;
        console.log({ gifs: this.gifList});

     });

    // (Temporal) Imprime el historial de etiquetas actualizado en la consola

  }
}
