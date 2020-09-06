import { Component, OnInit } from '@angular/core';
import {OwlOptions} from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-main-page',

  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  constructor() { }

  loginPasswordInputType='password';
  registrationPasswordInputType='password';

  changeLoginPasswordInputType() {
    if (this.loginPasswordInputType === 'password') {
      this.loginPasswordInputType = 'text';
    } else {
      this.loginPasswordInputType = 'password';
    }
  }

  changeRegistrationPasswordInputType() {
    if (this.registrationPasswordInputType === 'password'){
      this.registrationPasswordInputType = 'text';
    } else {
      this.registrationPasswordInputType = 'password'
    }
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

  ngOnInit(): void {
  }
}
