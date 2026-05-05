import { Injectable, signal } from '@angular/core';

export interface AuthUser { nombre: string; email: string; }

@Injectable({ providedIn: 'root' })
export class AuthService {
  currentUser = signal<AuthUser | null>(null);
  get isLoggedIn(): boolean { return this.currentUser() !== null; }

  login(email: string, _pw: string): boolean {
    this.currentUser.set({ nombre: email.split('@')[0], email });
    return true;
  }
  register(nombre: string, email: string, _pw: string): boolean {
    this.currentUser.set({ nombre, email });
    return true;
  }
  logout(): void { this.currentUser.set(null); }
}
