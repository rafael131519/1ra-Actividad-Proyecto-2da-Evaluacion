import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent),
    title: 'SkateSet'
  },
  {
    path: 'catalogo',
    loadComponent: () => import('./pages/catalogo/catalogo.component').then(m => m.CatalogoComponent),
    title: 'Catalogo | SkateSet'
  },
  {
    path: 'producto/:id',
    loadComponent: () => import('./pages/producto/producto.component').then(m => m.ProductoComponent),
    title: 'Producto | SkateSet'
  },
  {
    path: 'carrito',
    loadComponent: () => import('./pages/carrito/carrito.component').then(m => m.CarritoComponent),
    title: 'Carrito | SkateSet'
  },
  {
    path: 'login',
    loadComponent: () => import('./pages/login/login.component').then(m => m.LoginComponent),
    title: 'Iniciar Sesion | SkateSet'
  },
  {
    path: 'register',
    loadComponent: () => import('./pages/register/register.component').then(m => m.RegisterComponent),
    title: 'Registro | SkateSet'
  },
  {
    path: 'contacto',
    loadComponent: () => import('./pages/contacto/contacto.component').then(m => m.ContactoComponent),
    title: 'Contacto | SkateSet'
  },
  {
    path: 'about',
    loadComponent: () => import('./pages/about/about.component').then(m => m.AboutComponent),
    title: 'Quienes Somos | SkateSet'
  },
  { path: '**', redirectTo: '' }
];
