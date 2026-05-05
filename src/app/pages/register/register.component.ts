import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';

function matchPasswords(g: AbstractControl) {
  const p = g.get('password')?.value;
  const c = g.get('confirm')?.value;
  return p === c ? null : { noMatch: true };
}

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './register.component.html'
})
export class RegisterComponent {
  form: FormGroup;
  showPass = false;

  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router) {
    this.form = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      email:  ['', [Validators.required, Validators.email]],
      passwords: this.fb.group({
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirm:  ['', Validators.required]
      }, { validators: matchPasswords })
    });
  }

  get f() { return this.form.controls; }
  get pw() { return this.form.get('passwords.password')!; }
  get cf() { return this.form.get('passwords.confirm')!; }
  get pwg() { return this.form.get('passwords')!; }

  irALogin(event: Event): void {
    if ((event.target as HTMLInputElement).checked) {
      this.router.navigate(['/login']);
    }
  }

  submit(): void {
    if (this.form.invalid) { this.form.markAllAsTouched(); return; }
    this.auth.register(this.f['nombre'].value, this.f['email'].value, this.pw.value);
    this.router.navigate(['/']);
  }
}
