import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menulateral',
  templateUrl: './menulateral.component.html',
  styleUrls: ['./menulateral.component.css']
})
export class MenulateralComponent implements OnInit {

  constructor(
    private login: LoginService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  logout() {
    this.login.logout();
    this.router.navigate(['/login']);
  }

}
