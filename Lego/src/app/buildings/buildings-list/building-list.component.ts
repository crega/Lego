import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { Building } from '../building.model';
import { BuildingsService } from '../buildings.service';

@Component({
  selector: 'app-building-list',
  templateUrl: './building-list.component.html',

})
export class BuildingListComponent implements OnInit, OnDestroy {
  buildings: Building[];
  subscription: Subscription;

  constructor(private bs: BuildingsService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.subscription = this.bs.buildingsChanged
      .subscribe(
        (buildings: Building[]) => {
          this.buildings = buildings;
          console.log(this.buildings);
        }
      );
    this.buildings = this.bs.getBuildings();
  }

  onNewRecipe() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
