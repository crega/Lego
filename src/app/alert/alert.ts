export class Alert{
  type: AlertType;
  message: string;
  
  constructor(message: string, type: AlertType){
    this.type = type;
    this.message = message;
  }
}

export enum AlertType{
  Success,
  Error,
  Warning
}
