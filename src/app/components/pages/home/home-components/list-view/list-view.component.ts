import { Component } from '@angular/core';
import { CITIES, City } from '../../../../../cities';
import { FavoriteIconComponent } from "../../../../shared-components/favorite-icon/favorite-icon.component";

@Component({
  selector: 'home-list-view',
  standalone: true,
  templateUrl: './list-view.component.html',
  styleUrl: './list-view.component.scss',
  imports: [FavoriteIconComponent]
})
export class ListViewComponent {
  cities = this.loadCities();

  private loadCities(): City[] {
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
}


