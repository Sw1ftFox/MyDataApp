import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { City } from '../../../../../cities';
import { FavoriteIconComponent } from "../../../../shared-components/favorite-icon/favorite-icon.component";

import { CityService } from '../../../../../services/city.service';

@Component({
  selector: 'home-list-view',
  standalone: true,
  templateUrl: './list-view.component.html',
  styleUrl: './list-view.component.scss',
  imports: [NgFor, FavoriteIconComponent]
})
export class ListViewComponent implements OnInit {
  cities: City[] = [];

  constructor(private cityService: CityService) { }

  ngOnInit(): void {
    this.cities = this.cityService.getCities();
  }
}


