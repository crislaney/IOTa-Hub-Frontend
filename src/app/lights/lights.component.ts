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
        let red = value['rgb_hex'].substr(0, 2);
        let green = value['rgb_hex'].substr(2, 2);
        let blue = value['rgb_hex'].substr(4, 2);
        
        let rgb_list:[number, number, number] = [parseInt(red, 16), parseInt(green, 16), 
          parseInt(blue, 16)];

        let bri = value['bri'];
        let is_on = value['on'];

        this.lights.push(new Light(key, rgb_list, bri, is_on))
      }
    });
  }

  putLightChange(light: Light){
    let url_name: string = encodeURI(light.name);
    
    let put_light_url: string = "http://localhost:5000/api/light/" + url_name;
    let body = light.toReqBody();
    this.http.put(put_light_url, body, {
      headers: new HttpHeaders().set('Content-Type', 'application/json'),
      responseType: 'text' 
   }).subscribe(data=>{
      //nconsole.log(data);
    })
  }

  onOffToggle(light: Light){
    light.is_on = !light.is_on;
    console.log(light.is_on);
    this.putLightChange(light);
  }

  colorChange(light: Light, color_sel: string, color_val: number) {
    let val_str = color_val.toString(16);
    if(val_str.length === 1){
      val_str = "0" + val_str;
    }

    let new_rgb: [number, number, number] = light.rgb;
    if(color_sel === "red"){
      new_rgb[0] = color_val;
    }
    else if(color_sel === "green"){
      new_rgb[1] = color_val;
    }
    else if(color_sel === "blue"){
      new_rgb[2] = color_val;
    }

    this.putLightChange(light);
  }

  briChange(light: Light, val: number) {
    light.bri = val;
    this.putLightChange(light);
  };

  constructor(private http:HttpClient) { 
    console.log("In constructor");

    this.lights = []
    this.bri_val = 0;

    this.getAllLights();
  }

  ngOnInit() {
  }

}
