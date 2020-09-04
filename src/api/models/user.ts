/* tslint:disable */
import { BodyType } from './body-type';
import { Role } from './role';
export interface User {
  age?: number;
  bodyType?: BodyType;
  email?: string;
  firstName?: string;
  height?: number;
  id?: number;
  lastName?: string;
  password?: string;
  roles?: Array<Role>;
  sex?: number;
  weight?: number;
}
