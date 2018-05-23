import { Component, OnInit, Input } from '@angular/core';
import { BComment } from './comment.component.model';
import * as firebase from 'firebase';
import { BuildingsService } from '../buildings/buildings.service';
import { Building } from '../buildings/building.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  @Input () idBuilding: number;
  email: string;
  text: string;
  comment: BComment;
  building: Building;
  commendForm: FormGroup;
  constructor(private bs: BuildingsService) {
    this.email =   firebase.auth().currentUser.email;
    this.text = '';
    this.comment = new BComment(this.email, this.text);
  }

  ngOnInit() {
    this.commendForm = new FormGroup ({
      'email' : new FormControl(this.email, Validators.email),
      'text' : new FormControl (this.text, Validators.required)
    });
  }

  saveComment() {
    console.log(this.commendForm);
    this.building = this.bs.getBuilding(this.idBuilding);
    const c = {
              'text' :  this.commendForm.value.text,
              'timestamp': this.comment.timestamp,
              'userEmail': this.email ,
              };
    this.building.comments.push(c);
    this.bs.updateBuilding(this.idBuilding, this.building);
  }


}
