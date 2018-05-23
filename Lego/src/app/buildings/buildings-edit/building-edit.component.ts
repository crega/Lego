import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { BuildingsService } from '../buildings.service';



@Component({
  selector: 'app-building-edit',
  templateUrl: './building-edit.component.html',

})
export class BuildingEditComponent implements OnInit {
  id: number;
  editMode = false;
  buildingManualPath: string;
  buildingForm: FormGroup;

  constructor(private route: ActivatedRoute,
              private bS: BuildingsService,
              private router: Router) {
  }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.editMode = params['id'] != null;
          this.initForm();
        }
      );
  }

  onSubmit() {
    if (this.editMode) {
      this.bS.updateBuilding(this.id, this.buildingForm.value);
    } else {
      this.bS.addBuilding(this.buildingForm.value);
    }
    this.onCancel();
  }

  onAddkocka() {
    (<FormArray>this.buildingForm.get('kocke')).push(
      new FormGroup({
        'dimenzija': new FormControl(null, Validators.required),
        'kolicina': new FormControl(null, [
          Validators.required,
          Validators.pattern(/^[1-9]+[0-9]*$/)
        ])
      })
    );
  }

  onDeletekocka(index: number) {
    (<FormArray>this.buildingForm.get('kocke')).removeAt(index);
  }
  onDeleteComment(index: number) {
    (<FormArray>this.buildingForm.get('comments')).removeAt(index);
  }

  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  jumpOut() {
      window.open(this.buildingManualPath);
  }

  private initForm() {
    let buildingName = '';
    let buildingImagePath = '';
    let buildingDescription = '';
    let buildingManualPath = '';
    const buildingKocke = new FormArray([]);
    const buildingComments = new FormArray([]);

    if (this.editMode) {
      const building = this.bS.getBuilding(this.id);
      buildingName = building.name;
      buildingImagePath = building.imagePath;
      buildingDescription = building.description;
      buildingManualPath = building.manualPath;
      this.buildingManualPath = buildingManualPath;
      if (building['kocke']) {
        for (const kocka of building.kocke) {
          buildingKocke.push(
            new FormGroup({
              'dimenzija': new FormControl(kocka.dimenzija, Validators.required),
              'kolicina': new FormControl(kocka.kolicina, [
                Validators.required,
                Validators.pattern(/^[1-9]+[0-9]*$/)
              ])
            })
          );
        }
      }
      if (building['comments']) {
        for (const comment of building.comments) {
          buildingComments.push(
            new FormGroup({
              'userEmail': new FormControl(comment.userEmail, Validators.required),
              'text': new FormControl(comment.text, [
                Validators.required,
              ])
            })
          );
        }
      }


    }
    console.log(buildingManualPath);
    this.buildingForm = new FormGroup({
      'name': new FormControl(buildingName, Validators.required),
      'imagePath': new FormControl(buildingImagePath, Validators.required),
      'description': new FormControl(buildingDescription, Validators.required),
      'manualPath' : new FormControl(buildingManualPath, Validators.required),
      'kocke': buildingKocke,
      'comments': buildingComments
    });
    console.log(this.buildingForm.get('kocke'));
    console.log(this.buildingForm.get('comments'));
  }

}
