import { Component, Input } from '@angular/core';
import { NgIf } from '@angular/common';
import { City } from '../../../cities';

import { CityService } from '../../../services/city.service';

@Component({
  selector: 'home-favorite-icon',
  standalone: true,
  imports: [NgIf],
  templateUrl: './favorite-icon.component.html',
  styleUrl: './favorite-icon.component.scss'
})
export class FavoriteIconComponent {
  @Input() city!: City;

  constructor(private cityService: CityService) { }

  toggleFavorite(): void {
    this.cityService.toggleFavorite(this.city);
  }
}
