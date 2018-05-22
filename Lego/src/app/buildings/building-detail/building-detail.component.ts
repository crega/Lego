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

  constructor(private bS: BuildingsService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.building = this.bS.getBuilding(this.id);
        }
      );
  }

  onAddToShoppingList() {
    this.bS.addBlocksToShoppingList(this.building.kocke);
  }

  onEditRecipe() {
    this.router.navigate(['edit'], {relativeTo: this.route});

  }

  onDeleteRecipe() {
    this.bS.deleteBuilding(this.id);
    this.router.navigate(['/buildings']);
  }

}
