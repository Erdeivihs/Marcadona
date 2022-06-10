import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/user';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public registerValid = false;
  public registerError = false;
  public loginValid = false;
  public username = '';
  public password = '';

  constructor(private loginService: LoginService,
    private router: Router) 
    { }

  ngOnInit(): void {
    
  }

  userlogin = true;
  userregistre = false;
  
  registrarse(){
    this.userlogin = false;
    this.userregistre = true;
  }

  logearse(){
    this.userlogin = true;
    this.userregistre = false;
  }

  public onSubmit(): void{
    console.log(this.userlogin);
    console.log(this.userregistre);
    
    if (this.userlogin == true) {
      let user:User = { email: this.username, password: this.password};
    this.loginService.login(user).subscribe({
      next: user=>{
        console.log(user);
        this.router.navigate(['/global']);
       },
      error: err=>{console.log(err)}
     });
    } else if(this.userregistre == true) {
      let user:User = { email: this.username, password: this.password};
      this.loginService.register(user).subscribe(
      {next: ()=>{this.registerValid=true},
      error: err => {console.log('Register Error', err); this.registerError = true}});
    }
    
  }

}
