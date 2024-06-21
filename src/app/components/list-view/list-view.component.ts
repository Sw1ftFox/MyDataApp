import { Component } from '@angular/core';
import { CITIES, City } from '../../cities';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-list-view',
  standalone: true,
  imports: [NgIf],
  templateUrl: './list-view.component.html',
  styleUrl: './list-view.component.scss'
})
export class ListViewComponent {
  cities = CITIES;

  ngOnInit(): void {
    this.cities = this.loadCities();
  }

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


