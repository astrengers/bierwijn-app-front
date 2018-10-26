import {Drank} from "../models/drank.model";

export class Wijn extends Drank {
  id: number;
  naam: string;
  alcoholPercentage: number;
  merkNaam: string;
}
