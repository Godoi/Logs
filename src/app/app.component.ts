import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  //isLogged: Boolean = false;

  constructor( private authService: AuthService ){ }

  ngOnInit() { 
    /*
    this.authService.isLoggedIn.subscribe(
      isLogged => this.isLogged = isLogged
    );
    */
   }

}