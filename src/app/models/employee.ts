import { ValueFromArray } from "rxjs";

export interface Employee {
  id: number;
  title: string;
  description: string;
  date: string;
  status: any[];
  category: any[];
}
