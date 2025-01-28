import { Routes } from '@angular/router';
import { AccessComponent } from './access/access.component';
import { MainPageComponent } from './main-page/main-page.component';
import { StatisticsPageComponent } from './statistics-page/statistics-page.component';

export const routes: Routes = [
    { path: 'home', component: MainPageComponent },
    { path: 'login', component: AccessComponent },
    { path: 'statistics', component: StatisticsPageComponent }

];
