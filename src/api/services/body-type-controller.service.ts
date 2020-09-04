/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { BodyTypeDTO } from '../models/body-type-dto';
import { BodyTypeID } from '../models/body-type-id';
import { BodyType } from '../models/body-type';

/**
 * Body Type Controller
 */
@Injectable({
  providedIn: 'root',
})
class BodyTypeControllerService extends __BaseService {
  static readonly findAllUsingGETPath = '/bodyType';
  static readonly createUsingPOSTPath = '/bodyType';
  static readonly findByIdUsingGETPath = '/bodyType/{id}';
  static readonly updateUsingPUTPath = '/bodyType/{id}';
  static readonly deleteUsingDELETEPath = '/bodyType/{id}';

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
  findAllUsingGETResponse(): __Observable<__StrictHttpResponse<Array<BodyTypeDTO>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/bodyType`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<BodyTypeDTO>>;
      })
    );
  }
  /**
   * findAll
   * @return OK
   */
  findAllUsingGET(): __Observable<Array<BodyTypeDTO>> {
    return this.findAllUsingGETResponse().pipe(
      __map(_r => _r.body as Array<BodyTypeDTO>)
    );
  }

  /**
   * create
   * @param bodyTypeDTO bodyTypeDTO
   * @return OK
   */
  createUsingPOSTResponse(bodyTypeDTO: BodyTypeDTO): __Observable<__StrictHttpResponse<BodyTypeID>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = bodyTypeDTO;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/bodyType`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<BodyTypeID>;
      })
    );
  }
  /**
   * create
   * @param bodyTypeDTO bodyTypeDTO
   * @return OK
   */
  createUsingPOST(bodyTypeDTO: BodyTypeDTO): __Observable<BodyTypeID> {
    return this.createUsingPOSTResponse(bodyTypeDTO).pipe(
      __map(_r => _r.body as BodyTypeID)
    );
  }

  /**
   * findById
   * @param id id
   * @return OK
   */
  findByIdUsingGETResponse(id: number): __Observable<__StrictHttpResponse<BodyTypeDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/bodyType/${encodeURIComponent(id)}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<BodyTypeDTO>;
      })
    );
  }
  /**
   * findById
   * @param id id
   * @return OK
   */
  findByIdUsingGET(id: number): __Observable<BodyTypeDTO> {
    return this.findByIdUsingGETResponse(id).pipe(
      __map(_r => _r.body as BodyTypeDTO)
    );
  }

  /**
   * update
   * @param params The `BodyTypeControllerService.UpdateUsingPUTParams` containing the following parameters:
   *
   * - `id`: id
   *
   * - `bodyTypeDTO`: bodyTypeDTO
   *
   * @return OK
   */
  updateUsingPUTResponse(params: BodyTypeControllerService.UpdateUsingPUTParams): __Observable<__StrictHttpResponse<BodyTypeDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.bodyTypeDTO;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/bodyType/${encodeURIComponent(params.id)}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<BodyTypeDTO>;
      })
    );
  }
  /**
   * update
   * @param params The `BodyTypeControllerService.UpdateUsingPUTParams` containing the following parameters:
   *
   * - `id`: id
   *
   * - `bodyTypeDTO`: bodyTypeDTO
   *
   * @return OK
   */
  updateUsingPUT(params: BodyTypeControllerService.UpdateUsingPUTParams): __Observable<BodyTypeDTO> {
    return this.updateUsingPUTResponse(params).pipe(
      __map(_r => _r.body as BodyTypeDTO)
    );
  }

  /**
   * delete
   * @param id id
   * @return OK
   */
  deleteUsingDELETEResponse(id: number): __Observable<__StrictHttpResponse<BodyType>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/bodyType/${encodeURIComponent(id)}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<BodyType>;
      })
    );
  }
  /**
   * delete
   * @param id id
   * @return OK
   */
  deleteUsingDELETE(id: number): __Observable<BodyType> {
    return this.deleteUsingDELETEResponse(id).pipe(
      __map(_r => _r.body as BodyType)
    );
  }
}

module BodyTypeControllerService {

  /**
   * Parameters for updateUsingPUT
   */
  export interface UpdateUsingPUTParams {

    /**
     * id
     */
    id: number;

    /**
     * bodyTypeDTO
     */
    bodyTypeDTO: BodyTypeDTO;
  }
}

export { BodyTypeControllerService }
