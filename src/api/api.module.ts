/* tslint:disable */
import { NgModule, ModuleWithProviders } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ApiConfiguration, ApiConfigurationInterface } from './api-configuration';

import { BodyTypeControllerService } from './services/body-type-controller.service';
import { BasicErrorControllerService } from './services/basic-error-controller.service';
import { MealControllerService } from './services/meal-controller.service';
import { ProductControllerService } from './services/product-controller.service';
import { TargetControllerService } from './services/target-controller.service';
import { TypeOfMealControllerService } from './services/type-of-meal-controller.service';
import { UserControllerService } from './services/user-controller.service';
import { UserHistoryControllerService } from './services/user-history-controller.service';

/**
 * Provider for all Api services, plus ApiConfiguration
 */
@NgModule({
  imports: [
    HttpClientModule
  ],
  exports: [
    HttpClientModule
  ],
  declarations: [],
  providers: [
    ApiConfiguration,
    BodyTypeControllerService,
    BasicErrorControllerService,
    MealControllerService,
    ProductControllerService,
    TargetControllerService,
    TypeOfMealControllerService,
    UserControllerService,
    UserHistoryControllerService
  ],
})
export class ApiModule {
  static forRoot(customParams: ApiConfigurationInterface): ModuleWithProviders<ApiModule> {
    return {
      ngModule: ApiModule,
      providers: [
        {
          provide: ApiConfiguration,
          useValue: {rootUrl: customParams.rootUrl}
        }
      ]
    }
  }
}
