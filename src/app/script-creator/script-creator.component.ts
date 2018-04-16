import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { MatInput, MatInputModule, MatInputBase } from '@angular/material';


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
      let temp = JSON.parse(data);
      for(let key in temp){
        temp[key]['transitiontime'] = 10;
        // console.log(temp[key]['transitiontime']);
      }
      this.script.push(JSON.stringify(temp));
    });
  }

  playStep(step_num:number, transitiontime:number){
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'JWT ' + localStorage.getItem('access_token')
      })
    };

    if(typeof(transitiontime) === typeof("") || transitiontime === undefined || transitiontime === null || transitiontime === NaN){
      transitiontime = 10;
    }

    let temp = JSON.parse(this.script[step_num]);
    for(let key in temp){
      temp[key]['transitiontime'] = transitiontime;
    }

    let body = JSON.stringify(temp);
    //console.log(body);

    let put_url: string = "http://localhost:5000/api/step";
    this.http.put(put_url, body, {headers: httpOptions.headers, responseType:'text'}).subscribe(data=>{ 
      // console.log(data);
    });
  }

  setAllTransitionTimes(){
    let steps = document.getElementsByClassName('tran-time');

    for(var i = 0; i < steps.length; i++){
      let input_elem = steps[i] as HTMLInputElement;
      let temp_store = input_elem.value;

      let step_dict = JSON.parse(this.script[i]);

      for(let key in step_dict){
        if(key === "")
        {
          console.log("Value empty. Inserting 10");
          step_dict[key]['transitiontime'] = 10;
        }
        else
        {
          step_dict[key]['transitiontime'] = temp_store;
          (document.getElementsByClassName('tran-time')[i] as HTMLInputElement).value = temp_store;
          console.log(temp_store);
        }
      }
      // console.log(temp_store);
      this.script[i] = JSON.stringify(step_dict);
    }
    // console.log(this.script);
  }

  playScript(){
    this.setAllTransitionTimes();
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'JWT ' + localStorage.getItem('access_token')
      })
    };

    let put_url: string = "http://localhost:5000/api/step";
    let body = this.script;
    for(let i = 0; i < this.script.length; ++i){
      console.log(this.script[i]);
    }
    let body_json = JSON.stringify(body)
    this.http.put(put_url, body, {headers: httpOptions.headers, responseType:'text'}).subscribe(data=>{ 
      // console.log(data);
    });
  }

  postScript(name: string){
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'JWT ' + localStorage.getItem('access_token')
      })
    };
    this.setAllTransitionTimes();
    let post_url: string = "http://localhost:5000/api/script";
    let body = this.script;
    let body_dict = {};
    body_dict['name'] = name;
    body_dict['steps'] = this.script;
    this.http.post(post_url, JSON.stringify(body_dict), {headers: httpOptions.headers, responseType:'text'}).subscribe(data=>{ 
      // console.log(data);
    });

  }

  setTransitionTime(step_num: number, transitiontime: number){
    let step_dict = JSON.parse(this.script[step_num]);
    if(transitiontime === undefined || transitiontime === null)
    {
      console.log("Setting default ttime");
      transitiontime = 10;
    }

    for(let key in step_dict){
      step_dict[key]['transitiontime'] = transitiontime;
    }
    this.script[step_num] = JSON.stringify(step_dict);
  }

  constructor(private http:HttpClient) { 
    this.script = [];
    //console.log(localStorage.getItem('access_token'));
  }

  ngOnInit() {
  }

}
