import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gradient-color-picker',
  templateUrl: './gradient-color-picker.component.html',
  styleUrls: ['./gradient-color-picker.component.css']
})
export class GradientColorPickerComponent implements OnInit {

  genGradient(element: HTMLCanvasElement){
    console.log(element);
  }

  constructor() { }

  ngOnInit() {
  }

}
