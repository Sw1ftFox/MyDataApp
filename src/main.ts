import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { NewCityComponent } from './app/components/pages/new-city/new-city.component';
import { HomeComponent } from './app/components/pages/home/home.component';
import {provideRouter, Routes} from '@angular/router';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'new-city', component: NewCityComponent },
];

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)],
})
  .catch((err) => console.error(err));
