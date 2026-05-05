import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contacto.component.html'
})
export class ContactoComponent {
  form: FormGroup;
  enviado = false;
  enviando = false;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      nombre:  ['', [Validators.required, Validators.minLength(3)]],
      email:   ['', [Validators.required, Validators.email]],
      asunto:  ['Soporte tecnico', Validators.required],
      mensaje: ['', [Validators.required, Validators.minLength(20)]]
    });
  }

  get f() { return this.form.controls; }

  submit(): void {
    if (this.form.invalid) { this.form.markAllAsTouched(); return; }
    this.enviando = true;
    setTimeout(() => {
      this.enviando = false;
      this.enviado = true;
      this.form.reset({ asunto: 'Soporte tecnico' });
    }, 1500);
  }
}
