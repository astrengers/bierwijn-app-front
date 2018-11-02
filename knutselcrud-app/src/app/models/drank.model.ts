import {Land} from "../landenlijst/land.model";

export abstract class Drank {
  id: number;
  naam: string;
  alcoholPercentage: number;
  merkNaam: string;
  land: Land;
  plaatje: any[];
}
