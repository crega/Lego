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

  storeRecipes() {
    const token = this.authService.getToken();

    return this.http.put('https://legokartasi.firebaseio.com/buildings.json?auth=' + token, this.bs.getBuildings());
  }

  getRecipes() {
    const token = this.authService.getToken();

    // this.http.get('https://legokartasi.firebaseio.com/buildings.json?auth=' + token)
    //   .map(
    //     (response: Response) => {
    //       const buildings: Building[] = response.json();
    //       for (const building of buildings) {
    //         if (!building['kocke']) {
    //           recipe['kocke'] = [];
    //         }
    //       }
    //       return buildings;
    //     }
    //   )
    //   .subscribe(
    //     (buildings: Building[]) => {
    //       this.bs.setBuildings(buildings);
    //     }
    //   );
    this.http.get<Building[]>('https://legokartasi.firebaseio.com/buildings.json?auth=' + token).subscribe(
      data => {
        const builds: Building[] = data;
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

