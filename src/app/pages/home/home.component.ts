import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { SkateService } from '../../services/skate.service';
import { CartService } from '../../services/cart.service';
import { Producto, Tabla, Leyenda, BlogPost, Usuario } from '../../models/skate.models';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit, AfterViewInit {
  productos: Producto[] = [];
  tablas: Tabla[] = [];
  leyendas: Leyenda[] = [];
  blog: BlogPost[] = [];
  usuarios: Usuario[] = [];

  tablaActiva = 0;
  tablaFlipped = false;
  leyendaActiva: Leyenda | null = null;

  carouselSlides = [
    { img: 'assets/img/raphael-lopes-ssuecuRdR7s-unsplash.jpg', tag: 'Nueva coleccion', titulo: 'Street Gear\n2025', sub: 'Equipo seleccionado para el asfalto.' },
    { img: 'assets/img/sora-sagano-ibIqYtrxXds-unsplash.jpg', tag: 'Ejes y ruedas', titulo: 'Precision\nen cada truco', sub: 'Hardware de alto rendimiento.' },
    { img: 'assets/img/valentin-beauvais-yVUQlyRlJSw-unsplash.jpg', tag: 'Setup completo', titulo: 'Tu setup,\ntu estilo', sub: 'Configura tu tabla desde cero.' }
  ];

  constructor(private svc: SkateService, public cart: CartService) {}

  ngOnInit(): void {
    this.svc.getProductos().subscribe(p => this.productos = p.slice(0, 4));
    this.svc.getTablas().subscribe(t => this.tablas = t);
    this.svc.getLeyendas().subscribe(l => { this.leyendas = l; this.leyendaActiva = l[0] ?? null; });
    this.svc.getBlog().subscribe(b => this.blog = b);
    this.svc.getUsuarios().subscribe(u => this.usuarios = u);
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      const obs = new IntersectionObserver(entries => {
        entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } });
      }, { threshold: 0.1 });
      document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
    }, 100);
  }

  selectTabla(i: number): void { this.tablaFlipped = false; setTimeout(() => this.tablaActiva = i, 120); }
  prevTabla(): void { this.tablaFlipped = false; setTimeout(() => this.tablaActiva = (this.tablaActiva - 1 + this.tablas.length) % this.tablas.length, 100); }
  nextTabla(): void { this.tablaFlipped = false; setTimeout(() => this.tablaActiva = (this.tablaActiva + 1) % this.tablas.length, 100); }
  toggleFlip(): void { this.tablaFlipped = !this.tablaFlipped; }
  selectLeyenda(l: Leyenda): void { this.leyendaActiva = l; }
  addToCart(p: Producto): void { this.cart.agregar(p); }
  stars(n: number): number[] { return Array(n).fill(0); }
}
