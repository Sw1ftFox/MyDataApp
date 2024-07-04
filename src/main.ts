import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { NewCityComponent } from './app/components/pages/new-city/new-city.component';
import { HomeComponent } from './app/components/pages/home/home.component';
import { ListViewComponent } from './app/components/pages/home/home-components/list-view/list-view.component';
import { TileViewComponent } from './app/components/pages/home/home-components/tile-view/tile-view.component';
import { provideRouter, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: HomeComponent},
  {
    path: 'home',
    component: HomeComponent,
    children: [
      { path: '', component: ListViewComponent, outlet: 'view'},
      { path: 'list-view', component: ListViewComponent, outlet: 'view' },
      { path: 'tile-view', component: TileViewComponent, outlet: 'view' },
    ]
  },
  { path: 'new-city', component: NewCityComponent },
];

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)],
})
  .catch((err) => console.error(err));
