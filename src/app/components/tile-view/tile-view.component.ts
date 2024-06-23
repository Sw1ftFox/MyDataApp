import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { CITIES, City } from '../../cities';

@Component({
  selector: 'app-tile-view',
  standalone: true,
  imports: [NgIf],
  templateUrl: './tile-view.component.html',
  styleUrl: './tile-view.component.scss'
})
export class TileViewComponent {
  cities = this.loadCities();

  toggleFavorite(city: City): void {
    city.favorite = !city.favorite;
    this.saveCities();
  }

  private loadCities(): City[] {
    const citiesFromStorage = localStorage.getItem('cities');

    if (citiesFromStorage) {
      return JSON.parse(citiesFromStorage);
    } else {
      return CITIES;
    }
  }

  private saveCities(): void {
    localStorage.setItem('cities', JSON.stringify(this.cities));
  }
}
