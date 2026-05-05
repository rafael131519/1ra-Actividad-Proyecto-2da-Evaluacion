import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SkateService } from '../../services/skate.service';
import { CartService } from '../../services/cart.service';
import { Producto } from '../../models/skate.models';

@Component({
  selector: 'app-catalogo',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './catalogo.component.html'
})
export class CatalogoComponent implements OnInit, AfterViewInit {
  todos: Producto[] = [];
  filtrados: Producto[] = [];
  categorias = ['Todos', 'Tablas', 'Ejes', 'Ruedas'];
  catActiva = 'Todos';
  busqueda = '';
  orden = 'nombre';
  flipped: number | null = null;

  constructor(private svc: SkateService, public cart: CartService) {}

  ngOnInit(): void {
    this.svc.getProductos().subscribe(p => { this.todos = p; this.filtrar(); });
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      const obs = new IntersectionObserver(e => {
        e.forEach(x => { if (x.isIntersecting) { x.target.classList.add('visible'); obs.unobserve(x.target); } });
      }, { threshold: 0.08 });
      document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
    }, 100);
  }

  setCategoria(cat: string): void { this.catActiva = cat; this.filtrar(); }

  filtrar(): void {
    let r = this.catActiva === 'Todos' ? [...this.todos] : this.todos.filter(p => p.categoria === this.catActiva);
    if (this.busqueda) r = r.filter(p => p.nombre.toLowerCase().includes(this.busqueda.toLowerCase()));
    if (this.orden === 'precio-asc') r.sort((a, b) => a.precio - b.precio);
    else if (this.orden === 'precio-desc') r.sort((a, b) => b.precio - a.precio);
    else r.sort((a, b) => a.nombre.localeCompare(b.nombre));
    this.filtrados = r;
  }

  toggleFlip(id: number): void { this.flipped = this.flipped === id ? null : id; }
  addToCart(p: Producto): void { this.cart.agregar(p); }
}
