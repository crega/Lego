import { Injectable } from '@angular/core';
import { Building } from 'src/app/buildings/building.model';
import { Subject } from 'rxjs';
import { Kocka } from '../shared/kocka.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable({
  providedIn: 'root'
})
export class BuildingsService {

  recipesChanged = new Subject<Building[]>();

  private building: Building[] = [
    new Building(
      'FIREHOUSE HEADQUARTERS',
      'What a hero truly needs!',
      // tslint:disable-next-line:max-line-length
      'https://sh-s7-live-s.legocdn.com/is/image/LEGO/75827?id=-krQR2&fmt=jpg&fit=constrain,1&wid=426&hei=426&qlt=80,1&op_sharpen=0&resMode=sharp2&op_usm=1,1,6,0&iccEmbed=0&printRes=72',
      'https://www.lego.com/biassets/bi/6164659.pdf',
      [
        new Kocka('4x2', 50),
        new Kocka('10x2', 25),
        new Kocka('20x2', 50),
        new Kocka('12x2', 50),
        new Kocka('8x2', 50),
        new Kocka('50x50', 4)
      ]),
    new Building( 'BIG BEN',
    'Tower of London',
    // tslint:disable-next-line:max-line-length
    'https://sh-s7-live-s.legocdn.com/is/image/LEGO/10253?id=-S4QH2&fmt=jpg&fit=constrain,1&wid=426&hei=426&qlt=80,1&op_sharpen=0&resMode=sharp2&op_usm=1,1,6,0&iccEmbed=0&printRes=72',
    'https://www.lego.com/biassets/bi/6192473.pdf',
    [
      new Kocka('4x2', 22),
      new Kocka('10x2', 42),
      new Kocka('20x2', 31),
      new Kocka('12x2', 44),
      new Kocka('8x2', 120),
      new Kocka('50x50', 2),
      new Kocka('25x25', 12)
    ])
  ];

  constructor(private slService: ShoppingListService) {}

  setBuildings(building: Building[]) {
    this.building = building;
    this.recipesChanged.next(this.building.slice());
  }

  getBuildings() {
    return this.building.slice();
  }

  getBuilding(index: number) {
    return this.building[index];
  }

  addBlocksToShoppingList(kocke: Kocka[]) {
    this.slService.addIngredients(kocke);
  }

  addBuilding(building: Building) {
    this.building.push(building);
    this.recipesChanged.next(this.building.slice());
  }

  updateBuilding(index: number, newBuilding: Building) {
    this.building[index] = newBuilding;
    this.recipesChanged.next(this.building.slice());
  }

  deleteBuilding(index: number) {
    this.building.splice(index, 1);
    this.recipesChanged.next(this.building.slice());
  }
}
