type Tuple = [number, number, number];
export class Light {
  constructor(public l_name: string, 
    public l_rgb: Tuple, public l_bri: number, public l_is_on: boolean){
    this.name = l_name;
    this.rgb = l_rgb;
    this.bri = l_bri;
    this.is_on = l_is_on;
  }
  name: string;
  rgb: Tuple;
  bri: number;
  is_on: boolean;
}
