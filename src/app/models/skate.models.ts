export interface Producto {
  id: number; nombre: string; categoria: string; precio: number;
  descripcion: string; detalle: string; imagen: string;
  imagenFrontal: string; imagenDorso: string;
  stock: number; rating: number; resenas: number;
}
export interface Tabla {
  id: number; nombre: string; medida: string;
  imagen: string; imagenFrontal: string; imagenDorso: string; precio: number;
}
export interface Usuario {
  id: number; nombre: string; email: string; ciudad: string;
  nivel: string; avatar: string; cita: string; descripcion: string; imagen: string;
}
export interface Leyenda {
  id: number; nombre: string; apodo: string; pais: string; nacimiento: string;
  estilo: string; logros: string[]; descripcion: string; imagen: string; color: string;
}
export interface BlogPost {
  id: number; titulo: string; categoria: string; fecha: string; resumen: string; imagen: string;
}
export interface CartItem { producto: Producto; cantidad: number; }
export interface SkateData {
  productos: Producto[]; tablas: Tabla[]; usuarios: Usuario[];
  leyendas: Leyenda[]; blog: BlogPost[];
}
