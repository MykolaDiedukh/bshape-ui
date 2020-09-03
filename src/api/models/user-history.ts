/* tslint:disable */
import { BodyType } from './body-type';
import { Meal } from './meal';
import { Target } from './target';
import { TypeOfMeal } from './type-of-meal';
import { User } from './user';
export interface UserHistory {
  alcoholEaten?: number;
  alcoholSchedule?: number;
  bodyTypes?: BodyType;
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
  meals?: Array<Meal>;
  proteinEaten?: number;
  proteinSchedule?: number;
  targets?: Target;
  typeOfMeals?: TypeOfMeal;
  users?: User;
  weight?: number;
}
