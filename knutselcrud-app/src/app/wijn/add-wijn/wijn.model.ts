import {Drank} from "../../algemeen/models/drank.model";

export class Wijn extends Drank {
  id: number;
  naam: string;
  alcoholPercentage: number;
  merkNaam: string;
  druif: string;
  soort: string;
  streek: string;
  kleur: string;
}
