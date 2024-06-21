import { Component } from '@angular/core';
import { CITIES } from '../../cities';

@Component({
  selector: 'app-list-view',
  standalone: true,
  imports: [],
  templateUrl: './list-view.component.html',
  styleUrl: './list-view.component.scss'
})
export class ListViewComponent {
  cities = CITIES;
}


