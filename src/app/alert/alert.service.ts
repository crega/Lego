import { Injectable } from '@angular/core'
import { Subject, Observable } from 'rxjs'

import { Alert, AlertType } from './alert'

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  private subject = new Subject<Alert>();

  getAlert(): Observable<Alert> {
    return this.subject.asObservable();
  }

  success(message: string){
    this.subject.next(new Alert(message, AlertType.Success));
  }

  error(message: string){
    this.subject.next(new Alert(message, AlertType.Error));
  }

  warning(message: string){
    this.subject.next(new Alert(message, AlertType.Warning));
  }

}
