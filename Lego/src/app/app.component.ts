import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedFeature = 'building';

  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'AIzaSyCQmOfaVLtjSH3GRpP0aU2Ksa_rO4UiAeg',
      authDomain: 'legokartasi.firebaseapp.com',
      databaseURL: 'https://legokartasi.firebaseio.com',
      projectId: 'legokartasi',
      storageBucket: 'legokartasi.appspot.com',
      messagingSenderId: '1065926576005'
    });
  }

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}

