import { Injectable } from '@angular/core'
import { Router } from '@angular/router'
import { Subject } from 'rxjs'

import { Alert, AlertType } from './alert'

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  private alerts: Alert[] = [];

  getAlert(id: string){
    return this.alerts[id];
  }

  success(message: string){
    this.alerts.push(new Alert(message, AlertType.Success));
  }

  error(message: string){
    this.alerts.push(new Alert(message, AlertType.Error));
  }

  warning(message: string){
    this.alerts.push(new Alert(message, AlertType.Warning));
  }

}
