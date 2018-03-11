import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  signIn(username: string, password: string) {

    let sign_in_url: string = "http://localhost:5000/auth";
    let req_body = {
      'username': username,
      'password': password
    }

    try {
      this.http.post(sign_in_url, req_body, {
        headers: new HttpHeaders().set('Content-Type', 'application/json'),
        responseType: 'text'
      }).subscribe(data => {
        let resp = JSON.parse(data);
        localStorage.setItem('access_token', resp['access_token']);

      })
    } catch (e) {
      console.log("Sign in failed");
    }


  }

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

}
