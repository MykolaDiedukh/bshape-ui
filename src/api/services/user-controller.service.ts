/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { UserDTO } from '../models/user-dto';
import { UserID } from '../models/user-id';
import { User } from '../models/user';

/**
 * User Controller
 */
@Injectable({
  providedIn: 'root',
})
class UserControllerService extends __BaseService {
  static readonly findAllUsingGET5Path = '/user';
  static readonly createUserUsingPOSTPath = '/user';
  static readonly getLoginUsingPOSTPath = '/user/login';
  static readonly findByIdUsingGET5Path = '/user/{id}';
  static readonly updateUsingPUT5Path = '/user/{id}';
  static readonly deleteUsingDELETE5Path = '/user/{id}';

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
  findAllUsingGET5Response(): __Observable<__StrictHttpResponse<Array<UserDTO>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/user`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<UserDTO>>;
      })
    );
  }
  /**
   * findAll
   * @return OK
   */
  findAllUsingGET5(): __Observable<Array<UserDTO>> {
    return this.findAllUsingGET5Response().pipe(
      __map(_r => _r.body as Array<UserDTO>)
    );
  }

  /**
   * createUser
   * @param userDTO userDTO
   * @return OK
   */
  createUserUsingPOSTResponse(userDTO: UserDTO): __Observable<__StrictHttpResponse<UserID>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = userDTO;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/user`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<UserID>;
      })
    );
  }
  /**
   * createUser
   * @param userDTO userDTO
   * @return OK
   */
  createUserUsingPOST(userDTO: UserDTO): __Observable<UserID> {
    return this.createUserUsingPOSTResponse(userDTO).pipe(
      __map(_r => _r.body as UserID)
    );
  }

  /**
   * getLogin
   * @param userDTO userDTO
   * @return OK
   */
  getLoginUsingPOSTResponse(userDTO: UserDTO): __Observable<__StrictHttpResponse<UserDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = userDTO;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/user/login`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<UserDTO>;
      })
    );
  }
  /**
   * getLogin
   * @param userDTO userDTO
   * @return OK
   */
  getLoginUsingPOST(userDTO: UserDTO): __Observable<UserDTO> {
    return this.getLoginUsingPOSTResponse(userDTO).pipe(
      __map(_r => _r.body as UserDTO)
    );
  }

  /**
   * findById
   * @param id id
   * @return OK
   */
  findByIdUsingGET5Response(id: number): __Observable<__StrictHttpResponse<UserDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/user/${encodeURIComponent(id)}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<UserDTO>;
      })
    );
  }
  /**
   * findById
   * @param id id
   * @return OK
   */
  findByIdUsingGET5(id: number): __Observable<UserDTO> {
    return this.findByIdUsingGET5Response(id).pipe(
      __map(_r => _r.body as UserDTO)
    );
  }

  /**
   * update
   * @param params The `UserControllerService.UpdateUsingPUT5Params` containing the following parameters:
   *
   * - `userDTO`: userDTO
   *
   * - `id`: id
   *
   * @return OK
   */
  updateUsingPUT5Response(params: UserControllerService.UpdateUsingPUT5Params): __Observable<__StrictHttpResponse<UserDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = params.userDTO;

    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/user/${encodeURIComponent(params.id)}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<UserDTO>;
      })
    );
  }
  /**
   * update
   * @param params The `UserControllerService.UpdateUsingPUT5Params` containing the following parameters:
   *
   * - `userDTO`: userDTO
   *
   * - `id`: id
   *
   * @return OK
   */
  updateUsingPUT5(params: UserControllerService.UpdateUsingPUT5Params): __Observable<UserDTO> {
    return this.updateUsingPUT5Response(params).pipe(
      __map(_r => _r.body as UserDTO)
    );
  }

  /**
   * delete
   * @param id id
   * @return OK
   */
  deleteUsingDELETE5Response(id: number): __Observable<__StrictHttpResponse<User>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/user/${encodeURIComponent(id)}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<User>;
      })
    );
  }
  /**
   * delete
   * @param id id
   * @return OK
   */
  deleteUsingDELETE5(id: number): __Observable<User> {
    return this.deleteUsingDELETE5Response(id).pipe(
      __map(_r => _r.body as User)
    );
  }
}

module UserControllerService {

  /**
   * Parameters for updateUsingPUT5
   */
  export interface UpdateUsingPUT5Params {

    /**
     * userDTO
     */
    userDTO: UserDTO;

    /**
     * id
     */
    id: number;
  }
}

export { UserControllerService }
