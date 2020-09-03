import { Injectable } from '@angular/core';
import { State, Action, StateContext } from '@ngxs/store';
import {LoginAction, RegisterAction} from './auth.actions';
import {UserControllerService} from '../../api/services';

export class AuthStateModel {
}

const defaults = {
};

@State<AuthStateModel>({
  name: 'auth',
  defaults
})

@Injectable()
export class AuthState {
  constructor(public userControllerService: UserControllerService) {
  }
  @Action(LoginAction)
  login({ getState, setState }: StateContext<AuthStateModel>, { email, password }: LoginAction) {
   return this.userControllerService.getLoginUsingPOST({email, password});
  }

  @Action(RegisterAction)
  register({ getState, setState }: StateContext<AuthStateModel>, { userDTO }: RegisterAction) {
    return this.userControllerService.createUserUsingPOST(userDTO);
  }
}
