import {Drank} from "../models/drank.model";

export class Review {
  id: number;
  drank: Drank;
  cijfer: number;
  gebruiker: string;
  reviewTekst: string;
}
