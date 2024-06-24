import { Component } from '@angular/core';
import { CITIES, City } from '../../../cities';
import { FormCreateComponent } from "./new-city-components/form-create/form-create.component";
import { ReturnButtonComponent } from "./new-city-components/return-button/return-button.component";

@Component({
    selector: 'app-new-city',
    standalone: true,
    templateUrl: './new-city.component.html',
    styleUrl: './new-city.component.scss',
    imports: [FormCreateComponent, ReturnButtonComponent]
})
export class NewCityComponent {
  cities = this.loadCities();

  loadCities(): City[] {
    const citiesFromStorage = localStorage.getItem('cities');
    if (citiesFromStorage) {
      return JSON.parse(citiesFromStorage);
    } else {
      return CITIES;
    }
  }

  saveCities(): void {
    localStorage.setItem('cities', JSON.stringify(this.cities));
  }
};