/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { TargetDTO } from '../models/target-dto';
import { TargetID } from '../models/target-id';
import { Target } from '../models/target';

/**
 * Target Controller
 */
@Injectable({
  providedIn: 'root',
})
class TargetControllerService extends __BaseService {
  static readonly findAllUsingGET3Path = '/target';
  static readonly createUsingPOST3Path = '/target';
  static readonly findByIdUsingGET3Path = '/target/{id}';
  static readonly updateUsingPUT3Path = '/target/{id}';
  static readonly deleteUsingDELETE3Path = '/target/{id}';

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
  findAllUsingGET3Response(): __Observable<__StrictHttpResponse<Array<TargetDTO>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/target`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<TargetDTO>>;
      })
    );
  }
  /**
   * findAll
   * @return OK
   */
  findAllUsingGET3(): __Observable<Array<TargetDTO>> {
    return this.findAllUsingGET3Response().pipe(
      __map(_r => _r.body as Array<TargetDTO>)
    );
  }

  /**
   * create
   * @param targetDTO targetDTO
   * @return OK
   */
  createUsingPOST3Response(targetDTO: TargetDTO): __Observable<__StrictHttpResponse<TargetID>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = targetDTO;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/target`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<TargetID>;
      })
    );
  }
  /**
   * create
   * @param targetDTO targetDTO
   * @return OK
   */
  createUsingPOST3(targetDTO: TargetDTO): __Observable<TargetID> {
    return this.createUsingPOST3Response(targetDTO).pipe(
      __map(_r => _r.body as TargetID)
    );
  }

  /**
   * findById
   * @param id id
   * @return OK
   */
  findByIdUsingGET3Response(id: number): __Observable<__StrictHttpResponse<TargetDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/target/${encodeURIComponent(id)}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<TargetDTO>;
      })
    );
  }
  /**
   * findById
   * @param id id
   * @return OK
   */
  findByIdUsingGET3(id: number): __Observable<TargetDTO> {
    return this.findByIdUsingGET3Response(id).pipe(
      __map(_r => _r.body as TargetDTO)
    );
  }

  /**
   * update
   * @param params The `TargetControllerService.UpdateUsingPUT3Params` containing the following parameters:
   *
   * - `targetDTO`: targetDTO
   *
   * - `id`: id
   *
   * @return OK
   */
  updateUsingPUT3Response(params: TargetControllerService.UpdateUsingPUT3Params): __Observable<__StrictHttpResponse<TargetDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = params.targetDTO;

    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/target/${encodeURIComponent(params.id)}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<TargetDTO>;
      })
    );
  }
  /**
   * update
   * @param params The `TargetControllerService.UpdateUsingPUT3Params` containing the following parameters:
   *
   * - `targetDTO`: targetDTO
   *
   * - `id`: id
   *
   * @return OK
   */
  updateUsingPUT3(params: TargetControllerService.UpdateUsingPUT3Params): __Observable<TargetDTO> {
    return this.updateUsingPUT3Response(params).pipe(
      __map(_r => _r.body as TargetDTO)
    );
  }

  /**
   * delete
   * @param id id
   * @return OK
   */
  deleteUsingDELETE3Response(id: number): __Observable<__StrictHttpResponse<Target>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/target/${encodeURIComponent(id)}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Target>;
      })
    );
  }
  /**
   * delete
   * @param id id
   * @return OK
   */
  deleteUsingDELETE3(id: number): __Observable<Target> {
    return this.deleteUsingDELETE3Response(id).pipe(
      __map(_r => _r.body as Target)
    );
  }
}

module TargetControllerService {

  /**
   * Parameters for updateUsingPUT3
   */
  export interface UpdateUsingPUT3Params {

    /**
     * targetDTO
     */
    targetDTO: TargetDTO;

    /**
     * id
     */
    id: number;
  }
}

export { TargetControllerService }
