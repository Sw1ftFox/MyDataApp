import { Routes } from '@angular/router';
import { TileViewComponent } from './components/tile-view/tile-view.component';
import { ListViewComponent } from './components/list-view/list-view.component';

export const routes: Routes = [
  { path: 'tiles', component: TileViewComponent },
  { path: 'list', component: ListViewComponent },
  { path: '', redirectTo: '/tiles', pathMatch: 'full' }
];

