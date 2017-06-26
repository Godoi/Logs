import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

import { Login } from './login.model';

@Component({
  selector: 'app-root',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit{
  //isLogged: false;
  loginForm: FormGroup;
  private log: Login = new Login();

  constructor(
    private router: Router,
    private authService: AuthService,
    private fb: FormBuilder){
       this.createForm();
    }

  ngOnInit(){ }

  login(user:string,pass:string) {
    this.authService
      .login(this.log.username, this.log.password)
      .then( logged => this.checkLogin() );
  }

  checkLogin() {
    if (!this.authService.isLoggedIn) { return false; }
    if (this.authService.redirectUrl) {
      this.router.navigate([this.authService.redirectUrl]);
    } else {
      this.router.navigate(['/change']);
    }
  }

  createForm(){
      this.loginForm = this.fb.group({
        username: [null, Validators.required],
        password: [null, Validators.required]
      });
  }
}
