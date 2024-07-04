import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { City } from '../../../../../cities';

import { CityService } from '../../../../../services/city.service';

@Component({
  selector: 'city-form-create',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form-create.component.html',
  styleUrl: './form-create.component.scss'
})
export class FormCreateComponent implements OnInit {
  cities: City[] = [];

  constructor(private cityService: CityService) { }

  ngOnInit(): void {
    this.cities = this.cityService.getCities();
  }

  name = '';
  description = '';
  image = '';

  onSubmit(): void {
    const newCity: City = {
      id: this.cities.length + 1,
      name: this.name,
      description: this.description,
      image: this.image,
      favorite: false
    };

    this.cityService.addCity(newCity);

    this.name = '';
    this.description= '';
    this.image= '';
  }
}
