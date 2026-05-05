import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { SkateData, Producto, Tabla, Usuario, Leyenda, BlogPost } from '../models/skate.models';

@Injectable({ providedIn: 'root' })
export class SkateService {
  private url = 'assets/data/data.json';
  constructor(private http: HttpClient) {}

  getData(): Observable<SkateData> { return this.http.get<SkateData>(this.url); }
  getProductos(): Observable<Producto[]> { return this.getData().pipe(map(d => d.productos)); }
  getProductoById(id: number): Observable<Producto | undefined> {
    return this.getProductos().pipe(map(p => p.find(x => x.id === id)));
  }
  getTablas(): Observable<Tabla[]> { return this.getData().pipe(map(d => d.tablas)); }
  getUsuarios(): Observable<Usuario[]> { return this.getData().pipe(map(d => d.usuarios)); }
  getLeyendas(): Observable<Leyenda[]> { return this.getData().pipe(map(d => d.leyendas)); }
  getBlog(): Observable<BlogPost[]> { return this.getData().pipe(map(d => d.blog)); }
}
