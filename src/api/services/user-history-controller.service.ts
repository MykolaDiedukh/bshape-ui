/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { UserHistoryDTO } from '../models/user-history-dto';
import { UserHistoryID } from '../models/user-history-id';
import { UserHistory } from '../models/user-history';

/**
 * User History Controller
 */
@Injectable({
  providedIn: 'root',
})
class UserHistoryControllerService extends __BaseService {
  static readonly findAllUsingGET6Path = '/userHistory';
  static readonly createUsingPOST5Path = '/userHistory';
  static readonly findByIdUsingGET6Path = '/userHistory/{id}';
  static readonly updateUsingPUT6Path = '/userHistory/{id}';
  static readonly deleteUsingDELETE6Path = '/userHistory/{id}';

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
  findAllUsingGET6Response(): __Observable<__StrictHttpResponse<Array<UserHistoryDTO>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/userHistory`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<UserHistoryDTO>>;
      })
    );
  }
  /**
   * findAll
   * @return OK
   */
  findAllUsingGET6(): __Observable<Array<UserHistoryDTO>> {
    return this.findAllUsingGET6Response().pipe(
      __map(_r => _r.body as Array<UserHistoryDTO>)
    );
  }

  /**
   * create
   * @param userHistoryDTO userHistoryDTO
   * @return OK
   */
  createUsingPOST5Response(userHistoryDTO: UserHistoryDTO): __Observable<__StrictHttpResponse<UserHistoryID>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = userHistoryDTO;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/userHistory`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<UserHistoryID>;
      })
    );
  }
  /**
   * create
   * @param userHistoryDTO userHistoryDTO
   * @return OK
   */
  createUsingPOST5(userHistoryDTO: UserHistoryDTO): __Observable<UserHistoryID> {
    return this.createUsingPOST5Response(userHistoryDTO).pipe(
      __map(_r => _r.body as UserHistoryID)
    );
  }

  /**
   * findById
   * @param id id
   * @return OK
   */
  findByIdUsingGET6Response(id: number): __Observable<__StrictHttpResponse<UserHistoryDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/userHistory/${encodeURIComponent(id)}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<UserHistoryDTO>;
      })
    );
  }
  /**
   * findById
   * @param id id
   * @return OK
   */
  findByIdUsingGET6(id: number): __Observable<UserHistoryDTO> {
    return this.findByIdUsingGET6Response(id).pipe(
      __map(_r => _r.body as UserHistoryDTO)
    );
  }

  /**
   * update
   * @param params The `UserHistoryControllerService.UpdateUsingPUT6Params` containing the following parameters:
   *
   * - `userHistoryDTO`: userHistoryDTO
   *
   * - `id`: id
   *
   * @return OK
   */
  updateUsingPUT6Response(params: UserHistoryControllerService.UpdateUsingPUT6Params): __Observable<__StrictHttpResponse<UserHistoryDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = params.userHistoryDTO;

    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/userHistory/${encodeURIComponent(params.id)}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<UserHistoryDTO>;
      })
    );
  }
  /**
   * update
   * @param params The `UserHistoryControllerService.UpdateUsingPUT6Params` containing the following parameters:
   *
   * - `userHistoryDTO`: userHistoryDTO
   *
   * - `id`: id
   *
   * @return OK
   */
  updateUsingPUT6(params: UserHistoryControllerService.UpdateUsingPUT6Params): __Observable<UserHistoryDTO> {
    return this.updateUsingPUT6Response(params).pipe(
      __map(_r => _r.body as UserHistoryDTO)
    );
  }

  /**
   * delete
   * @param id id
   * @return OK
   */
  deleteUsingDELETE6Response(id: number): __Observable<__StrictHttpResponse<UserHistory>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/userHistory/${encodeURIComponent(id)}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<UserHistory>;
      })
    );
  }
  /**
   * delete
   * @param id id
   * @return OK
   */
  deleteUsingDELETE6(id: number): __Observable<UserHistory> {
    return this.deleteUsingDELETE6Response(id).pipe(
      __map(_r => _r.body as UserHistory)
    );
  }
}

module UserHistoryControllerService {

  /**
   * Parameters for updateUsingPUT6
   */
  export interface UpdateUsingPUT6Params {

    /**
     * userHistoryDTO
     */
    userHistoryDTO: UserHistoryDTO;

    /**
     * id
     */
    id: number;
  }
}

export { UserHistoryControllerService }
