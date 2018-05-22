import { Kocka } from '../shared/kocka.model';

export class Building {
  public name: string;
  public description: string;
  public imagePath: string;
  public instructionURL: string;
  public kocke: Kocka[];

  constructor(name: string, desc: string, imagePath: string, manualPath: string , kocke: Kocka[]) {
    this.name = name;
    this.description = desc;
    this.imagePath = imagePath;
    this.instructionURL = manualPath;
    this.kocke = kocke;
  }
}
