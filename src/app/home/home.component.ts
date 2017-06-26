import { Component, HostBinding, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit, OnDestroy{
  isLogged = true;
  constructor(
    private router: Router
  ){ }

  ngOnDestroy(){ }

  ngOnInit() {}

}
