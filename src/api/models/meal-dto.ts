/* tslint:disable */
import { ProductDTO } from './product-dto';
export interface MealDTO {
  id?: number;
  mealName?: string;
  productDTO?: Array<ProductDTO>;
}
