import { Component, OnInit, NgModule } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  userData = {
    tenDN: '',
    matKhau: '',
  };

  // loginForm!: FormGroup;
  // import 2 ong nay o tren dau 

  constructor(
    // private authService: AuthService
  ) {}
  // bat loi tai component
  ngOnInit(): void {
    // this.loginForm = new FormGoup({
    //   email: new FormControl('', Validators.requiried),
    //   password: new FormControl('', [Validators.requiried, Validators.minlegth(6)]),
    // })
  }

  onSubmit() {
    // if(this.loginForm.valid){
    // this.authService.login(this.loginForm.value).pipe().subscribe({
    //   next:  this.handleLoginSuccess.bind(this),
    //   error:  this.handleLoginFailed.bind(this),
    // })
    // }
    console.log(this.userData);
  }
  suggest() {
    this.userData.tenDN = 'Fply@fe.edu.vn';
  }

  protected handleLoginSuccess(res: any) {
    console.log(res);
  }

  protected handleLoginFailed() { }

}
