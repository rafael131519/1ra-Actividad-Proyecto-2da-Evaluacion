import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, ActivatedRoute } from '@angular/router';
import { SkateService } from '../../services/skate.service';
import { CartService } from '../../services/cart.service';
import { Producto } from '../../models/skate.models';

@Component({
  selector: 'app-producto',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './producto.component.html'
})
export class ProductoComponent implements OnInit {
  producto: Producto | null = null;
  relacionados: Producto[] = [];
  imgActiva = '';
  cantidad = 1;
  agregado = false;

  constructor(
    private route: ActivatedRoute,
    private svc: SkateService,
    public cart: CartService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = Number(params['id']);
      this.svc.getProductoById(id).subscribe(p => {
        this.producto = p ?? null;
        this.imgActiva = p?.imagenFrontal ?? '';
        this.cantidad = 1;
        this.agregado = false;
      });
      this.svc.getProductos().subscribe(todos => {
        this.relacionados = todos.filter(p => p.id !== id).slice(0, 4);
      });
    });
  }

  setImg(img: string): void { this.imgActiva = img; }

  addToCart(): void {
    if (!this.producto) return;
    for (let i = 0; i < this.cantidad; i++) this.cart.agregar(this.producto);
    this.agregado = true;
    setTimeout(() => this.agregado = false, 2000);
  }

  changeCantidad(d: number): void { this.cantidad = Math.max(1, this.cantidad + d); }
  stars(n: number): number[] { return Array(n).fill(0); }
}
