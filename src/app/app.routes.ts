import {Routes} from '@angular/router';
export const routes:Routes=[
 {path:'',loadComponent:()=>import('./pages/home.component').then(m=>m.HomeComponent)},
 {path:'products',loadChildren:()=>import('./products/products.routes').then(m=>m.PRODUCT_ROUTES)},
 {path:'cart',loadComponent:()=>import('./pages/cart.component').then(m=>m.CartComponent)},
 {path:'admin',loadComponent:()=>import('./pages/admin.component').then(m=>m.AdminComponent)},
 {path:'**',redirectTo:''}
];