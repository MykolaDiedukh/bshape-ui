import {Component, OnInit, ViewChild} from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import {ModalDirective} from 'angular-bootstrap-md';
import {Constants} from './contants';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {LoginAction} from './state/auth.actions';
/*import {UserService} from './services/user-service';*/
import { Store } from '@ngxs/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  loginPasswordInputType='password';

  registrationPasswordInputType='password';
  // common elements
  mainMessage: string = '';

  @ViewChild('registrationNewUserModal') registrationNewUserModal: ModalDirective;

  firstName: string = '';
  lastName: string = '';
  email: string = '';
  sex: number;
  password: string = '';
  repeatPassword: string = '';


  registrationNewUserInfoMessage: string = '';

// jeśli dodać opcji do konstruktora wtedy przestanie działać cała strona

  // constructor(private userService: UserService) {
  // }
  public loginForm: FormGroup;

  constructor(public store: Store, public formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login() {
    this.store.dispatch(new LoginAction(this.loginForm.value.email, this.loginForm.value.password));
  }


  clearData(): void {
    // messages
    this.mainMessage = '';
    this.registrationNewUserInfoMessage = '';

    // fields
    this.firstName = '';
    this.lastName = '';
    this.email = '';
    this.sex = undefined;
    this.password = '';
    this.repeatPassword = '';
  }

  // Hide and Show password in loginModal
  changeLoginPasswordInputType() {
    if (this.loginPasswordInputType === 'password') {
      this.loginPasswordInputType = 'text';
    } else {
      this.loginPasswordInputType = 'password';
    }
  }

  // Hide and Show password in registrationModal
  changeRegistrationPasswordInputType() {
    if (this.registrationPasswordInputType === 'password'){
      this.registrationPasswordInputType = 'text';
    } else {
      this.registrationPasswordInputType = 'password'
    }
  }

  // registration new user(create)
  registrationNewUser() {
    if (this.firstName.length === 0 ||
      this.lastName.length === 0 ||
      this.email.length === 0 ||
      this.password.length === 0 ||
      this.repeatPassword.length === 0 ||
      this.sex === undefined ) {
      this.registrationNewUserInfoMessage = Constants.MANDATORY_FIELDS_ERROR_MESSSAGE;
      return;
    }

    let user = {
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      sex: this.sex,
      password: this.password,
      repeatPassword: this.repeatPassword
    }

    // Metoda nie może działać po konstruktor z parametrami jest za komentowany

    // this.userService.registrationNewUser(user).subscribe( data => {
    //     this.registrationNewUserModal.hide();
    //     this.mainMessage = 'Registration was successfully';
    //   },
    //   error => {
    //     this.registrationNewUserInfoMessage = error;
    //   })
  }

  customOptions: OwlOptions = {
    loop: true,
    autoplay: true,
    center: true,
    dots: false,
    autoHeight: true,
    autoWidth: true,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
  }
  public slidesData = [{
    id:1,
    img: "assets/img/TEAM/pexels-emre-keshavarz-3526923.jpg",
    name: "Krystian",
    role: "Ceo",
    mainRole: "bShape owner.",
    facebookLink: 'https://www.facebook.com',
    twitterLink: 'https//www.twitter.com',
    instagramLink: 'https//www.instagram.com',
    youtubeLink: 'https//www.youtube.com'
  },{
    id:2,
    img: "assets/img/TEAM/pexels-ensiha-digital-4060363-team.jpg",
    name: "Mykola",
    role: "Ceo",
    mainRole: "bShape owner.",
    facebookLink: 'https://www.facebook.com',
    twitterLink: 'https//www.twitter.com',
    instagramLink: 'https//www.instagram.com',
    youtubeLink: 'https//www.youtube.com'
  },{
    id:3,
    img: "assets/img/TEAM/pexels-andrea-piacquadio-3778527-team.jpg",
    name: "Kenobi",
    role: "Jedi master",
    mainRole: "Just gimme some beer.",
    facebookLink: 'https://www.facebook.com',
    twitterLink: 'https//www.twitter.com',
    instagramLink: 'https//www.instagram.com',
    youtubeLink: 'https//www.youtube.com'
  },{
    id:4,
    img: "assets/img/TEAM/pexels-christina-morillo-1181424.jpg",
    name: "Padme",
    role: "Anakin's baby",
    mainRole: "My master anakin is looking for me.",
    facebookLink: 'https://www.facebook.com',
    twitterLink: 'https//www.twitter.com',
    instagramLink: 'https//www.instagram.com',
    youtubeLink: 'https//www.youtube.com'
  }];
}
