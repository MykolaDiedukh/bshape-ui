/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { ProductDTO } from '../models/product-dto';
import { ProductID } from '../models/product-id';
import { Product } from '../models/product';

/**
 * Product Controller
 */
@Injectable({
  providedIn: 'root',
})
class ProductControllerService extends __BaseService {
  static readonly findAllUsingGET2Path = '/product';
  static readonly createUsingPOST2Path = '/product';
  static readonly findByIdUsingGET2Path = '/product/{id}';
  static readonly updateUsingPUT2Path = '/product/{id}';
  static readonly deleteUsingDELETE2Path = '/product/{id}';

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
  findAllUsingGET2Response(): __Observable<__StrictHttpResponse<Array<ProductDTO>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/product`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<ProductDTO>>;
      })
    );
  }
  /**
   * findAll
   * @return OK
   */
  findAllUsingGET2(): __Observable<Array<ProductDTO>> {
    return this.findAllUsingGET2Response().pipe(
      __map(_r => _r.body as Array<ProductDTO>)
    );
  }

  /**
   * create
   * @param productDTO productDTO
   * @return OK
   */
  createUsingPOST2Response(productDTO: ProductDTO): __Observable<__StrictHttpResponse<ProductID>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = productDTO;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/product`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ProductID>;
      })
    );
  }
  /**
   * create
   * @param productDTO productDTO
   * @return OK
   */
  createUsingPOST2(productDTO: ProductDTO): __Observable<ProductID> {
    return this.createUsingPOST2Response(productDTO).pipe(
      __map(_r => _r.body as ProductID)
    );
  }

  /**
   * findById
   * @param id id
   * @return OK
   */
  findByIdUsingGET2Response(id: number): __Observable<__StrictHttpResponse<ProductDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/product/${encodeURIComponent(id)}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ProductDTO>;
      })
    );
  }
  /**
   * findById
   * @param id id
   * @return OK
   */
  findByIdUsingGET2(id: number): __Observable<ProductDTO> {
    return this.findByIdUsingGET2Response(id).pipe(
      __map(_r => _r.body as ProductDTO)
    );
  }

  /**
   * update
   * @param params The `ProductControllerService.UpdateUsingPUT2Params` containing the following parameters:
   *
   * - `productDTO`: productDTO
   *
   * - `id`: id
   *
   * @return OK
   */
  updateUsingPUT2Response(params: ProductControllerService.UpdateUsingPUT2Params): __Observable<__StrictHttpResponse<ProductDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = params.productDTO;

    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/product/${encodeURIComponent(params.id)}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ProductDTO>;
      })
    );
  }
  /**
   * update
   * @param params The `ProductControllerService.UpdateUsingPUT2Params` containing the following parameters:
   *
   * - `productDTO`: productDTO
   *
   * - `id`: id
   *
   * @return OK
   */
  updateUsingPUT2(params: ProductControllerService.UpdateUsingPUT2Params): __Observable<ProductDTO> {
    return this.updateUsingPUT2Response(params).pipe(
      __map(_r => _r.body as ProductDTO)
    );
  }

  /**
   * delete
   * @param id id
   * @return OK
   */
  deleteUsingDELETE2Response(id: number): __Observable<__StrictHttpResponse<Product>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/product/${encodeURIComponent(id)}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Product>;
      })
    );
  }
  /**
   * delete
   * @param id id
   * @return OK
   */
  deleteUsingDELETE2(id: number): __Observable<Product> {
    return this.deleteUsingDELETE2Response(id).pipe(
      __map(_r => _r.body as Product)
    );
  }
}

module ProductControllerService {

  /**
   * Parameters for updateUsingPUT2
   */
  export interface UpdateUsingPUT2Params {

    /**
     * productDTO
     */
    productDTO: ProductDTO;

    /**
     * id
     */
    id: number;
  }
}

export { ProductControllerService }
