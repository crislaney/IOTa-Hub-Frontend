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
    /*
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
    */
  }

  putLightChange(light: Light){
    /*
    let url_name: string = encodeURI(light.name);
    
    let put_light_url: string = "http://localhost:5000/api/light/" + url_name;
    let body = light.toReqBody();
    this.http.put(put_light_url, body, {
      headers: new HttpHeaders().set('Content-Type', 'application/json'),
      responseType: 'text' 
   }).subscribe(data=>{
      //nconsole.log(data);
    })
    */
  }


  getSatValue(light: Light){

  }

  

  onOffToggle(light: Light){
    light.is_on = !light.is_on;
    console.log(light.is_on);
    this.putLightChange(light);
  }

  colorChange(light: Light, color_val: number) {
    light.hue = color_val;
    // make request for new xy as well

    this.putLightChange(light);
  }

  satChange(light: Light, val: number) {
    light.bri = val;
    this.putLightChange(light);
  };

  briChange(light: Light, val: number) {
    light.bri = val;
    this.putLightChange(light);
  };


  constructor(private http:HttpClient) { 
    let light_1 = new Light("light 1", 0, 200, false, .6, .2); //red
    let light_2 = new Light("light 2", 12750, 100, false, .51, .36); //yellow
    let light_3 = new Light("light 3", 25500, 50, true, .2, .5); //green
    let light_4 = new Light("light 4", 46920, 250, true, .17, .2); //blue 
    let light_5 = new Light("light 5", 56100, 10, true, .35, .15); //purple
    let light_6 = new Light("light 6", 65280, 150, true, .6, .3); //red
    let light_7 = new Light("light 7", 0, 254, true, .6, .3); //red

    this.lights = []

    this.lights.push(light_1);
    this.lights.push(light_2);
    this.lights.push(light_3);
    this.lights.push(light_4);
    this.lights.push(light_5);
    this.lights.push(light_6);
    this.lights.push(light_7);

    this.bri_val = 0;

    this.getAllLights();
  }

  ngOnInit() {
  }

}
