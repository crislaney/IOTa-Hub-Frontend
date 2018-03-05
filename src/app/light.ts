type Tuple = [number, number, number];
export class Light {
  constructor(public l_name: string, 
    public l_rgb: Tuple, public l_bri: number, public l_is_on: boolean){
    this.name = l_name;
    this.rgb = l_rgb;
    this.bri = l_bri;
    this.is_on = l_is_on;
    this.transitiontime = 0;
  }

  toReqBody(){
    let reqDict = {};
    reqDict['rgb'] = this.rgb;
    reqDict['bri'] = this.bri;
    reqDict['is_on'] = this.is_on;
    reqDict['transitiontime'] = this.transitiontime;

    let light_json = JSON.stringify(reqDict);
    return light_json;
  }

  name: string;
  rgb: Tuple;
  bri: number;
  is_on: boolean;
  transitiontime: number;
}
