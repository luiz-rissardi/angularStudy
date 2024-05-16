import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ShoeDetailComponent } from './components/shoe-detail/shoe-detail.component';

export const routes: Routes = [
    {
        path:"home",
        component:HomeComponent
    }, 
    {
        path:"shoe/:id",
        component:ShoeDetailComponent
    }  
];
