import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'home-view-button',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './view-button.component.html',
  styleUrl: './view-button.component.scss'
})
export class ViewButtonComponent {
}
