import { Component, OnInit } from '@angular/core';
import { Light } from '../light';
import { ActivatedRoute, Router} from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-lights',
  templateUrl: './lights.component.html',
  styleUrls: ['./lights.component.css']
})

export class LightsComponent implements OnInit {
  rgb_vals:{}
  bri_val: number;
  current_color:string;
  public lights: Light[];

  getAllLights(){
    let get_url: string = "localhost:5000/lights";
    this.http.get(get_url);
    let temp: number = 5;
  }


  putColorChange(light_name: string, rgb: {}, bri: number){
    
  }

  setCurrentStyles(color: string){
    this.current_color = color;
  }

  colorChange(color_sel: string, color_val: number) {
    let val_str = color_val.toString(16);
    if(val_str.length === 1){
      val_str = "0" + val_str;
    }
    this.rgb_vals[color_sel] = val_str;
    this.setCurrentStyles("#" + this.rgb_vals['red'] + this.rgb_vals['green'] + this.rgb_vals['blue']);
  }

  briChange(val: number) {
    this.bri_val = val;
  };

  constructor(private http:HttpClient) { 
    this.rgb_vals = {
      'red':0,
      'green':0,
      'blue':0
    }
    this.lights = []
    this.bri_val = 0;
    this.colorChange('red', 0);
    this.colorChange('green', 0);
    this.colorChange('blue', 0);

    this.getAllLights();
  }

  ngOnInit() {
  }

}
