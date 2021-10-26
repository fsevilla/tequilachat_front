import { Injectable } from '@angular/core';

import { Book } from '../datatypes/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private libros:Book[] = [
    { title: 'Cementerio de Animales'},
    { title: 'Percy Jackson'},
    { title: 'El Libro Troll'},
    { title: 'El camino de los Reyes'},
  ];

  constructor() { }

  getBooks(): Promise<any> {
    return new Promise((success, error) => {
      setTimeout(() => {
        success(this.libros);
      }, 2000);
    });
  }
}
