import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators/';
import { BuildingsService } from '../buildings/buildings.service';
import { AuthService } from 'src/app/auth/auth.service';
import { Building } from '../buildings/building.model';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {
  constructor(private http: HttpClient,
    private bs: BuildingsService,
    private authService: AuthService) {
  }

  storeBuildings() {
    const token = this.authService.getToken();

    return this.http.put('https://legokartasi.firebaseio.com/buildings.json?auth=' + token, this.bs.getBuildings());
  }

  getBuildings() {
    const token = this.authService.getToken();

    this.http.get<Building[]>('https://legokartasi.firebaseio.com/buildings.json?auth=' + token).subscribe(
      data => {
        const builds: Building[] = data;
        console.log(builds);
        if (builds !== null) {
        builds.forEach(element => {
          if (!element['kocke']) {
              element['kocke'] = [];
          }
        });
      }
        this.bs.setBuildings(builds);
      }
    );
  }
}

