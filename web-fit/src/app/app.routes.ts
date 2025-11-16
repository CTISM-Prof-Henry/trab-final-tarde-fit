import { Routes } from '@angular/router';
import { Body } from './components/body/body';

export const routes: Routes = [
    {path: "", redirectTo: "home", pathMatch: "full"},
    {path: "home",component: Body},
];
