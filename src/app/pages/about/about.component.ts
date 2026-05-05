import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './about.component.html'
})
export class AboutComponent {
  equipo = [
    { nombre: 'Akira Yamamoto', rol: 'Fundador & CEO', ciudad: 'Tokyo, Japan', img: 'assets/img/5e35eae656748241af150b054f7d9692.jpg', bio: 'Skater profesional con mas de 15 anos de experiencia. Fundó SkateSet con la vision de democratizar el acceso a equipamiento de calidad.' },
    { nombre: 'Kenji Nakamura', rol: 'Director de Producto', ciudad: 'Osaka, Japan', img: 'assets/img/Gemini_Generated_Image_pjg5u7pjg5u7pjg5.png', bio: 'Experto en seleccion y curado de equipamiento. Su ojo critico garantiza que cada producto en el catalogo supere los mas altos estandares.' },
    { nombre: 'Yuki Tanaka', rol: 'Directora Creativa', ciudad: 'Shibuya, Tokyo', img: 'assets/img/Gemini_Generated_Image_oez5acoez5acoez5.png', bio: 'Diseñadora y skater. Fusiona la estetica urbana de Tokyo con la funcionalidad que exige el deporte de alto rendimiento.' }
  ];

  valores = [
    { icono: 'fa-solid fa-trophy', titulo: 'Calidad sin Compromiso', desc: 'Solo trabajamos con marcas que han demostrado su valor en las calles y competencias internacionales.' },
    { icono: 'fa-solid fa-users', titulo: 'Comunidad Primero', desc: 'Somos parte de la misma comunidad que servimos. Cada decision la tomamos pensando en el skater.' },
    { icono: 'fa-solid fa-leaf', titulo: 'Responsabilidad', desc: 'Trabajamos con fabricantes que respetan practicas sostenibles y condiciones laborales justas.' },
    { icono: 'fa-solid fa-bolt', titulo: 'Innovacion Constante', desc: 'Siempre buscando los ultimos avances en materiales y diseno para llevarte el mejor equipo.' }
  ];

  hitos = [
    { anio: '2019', evento: 'Fundacion en Tokyo', desc: 'Abrimos nuestra primera tienda en Shibuya con 50 productos.' },
    { anio: '2020', evento: 'Expansion Online', desc: 'Lanzamos nuestra plataforma digital llegando a toda Asia.' },
    { anio: '2022', evento: 'Mercado Global', desc: 'Comenzamos envios internacionales a mas de 30 paises.' },
    { anio: '2024', evento: '2000 Clientes', desc: 'Superamos los 2000 clientes activos en todo el mundo.' },
    { anio: '2025', evento: 'Nueva Plataforma', desc: 'Lanzamos nuestra web Angular 19 con experiencia renovada.' }
  ];
}
