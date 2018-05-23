import { Component, OnInit } from '@angular/core';
import { Building } from '../building.model';
import { BuildingsService } from '../buildings.service';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-building-detail',
  templateUrl: './building-detail.component.html',
  styleUrls: ['./building-detail.component.css']
})
export class BuildingDetailComponent implements OnInit {
  building: Building;
  id: number;
  flag: boolean;
  constructor(private bS: BuildingsService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.flag = false;
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.building = this.bS.getBuilding(this.id);
        }
      );
  }

  addCommentClicked() {
    this.flag = true;

  }

  onAddToShoppingList() {
    this.bS.addBlocksToShoppingList(this.building.kocke);
  }

  onEditRecipe() {
    this.router.navigate(['edit'], {relativeTo: this.route});

  }
  jumpOut() {
    window.open(this.building.manualPath);
}

  onDeleteRecipe() {
    this.bS.deleteBuilding(this.id);
    this.router.navigate(['/buildings']);
  }

}
