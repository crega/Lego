import { Injectable } from '@angular/core';
import { Kocka } from '../shared/kocka.model';
import { Subject } from 'rxjs';
import { AlertService } from '../alert/alert.service'

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

  constructor (private alertService: AlertService) {}

  getKocke() {
    return this.kocke.slice();
  }

  getBlock(index: number) {
    return this.kocke[index];
  }

  addBlock(block: Kocka) {
    this.kocke.push(block);
    this.kockaChanged.next(this.kocke.slice());
    this.alertService.success('Successfully added blocks!');
  }

  addBlocks(blocks: Kocka[]) {
    this.kocke.push(...blocks);
    this.kockaChanged.next(this.kocke.slice());
  }

  updateBlock(index: number, newBlock: Kocka) {
    this.kocke[index] = newBlock;
    this.kockaChanged.next(this.kocke.slice());
    this.alertService.success('Successfully updated blocks!');
  }

  deleteBlock(index: number) {
    this.kocke.splice(index, 1);
    this.kockaChanged.next(this.kocke.slice());
    this.alertService.success('Successfully deleted blocks!');  
  }
}
