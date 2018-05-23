import { Kocka } from '../shared/kocka.model';
import { BComment } from '../comment/comment.component.model';

export class Building {
  public name: string;
  public description: string;
  public imagePath: string;
  public manualPath: string;
  public kocke: Kocka[];
  public comments: BComment [];

  constructor( name: string, desc: string, imagePath: string, manualPath: string , kocke: Kocka[] , comments: BComment[]) {

    this.name = name;
    this.description = desc;
    this.imagePath = imagePath;
    this.manualPath = manualPath;
    this.kocke = kocke;
    this.comments = comments;
  }
}
