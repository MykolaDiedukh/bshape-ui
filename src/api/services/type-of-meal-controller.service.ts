/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { TypeOfMealDTO } from '../models/type-of-meal-dto';
import { TypeOfMealID } from '../models/type-of-meal-id';
import { TypeOfMeal } from '../models/type-of-meal';

/**
 * Type Of Meal Controller
 */
@Injectable({
  providedIn: 'root',
})
class TypeOfMealControllerService extends __BaseService {
  static readonly findAllUsingGET4Path = '/typeOfMeals';
  static readonly createUsingPOST4Path = '/typeOfMeals';
  static readonly findByIdUsingGET4Path = '/typeOfMeals/{id}';
  static readonly updateUsingPUT4Path = '/typeOfMeals/{id}';
  static readonly deleteUsingDELETE4Path = '/typeOfMeals/{id}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * findAll
   * @return OK
   */
  findAllUsingGET4Response(): __Observable<__StrictHttpResponse<Array<TypeOfMealDTO>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/typeOfMeals`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<TypeOfMealDTO>>;
      })
    );
  }
  /**
   * findAll
   * @return OK
   */
  findAllUsingGET4(): __Observable<Array<TypeOfMealDTO>> {
    return this.findAllUsingGET4Response().pipe(
      __map(_r => _r.body as Array<TypeOfMealDTO>)
    );
  }

  /**
   * create
   * @param typeOfMealDTO typeOfMealDTO
   * @return OK
   */
  createUsingPOST4Response(typeOfMealDTO: TypeOfMealDTO): __Observable<__StrictHttpResponse<TypeOfMealID>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = typeOfMealDTO;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/typeOfMeals`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<TypeOfMealID>;
      })
    );
  }
  /**
   * create
   * @param typeOfMealDTO typeOfMealDTO
   * @return OK
   */
  createUsingPOST4(typeOfMealDTO: TypeOfMealDTO): __Observable<TypeOfMealID> {
    return this.createUsingPOST4Response(typeOfMealDTO).pipe(
      __map(_r => _r.body as TypeOfMealID)
    );
  }

  /**
   * findById
   * @param id id
   * @return OK
   */
  findByIdUsingGET4Response(id: number): __Observable<__StrictHttpResponse<TypeOfMealDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/typeOfMeals/${encodeURIComponent(id)}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<TypeOfMealDTO>;
      })
    );
  }
  /**
   * findById
   * @param id id
   * @return OK
   */
  findByIdUsingGET4(id: number): __Observable<TypeOfMealDTO> {
    return this.findByIdUsingGET4Response(id).pipe(
      __map(_r => _r.body as TypeOfMealDTO)
    );
  }

  /**
   * update
   * @param params The `TypeOfMealControllerService.UpdateUsingPUT4Params` containing the following parameters:
   *
   * - `metypeOfMealDTOlDTO`: metypeOfMealDTOlDTO
   *
   * - `id`: id
   *
   * @return OK
   */
  updateUsingPUT4Response(params: TypeOfMealControllerService.UpdateUsingPUT4Params): __Observable<__StrictHttpResponse<TypeOfMealDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = params.metypeOfMealDTOlDTO;

    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/typeOfMeals/${encodeURIComponent(params.id)}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<TypeOfMealDTO>;
      })
    );
  }
  /**
   * update
   * @param params The `TypeOfMealControllerService.UpdateUsingPUT4Params` containing the following parameters:
   *
   * - `metypeOfMealDTOlDTO`: metypeOfMealDTOlDTO
   *
   * - `id`: id
   *
   * @return OK
   */
  updateUsingPUT4(params: TypeOfMealControllerService.UpdateUsingPUT4Params): __Observable<TypeOfMealDTO> {
    return this.updateUsingPUT4Response(params).pipe(
      __map(_r => _r.body as TypeOfMealDTO)
    );
  }

  /**
   * delete
   * @param id id
   * @return OK
   */
  deleteUsingDELETE4Response(id: number): __Observable<__StrictHttpResponse<TypeOfMeal>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/typeOfMeals/${encodeURIComponent(id)}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<TypeOfMeal>;
      })
    );
  }
  /**
   * delete
   * @param id id
   * @return OK
   */
  deleteUsingDELETE4(id: number): __Observable<TypeOfMeal> {
    return this.deleteUsingDELETE4Response(id).pipe(
      __map(_r => _r.body as TypeOfMeal)
    );
  }
}

module TypeOfMealControllerService {

  /**
   * Parameters for updateUsingPUT4
   */
  export interface UpdateUsingPUT4Params {

    /**
     * metypeOfMealDTOlDTO
     */
    metypeOfMealDTOlDTO: TypeOfMealDTO;

    /**
     * id
     */
    id: number;
  }
}

export { TypeOfMealControllerService }
