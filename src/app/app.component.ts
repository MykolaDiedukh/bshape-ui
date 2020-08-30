import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor() {
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
    facebookLink: 'https://www.facebook.com'
  },{
    id:2,
    img: "assets/img/TEAM/pexels-emre-keshavarz-3526923.jpg",
    name: "Michał",
    role: "Programista",
    mainRole: "bShape owner."
  },{
    id:3,
    img: "assets/img/TEAM/pexels-emre-keshavarz-3526923.jpg",
    name: "Krystian",
    role: "Ceo",
    mainRole: "bShape owner."
  },{
    id:4,
    img: "assets/img/TEAM/pexels-emre-keshavarz-3526923.jpg",
    name: "Krystian",
    role: "Ceo",
    mainRole: "bShape owner."
  },{
    id:5,
    img: "assets/img/TEAM/pexels-emre-keshavarz-3526923.jpg",
    name: "Krystian",
    role: "Ceo",
    mainRole: "bShape owner."
  }];
}
