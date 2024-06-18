import { ApplicationModule, Component, ComponentRef } from '@angular/core';
import { Routes } from '@angular/router';
import { ProductsComponent } from './page/products/products.component';
import { Action } from 'rxjs/internal/scheduler/Action';
import { CarComponent } from './page/car/car.component';
import { HomeComponent } from './page/home/home.component';

export const routes: Routes = [
   {
    path: 'products ',
    component: ProductsComponent
   },

   {
    path: 'car',
    component: CarComponent
   },

   {
    path: 'home',
    component: HomeComponent,
    pathMatch: 'full'
   }
];


