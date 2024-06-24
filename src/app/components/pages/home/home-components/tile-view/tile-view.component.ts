import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { CITIES, City } from '../../../../../cities';
import { FavoriteIconComponent } from "../../../../shared-components/favorite-icon/favorite-icon.component";

@Component({
  selector: 'home-tile-view',
  standalone: true,
  templateUrl: './tile-view.component.html',
  styleUrl: './tile-view.component.scss',
  imports: [NgIf, FavoriteIconComponent]
})
export class TileViewComponent {
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
