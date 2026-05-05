import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-carrito',
  standalone: true,
  imports: [CommonModule, RouterLink, ReactiveFormsModule],
  templateUrl: './carrito.component.html'
})
export class CarritoComponent {
  metodoPago: 'tarjeta' | 'paypal' | 'transferencia' = 'tarjeta';
  pagado = false;
  procesando = false;

  envioForm: FormGroup;
  pagoForm: FormGroup;

  constructor(public cart: CartService, private fb: FormBuilder) {
    // Formulario de envio
    this.envioForm = this.fb.group({
      nombre:    ['', [Validators.required, Validators.minLength(3)]],
      apellido:  ['', Validators.required],
      email:     ['', [Validators.required, Validators.email]],
      telefono:  ['', [Validators.required, Validators.pattern(/^\d{7,15}$/)]],
      direccion: ['', [Validators.required, Validators.minLength(8)]],
      ciudad:    ['', Validators.required],
      pais:      ['', Validators.required],
      codigo:    ['', Validators.required]
    });

    // Formulario de pago tarjeta
    this.pagoForm = this.fb.group({
      titular:  ['', Validators.required],
      tarjeta:  ['', [Validators.required, Validators.pattern(/^\d{16}$/)]],
      expiry:   ['', [Validators.required, Validators.pattern(/^(0[1-9]|1[0-2])\/\d{2}$/)]],
      cvv:      ['', [Validators.required, Validators.pattern(/^\d{3,4}$/)]]
    });
  }

  get fe() { return this.envioForm.controls; }
  get fp() { return this.pagoForm.controls; }

  setMetodo(m: 'tarjeta' | 'paypal' | 'transferencia'): void { this.metodoPago = m; }

  quitar(id: number): void { this.cart.quitar(id); }
  cambiarCantidad(id: number, e: Event): void {
    this.cart.cambiarCantidad(id, Number((e.target as HTMLInputElement).value));
  }

  pagar(): void {
    this.envioForm.markAllAsTouched();
    if (this.metodoPago === 'tarjeta') this.pagoForm.markAllAsTouched();

    const envioValido = this.envioForm.valid;
    const pagoValido = this.metodoPago !== 'tarjeta' || this.pagoForm.valid;

    if (!envioValido || !pagoValido) return;

    this.procesando = true;
    setTimeout(() => {
      this.procesando = false;
      this.pagado = true;
      this.cart.vaciar();
    }, 2000);
  }
}
