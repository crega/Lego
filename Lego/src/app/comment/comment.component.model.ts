

export class BComment {
  public timestamp: Date;
  public userEmail: string;
  public text: string;

  constructor(userEmail: string, text: string) {
   this.timestamp = new Date();
   this.userEmail = userEmail;
   this.text = text;
  }
}
