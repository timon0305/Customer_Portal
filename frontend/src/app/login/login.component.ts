import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthService} from "../core/auth/_services/auth.service";
import {first} from "rxjs/operators";
import {Constants} from "../constants";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private userService: AuthService,
    private _router: Router,
    private toastr: ToastrService,
  ) { }

  login: FormGroup;
  loading = false;
  submitted = false;
  hide = true;
  ngOnInit(): void {
    this.login = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  get f() {return this.login.controls}
  onSubmit() {
    this.submitted = true;
    if (this.login.invalid) {
      return;
    }

    const _user: { username: string; password: string }[] = [
      {
        'username' : this.f.username.value,
        'password' : this.f.password.value
      }
    ];

    this.loading = true;
    this.userService.login(_user[0])
      .pipe(first())
      .subscribe(res => {
         if (res['success'] === true) {
           this.toastr.info(
             '<span class="now-ui-icons ui-1_bell-53"></span> ' + res['msg'],
             "",
             {
               timeOut: 8000,
               closeButton: true,
               enableHtml: true,
               toastClass: "alert alert-success alert-with-icon",
               positionClass: "toast-top-right"
             }
           );
           this._router.navigate([Constants.UrlAllUnits])
         } else {
           this.toastr.info(
             '<span class="now-ui-icons ui-1_bell-53"></span> ' + res['msg'],
             "",
             {
               timeOut: 8000,
               closeButton: true,
               enableHtml: true,
               toastClass: "alert alert-warning alert-with-icon",
               positionClass: "toast-top-right"
             }
           );
         }
      })
  }
}
