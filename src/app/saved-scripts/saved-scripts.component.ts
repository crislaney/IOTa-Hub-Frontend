import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Script } from '../script';
import { ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-saved-scripts',
  templateUrl: './saved-scripts.component.html',
  styleUrls: ['./saved-scripts.component.css']
})


export class SavedScriptsComponent implements OnInit {
  scripts: Script[];

  getScripts(){
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'JWT ' + localStorage.getItem('access_token')
      })
    };

    let get_url: string = "http://localhost:5000/api/script";
    this.http.get(get_url, {headers: httpOptions.headers, responseType:'text'}).subscribe(data=>{ 
      let list_of_scripts = JSON.parse(data);
      console.log(list_of_scripts);
      list_of_scripts.forEach((script, index)=>{
        console.log("name: " + script['name']);
        console.log("id: " + script['id']);
        let temp_script = new Script(script['name'], script['id']);
        console.log(temp_script);
        this.scripts.push(temp_script);
      });
    });
  }


  playScript(script_id: number){
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json');
    headers = headers.set('Authorization', 'JWT ' + localStorage.getItem('access_token'))
    console.log(headers.keys());
    let body = {};
    let put_url: string = "http://localhost:5000/api/script/" + script_id.toString();
    this.http.put(put_url, body, {headers: headers, responseType:'text'}).subscribe(data=>{ 
      console.log(data)
    });
  }


  constructor(private http: HttpClient) {
    this.scripts = [];
    this.getScripts();
   }

  ngOnInit() {
  }

}
