import { Injectable } from '@angular/core';
import { City, CITIES } from '../cities';

@Injectable({
  providedIn: 'root'
})
export class CityService {
  private cities: City[] = this.loadCities();

  getCities(): City[] {
    return this.cities;
  }

  addCity(newCity: City): void {
    const check = this.cities.find(c => c.name === newCity.name);
    if (!check) {
      this.cities.push(newCity);
      this.saveCities();
    }
  }

  toggleFavorite(city: City): void {
    const cityToUpdate = this.cities.find(c => c.name === city.name);
    if (cityToUpdate) {
      cityToUpdate.favorite = !cityToUpdate.favorite;
      this.saveCities();
    }
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
