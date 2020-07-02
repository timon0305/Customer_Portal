import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {User} from "../_models/user.model";
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute} from "@angular/router";
import {map} from "rxjs/operators";

const BASE_URL = 'http://localhost:5000/rest/api/';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  returnUrl : string;
  isLoggedIn() : boolean {
    return
  }
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute
  ) {
    this.currentUserSubject = new BehaviorSubject<any>(localStorage.getItem('token'));
    this.currentUser = this.currentUserSubject.asObservable();
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  public get  currentUserValue() : any {
    return localStorage.getItem('token');
  }

  login(payload) : Observable<any> {
    return this.http.post(BASE_URL + 'authentication', payload)
      .pipe(
        map(res => {
          if (res['success'] === true) {
            localStorage.setItem('token', res['token']);
            localStorage.setItem('customerId', res['data']['id']);
          }
          return res;
        })
      )
  }
}
