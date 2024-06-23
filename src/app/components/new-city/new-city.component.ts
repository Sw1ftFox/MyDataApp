import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { CITIES, City } from '../../cities';

@Component({
  selector: 'app-new-city',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule],
  templateUrl: './new-city.component.html',
  styleUrl: './new-city.component.scss'
})
export class NewCityComponent {
  name = new FormControl('');
  description = new FormControl('');
  image = new FormControl('');

  // cities = CITIES; 
  cities: City[] = this.loadCities();
  
  onSubmit(): void {
    const newCity: City = {
      id: this.cities.length,
      name: this.name.value ?? '',
      description: this.description.value ?? '',
      image: this.image.value ?? '',
      favorite: false
    };

    this.cities.push(newCity);
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
};

