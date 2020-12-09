import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 1, name: 'DeadPool' },
      { id: 2, name: 'Dr. Estranho' },
      { id: 3, name: 'Shiryu de Dragão' },
      { id: 4, name: 'Flash' },
      { id: 5, name: 'Mulher Maravilha' },
      { id: 6, name: 'Mário' },
      { id: 7, name: 'Goku' },
      { id: 8, name: 'Ikki de Fênix' },
      { id: 9, name: 'Viúva Negra' },
      { id: 10, name: 'Lanterna Verde' }
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}