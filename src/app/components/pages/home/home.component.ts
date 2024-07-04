import { Component } from '@angular/core';
import { ViewButtonComponent } from "./home-components/view-button/view-button.component";

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  imports: [ViewButtonComponent]
})
export class HomeComponent {
}