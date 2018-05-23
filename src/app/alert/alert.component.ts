import { Component, OnInit, Input } from '@angular/core'

import { Alert, AlertType } from './alert'
import { AlertService } from './alert.service'

@Component({
  selector: 'app-alert',
  templateUrl: 'alert.component.html'
})

export class AlertComponent implements OnInit {
  @Input() id: number;

  alerts: Alert[] = [];

  constructor (private alertService: AlertService) {}

  ngOnInit(){
    this.alertService.getAlert().subscribe((alert: Alert) => {
        this.alerts.push(alert);
      }
    );
  }

  removeAlert(alert: Alert) {
    this.alerts = this.alerts.filter(a => a != alert)
  }

  cssClass(alert: Alert) {
    switch (alert.type) {
      case AlertType.Success:
        return 'alert alert-success';
      case AlertType.Error:
        return 'alert alert-error';
      case AlertType.Warning:
        return 'alert alert-warning';
    }
  }

}
