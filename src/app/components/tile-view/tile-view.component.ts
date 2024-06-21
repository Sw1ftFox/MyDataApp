import { Component } from '@angular/core';
import { CITIES } from '../../cities';

@Component({
  selector: 'app-tile-view',
  standalone: true,
  imports: [],
  templateUrl: './tile-view.component.html',
  styleUrl: './tile-view.component.scss'
})
export class TileViewComponent {
  cities = CITIES;
}
