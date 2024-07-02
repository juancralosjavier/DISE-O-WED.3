import { Component } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  productos = [
    { nombre: 'Producto A', precio: 100, fecha: new Date(2024, 6, 1) },
    { nombre: 'Producto B', precio: 150, fecha: new Date(2023, 10, 15) },
    { nombre: 'Producto C', precio: 80, fecha: new Date(2024, 2, 5) }
  ];
}
