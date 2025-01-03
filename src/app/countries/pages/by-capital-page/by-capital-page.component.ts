import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
    selector: 'app-by-capital-page',
    templateUrl: './by-capital-page.component.html',
    styles: ``,
    standalone: false
})
export class ByCapitalPageComponent {

  results: any[] = [];

  public countries: Country[] = [];

  constructor( private countriesService: CountriesService){}

  searchByCapital( term: string ){
    this.countriesService.searchCapital( term ).subscribe(
      (data) => {
        this.countries = data;
      },
      (error) => {
        console.error('Error fetching countries by capital:', error);
      }
    );
  }

}
