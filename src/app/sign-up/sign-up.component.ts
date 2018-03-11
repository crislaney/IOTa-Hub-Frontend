import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})

export class SignUpComponent implements OnInit {

  signUp(username: string, pass: string, confpass: string) {
    if (pass !== confpass) {
      console.log("error");
      console.log(pass + " != " + confpass);
    }
    else {
      let sign_in_url: string = "http://localhost:5000/api/account";
      let req_body = {
        'username': username,
        'password': pass
      }

      try {
        this.http.post(sign_in_url, req_body, {
          headers: new HttpHeaders().set('Content-Type', 'application/json'),
          responseType: 'text'
        }).subscribe(data => {
          // let resp = JSON.parse(data);
          console.log(data);
        })
      } catch (e) {
        console.log("Sign in failed");
      }


    }
  }
  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

}
