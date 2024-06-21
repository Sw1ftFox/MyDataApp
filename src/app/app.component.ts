import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListViewComponent } from "./components/list-view/list-view.component";
import { TileViewComponent } from "./components/tile-view/tile-view.component";

import { NgFor, NgIf } from '@angular/common';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, ListViewComponent, TileViewComponent, NgFor, NgIf]
})
export class AppComponent {
  title = 'my-data-app';
  viewType: 'list' | 'tile' = 'list';
}
