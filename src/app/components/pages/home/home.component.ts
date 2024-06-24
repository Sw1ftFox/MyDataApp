import { Component } from '@angular/core';
import { ListViewComponent } from "./home-components/list-view/list-view.component";
import { TileViewComponent } from "./home-components/tile-view/tile-view.component";
import { NgIf } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ViewButtonComponent } from "./home-components/view-button/view-button.component";

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  imports: [ListViewComponent, TileViewComponent, NgIf, RouterModule, ViewButtonComponent]
})
export class HomeComponent {
  viewType: 'list' | 'tile' = 'list';

  onViewTypeChange(viewType: 'list' | 'tile') {
    this.viewType = viewType;
  }
}
