import { Kocka } from '../shared/kocka.model';

export class Building {
  public name: string;
  public description: string;
  public imagePath: string;
  public manualPath: string;
  public kocke: Kocka[];

  constructor(name: string, desc: string, imagePath: string, manualPath: string , kocke: Kocka[]) {
    this.name = name;
    this.description = desc;
    this.imagePath = imagePath;
    this.manualPath = manualPath;
    this.kocke = kocke;
  }
}
