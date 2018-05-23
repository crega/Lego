import { Component, OnInit, OnDestroy } from '@angular/core';
import {Subscription} from 'rxjs';

import { Kocka } from '../shared/kocka.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',

})
export class ShoppingListComponent implements OnInit, OnDestroy {
  kocke: Kocka[];
  private subscription: Subscription;

  constructor(private slService: ShoppingListService) { }

  ngOnInit() {
    this.kocke = this.slService.getKocke();
    this.subscription = this.slService.kockaChanged
      .subscribe(
        (kocke: Kocka[]) => {
          this.kocke = kocke;
        }
      );
  }

  onEditItem(index: number) {
    this.slService.startedEditing.next(index);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
