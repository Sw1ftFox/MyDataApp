import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgIf } from '@angular/common';
import { City } from '../../../cities';

@Component({
  selector: 'home-favorite-icon',
  standalone: true,
  imports: [NgIf],
  templateUrl: './favorite-icon.component.html',
  styleUrl: './favorite-icon.component.scss'
})
export class FavoriteIconComponent {
  @Input() city!: City;
  @Output() saveCities = new EventEmitter();

  toggleFavorite(): void {
    this.city.favorite = !this.city.favorite;
    this.saveCities.emit();
  }
}
