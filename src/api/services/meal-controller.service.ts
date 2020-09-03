/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { MealDTO } from '../models/meal-dto';
import { MealID } from '../models/meal-id';
import { Meal } from '../models/meal';

/**
 * Meal Controller
 */
@Injectable({
  providedIn: 'root',
})
class MealControllerService extends __BaseService {
  static readonly findAllUsingGET1Path = '/meal';
  static readonly createUsingPOST1Path = '/meal';
  static readonly findByIdUsingGET1Path = '/meal/{id}';
  static readonly updateUsingPUT1Path = '/meal/{id}';
  static readonly deleteUsingDELETE1Path = '/meal/{id}';

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
  findAllUsingGET1Response(): __Observable<__StrictHttpResponse<Array<MealDTO>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/meal`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<MealDTO>>;
      })
    );
  }
  /**
   * findAll
   * @return OK
   */
  findAllUsingGET1(): __Observable<Array<MealDTO>> {
    return this.findAllUsingGET1Response().pipe(
      __map(_r => _r.body as Array<MealDTO>)
    );
  }

  /**
   * create
   * @param mealDTO mealDTO
   * @return OK
   */
  createUsingPOST1Response(mealDTO: MealDTO): __Observable<__StrictHttpResponse<MealID>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = mealDTO;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/meal`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<MealID>;
      })
    );
  }
  /**
   * create
   * @param mealDTO mealDTO
   * @return OK
   */
  createUsingPOST1(mealDTO: MealDTO): __Observable<MealID> {
    return this.createUsingPOST1Response(mealDTO).pipe(
      __map(_r => _r.body as MealID)
    );
  }

  /**
   * findById
   * @param id id
   * @return OK
   */
  findByIdUsingGET1Response(id: number): __Observable<__StrictHttpResponse<MealDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/meal/${encodeURIComponent(id)}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<MealDTO>;
      })
    );
  }
  /**
   * findById
   * @param id id
   * @return OK
   */
  findByIdUsingGET1(id: number): __Observable<MealDTO> {
    return this.findByIdUsingGET1Response(id).pipe(
      __map(_r => _r.body as MealDTO)
    );
  }

  /**
   * update
   * @param params The `MealControllerService.UpdateUsingPUT1Params` containing the following parameters:
   *
   * - `mealDTO`: mealDTO
   *
   * - `id`: id
   *
   * @return OK
   */
  updateUsingPUT1Response(params: MealControllerService.UpdateUsingPUT1Params): __Observable<__StrictHttpResponse<MealDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = params.mealDTO;

    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/meal/${encodeURIComponent(params.id)}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<MealDTO>;
      })
    );
  }
  /**
   * update
   * @param params The `MealControllerService.UpdateUsingPUT1Params` containing the following parameters:
   *
   * - `mealDTO`: mealDTO
   *
   * - `id`: id
   *
   * @return OK
   */
  updateUsingPUT1(params: MealControllerService.UpdateUsingPUT1Params): __Observable<MealDTO> {
    return this.updateUsingPUT1Response(params).pipe(
      __map(_r => _r.body as MealDTO)
    );
  }

  /**
   * delete
   * @param id id
   * @return OK
   */
  deleteUsingDELETE1Response(id: number): __Observable<__StrictHttpResponse<Meal>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/meal/${encodeURIComponent(id)}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Meal>;
      })
    );
  }
  /**
   * delete
   * @param id id
   * @return OK
   */
  deleteUsingDELETE1(id: number): __Observable<Meal> {
    return this.deleteUsingDELETE1Response(id).pipe(
      __map(_r => _r.body as Meal)
    );
  }
}

module MealControllerService {

  /**
   * Parameters for updateUsingPUT1
   */
  export interface UpdateUsingPUT1Params {

    /**
     * mealDTO
     */
    mealDTO: MealDTO;

    /**
     * id
     */
    id: number;
  }
}

export { MealControllerService }
