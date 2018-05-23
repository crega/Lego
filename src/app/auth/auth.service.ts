import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { Router } from '@angular/router';

import { AlertService } from '../alert/alert.service'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  token: string;

  constructor(private router: Router,
              private alertService: AlertService) {}

  signupUser(email: string, password: string) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .catch(error =>{
        this.alertService.error(error);
        console.log(error)   
    });

    this.alertService.success('Successfully signed up!');
  }

  signinUser(email: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(
        response => {
          this.router.navigate(['/']);
          this.alertService.success('Successfully logged in!');
          firebase.auth().currentUser.getIdToken()
            .then(
              (token: string) => this.token = token
            );
        }
      )
      .catch(error => {
        this.alertService.error(error);
        console.log(error)
      });
  }

  logout() {
    firebase.auth().signOut();
    this.alertService.success('Successfully logged out!');
    this.token = null;
  }

  getToken() {
    firebase.auth().currentUser.getIdToken()
      .then(
        (token: string) => this.token = token
      );
    return this.token;
  }

  isAuthenticated() {
    return this.token != null;
  }
}
