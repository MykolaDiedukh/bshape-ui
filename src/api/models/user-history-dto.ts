/* tslint:disable */
import { BodyTypeDTO } from './body-type-dto';
import { MealDTO } from './meal-dto';
import { TargetDTO } from './target-dto';
import { TypeOfMealDTO } from './type-of-meal-dto';
import { UserDTO } from './user-dto';
export interface UserHistoryDTO {
  alcoholEaten?: number;
  alcoholSchedule?: number;
  bodyTypeDTO?: BodyTypeDTO;
  caloriesEaten?: number;
  caloriesSchedule?: number;
  carbohydratesEaten?: number;
  carbohydratesSchedule?: number;
  date?: string;
  fatEaten?: number;
  fatSchedule?: number;
  gigajouleEaten?: number;
  gigajouleSchedule?: number;
  id?: number;
  mealDTO?: Array<MealDTO>;
  proteinEaten?: number;
  proteinSchedule?: number;
  targetDTO?: TargetDTO;
  typeOfMealDTO?: TypeOfMealDTO;
  userDTO?: UserDTO;
  weight?: number;
}
