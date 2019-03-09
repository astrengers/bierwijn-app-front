import {Land} from "../landenlijst/land.model";

export class Drank {
  id: number;
  naam: string;
  alcoholPercentage: number;
  merkNaam: string;
  land: Land;
  plaatje: File;
  beschrijving: string;
}
