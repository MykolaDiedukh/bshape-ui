/* tslint:disable */
import { Product } from './product';
export interface Meal {
  id?: number;
  mealName?: string;
  products?: Array<Product>;
}
