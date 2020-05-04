import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  user: any;
  error: boolean = false;
  requestSent: boolean = false;

  constructor(private _userService: UserService, private toastr: ToastrService, private router: Router, private spinner: NgxSpinnerService) { }

  ngOnInit() {
    console.log("inside login");
    this.loginForm = new FormGroup({
      email: new FormControl('Sincere@april.biz', [Validators.required, Validators.email]),
      password: new FormControl('123456', [Validators.required, Validators.minLength(6)])
    })
  }

  onSubmit() {
    console.log(this.loginForm.get('email').value)
    console.log(this.loginForm.get('password').value)
    this.login(this.loginForm.get('email').value, this.loginForm.get('password').value)
  }

  login(email, password) {
    this.spinner.show();
    this._userService.login(email, password)
      .subscribe(
        (response: any) => {
          console.log(response);
            this.user = response;
            this.toastr.success('Login Success!', `Welcome ${this.user.name}`);
            this.router.navigate(['notes']);
            localStorage.setItem('user', JSON.stringify(this.user));
            this.spinner.hide();
        }, (err) => {
          console.log(Error);
          this.error = true;
          this.spinner.hide();
          this.toastr.error('Login Error', 'Invalid UserEmail / Password', {
            timeOut: 3000
          });
        }
      )
  }

}
