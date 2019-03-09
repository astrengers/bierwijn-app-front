import {Drank} from "../algemeen/models/drank.model";

export class Bier extends Drank{
  brouwerij: string;
  bierSoort: string;
  kleur: string;
}
