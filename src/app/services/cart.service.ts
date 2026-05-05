import { Injectable, signal, computed } from '@angular/core';
import { CartItem, Producto } from '../models/skate.models';

@Injectable({ providedIn: 'root' })
export class CartService {
  items = signal<CartItem[]>([]);
  total = computed(() => this.items().reduce((s, i) => s + i.producto.precio * i.cantidad, 0));
  cantidad = computed(() => this.items().reduce((s, i) => s + i.cantidad, 0));

  agregar(p: Producto): void {
    const lista = this.items();
    const idx = lista.findIndex(i => i.producto.id === p.id);
    if (idx >= 0) {
      const n = [...lista];
      n[idx] = { ...n[idx], cantidad: n[idx].cantidad + 1 };
      this.items.set(n);
    } else {
      this.items.set([...lista, { producto: p, cantidad: 1 }]);
    }
  }
  quitar(id: number): void { this.items.set(this.items().filter(i => i.producto.id !== id)); }
  cambiarCantidad(id: number, cantidad: number): void {
    if (cantidad <= 0) { this.quitar(id); return; }
    this.items.set(this.items().map(i => i.producto.id === id ? { ...i, cantidad } : i));
  }
  vaciar(): void { this.items.set([]); }
}
