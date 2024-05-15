import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { FooterComponent } from './components/footer/footer.component';

export const routes: Routes = [
    {
        path:"home",
        component:HomeComponent
    }, 
    {
        path:"teste",
        component:FooterComponent
    }  
];
