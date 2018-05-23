import { Injectable } from '@angular/core';
import { Kocka } from '../shared/kocka.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  kockaChanged = new Subject<Kocka[]>();
  startedEditing = new Subject<number>();
  private kocke: Kocka[] = [
    new Kocka('10x2', 5),
    new Kocka('4x2', 10),
  ];

  getKocke() {
    return this.kocke.slice();
  }

  getKocka(index: number) {
    return this.kocke[index];
  }

  addKocka(ingredient: Kocka) {
    this.kocke.push(ingredient);
    this.kockaChanged.next(this.kocke.slice());
  }

  addKocke(ingredients: Kocka[]) {
    this.kocke.push(...ingredients);
    this.kockaChanged.next(this.kocke.slice());
  }

  updateKocka(index: number, newIngredient: Kocka) {
    this.kocke[index] = newIngredient;
    this.kockaChanged.next(this.kocke.slice());
  }

  deleteKocka(index: number) {
    this.kocke.splice(index, 1);
    this.kockaChanged.next(this.kocke.slice());
  }
}
