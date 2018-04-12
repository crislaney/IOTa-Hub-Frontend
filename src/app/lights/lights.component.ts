import { Component, OnInit } from '@angular/core';
import { Light } from '../light';
import { ActivatedRoute, Router} from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-lights',
  templateUrl: './lights.component.html',
  styleUrls: ['./lights.component.css']
})

export class LightsComponent implements OnInit {
  bri_val: number;
  current_color:string;
  public lights: Light[];

  getAllLights(){
    let get_url: string = "http://localhost:5000/api/lights";
    this.http.get(get_url, {responseType: 'text'}).subscribe(data=>{
      let data_json = JSON.parse(data);
      for (let key in data_json){
        let value = data_json[key];

        let x = value['xy'][0];
        let y = value['xy'][1];
        let hue = value['hue'];
        let bri = value['bri'];
        let on = value['on'];
        let sat = value['sat'];

        let new_light = new Light(key, hue, sat, bri, on, x, y);
        // Set sat
        new_light.xyToRGB();
        this.lights.push(new_light);
      }
    });
  }

  putLightChange(light: Light){
    let url_name: string = encodeURI(light.name);
    
    let put_light_url: string = "http://localhost:5000/api/light/" + url_name;
    let body = light.toReqBody();
    console.log(body);
    this.http.put(put_light_url, body, {
      headers: new HttpHeaders().set('Content-Type', 'application/json'),
      responseType: 'text' 
   }).subscribe(data=>{
      console.log(data);
    })
  }
  

  onOffToggle(light: Light){
    light.on = !light.on;
    this.putLightChange(light);
  }

  colorChange(light: Light, color_val: number) {
    light.hue = color_val;
    // make request for new xy as well
    light.buildSatStyle();
    light.buildBriStyle();
    this.putLightChange(light);
  }

  satChange(light: Light, val: number) {
    light.sat = val;
    this.putLightChange(light);
  };

  briChange(light: Light, val: number) {
    light.bri = val;
    this.putLightChange(light);
  };


  constructor(private http:HttpClient) { 
    this.lights = []

    this.getAllLights();
  }

  ngOnInit() {
  }

}
