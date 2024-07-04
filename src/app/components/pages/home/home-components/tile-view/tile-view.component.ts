import { Component, OnInit } from '@angular/core';
import { NgIf, NgFor } from '@angular/common';
import { City } from '../../../../../cities';
import { FavoriteIconComponent } from "../../../../shared-components/favorite-icon/favorite-icon.component";

import { CityService } from '../../../../../services/city.service';

@Component({
  selector: 'home-tile-view',
  standalone: true,
  templateUrl: './tile-view.component.html',
  styleUrl: './tile-view.component.scss',
  imports: [NgIf, NgFor, FavoriteIconComponent]
})
export class TileViewComponent implements OnInit {
  cities: City[] = [];

  constructor(private cityService: CityService) { }

  ngOnInit(): void {
    this.cities = this.cityService.getCities();
  }
}
