import { Component, OnInit, Input } from '@angular/core';

import { Building } from '../../building.model';

@Component({
  selector: 'app-building-item',
  templateUrl: './building-item.component.html',

})
export class BuildingItemComponent implements OnInit {
  @Input() building: Building;
  @Input() index: number;

  ngOnInit() {
  }
}
