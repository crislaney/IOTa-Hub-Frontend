import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-script-creator',
  templateUrl: './script-creator.component.html',
  styleUrls: ['./script-creator.component.css']
})

export class ScriptCreatorComponent implements OnInit {
  private base_url: string = "http://localhost:5000/api/";
  private script_length: number = 0;
  script: string[];

  getStep(){
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'JWT ' + localStorage.getItem('access_token')
      })
    };
    let my_header = new HttpHeaders();

    let get_url: string = "http://localhost:5000/api/step";
    this.http.get(get_url, {headers: httpOptions.headers, responseType:'text'}).subscribe(data=>{ 
      console.log(data);
      this.script.push(data);
    });
  }

  playStep(step_num:number){
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'JWT ' + localStorage.getItem('access_token')
      })
    };

    let put_url: string = "http://localhost:5000/api/step";
    let body = this.script[step_num]
    this.http.put(put_url, body, {headers: httpOptions.headers, responseType:'text'}).subscribe(data=>{ 
      console.log(data);
    });
  }

  playScript(){
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'JWT ' + localStorage.getItem('access_token')
      })
    };

    let put_url: string = "http://localhost:5000/api/step";
    let body = this.script;
    JSON.stringify(body)
    this.http.put(put_url, body, {headers: httpOptions.headers, responseType:'text'}).subscribe(data=>{ 
      console.log(data);
    });
  }

  postScript(name: string){
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'JWT ' + localStorage.getItem('access_token')
      })
    };

    let post_url: string = "http://localhost:5000/api/script";
    let body = this.script;
    let body_dict = {};
    body_dict['name'] = name;
    body_dict['steps'] = this.script;
    this.http.post(post_url, JSON.stringify(body_dict), {headers: httpOptions.headers, responseType:'text'}).subscribe(data=>{ 
      console.log(data);
    });

  }

  constructor(private http:HttpClient) { 
    this.script = [];
    console.log(localStorage.getItem('access_token'));
  }

  ngOnInit() {
  }

}
