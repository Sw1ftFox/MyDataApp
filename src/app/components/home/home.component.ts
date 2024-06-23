import { Component } from '@angular/core';
import { ListViewComponent } from "../list-view/list-view.component";
import { TileViewComponent } from "../tile-view/tile-view.component";
import { NgIf } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    imports: [ListViewComponent, TileViewComponent, NgIf, RouterModule]
})
export class HomeComponent {
  viewType: 'list' | 'tile' = 'list';
}
