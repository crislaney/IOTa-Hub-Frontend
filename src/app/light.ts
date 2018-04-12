export class Light {
  constructor(public l_name: string, public l_hue: number, 
    l_sat: number, public l_bri: number, public l_on: boolean, 
    public l_x:number, public l_y: number){

    this.name = l_name;
    this.hue = l_hue;
    this.bri = l_bri;
    this.sat = l_sat;
    this.on = l_on;
    this.transitiontime = 1;
    this.x = l_x;
    this.y = l_y;
    this.satStyle = this.buildSatStyle();
    this.briStyle = this.buildBriStyle();
  }

  buildSatStyle(){
    let gradient_style = {};
    gradient_style['background'] = "linear-gradient(to right, white, yellow)"
    return gradient_style['background'];
  }

  buildBriStyle(){
    let gradient_style = {};
    gradient_style['background'] = "linear-gradient(-40deg, yellow, black)"
    return gradient_style['background'];
  }

  /*Function taken from stack overflow*/
  xyToRGB(){
    /*
    float x = x; // the given x value
    float y = y; // the given y value
    float z = 1.0f - x - y;
    float Y = brightness; // The given brightness value
    float X = (Y / y) * x;
    float Z = (Y / y) * z;
    */

    let x = this.x;
    let y = this.y;

    let z = 1.0 - x - y;
    let Y = this.bri;
    let X = (Y/y)*x;
    let Z = (Y/y)*z;

    /*
    float r =  X * 1.656492f - Y * 0.354851f - Z * 0.255038f;
    float g = -X * 0.707196f + Y * 1.655397f + Z * 0.036152f;
    float b =  X * 0.051713f - Y * 0.121364f + Z * 1.011530f;
    */

    let r = X*1.656492 - Y * 0.354851 - Z * 0.255038;
    let g = -X* 0.707196 - Y * 1.655397+ Z * 0.036152;
    let b =  X * 0.051713 - Y * 0.121364 + Z * 1.011530;

    /*
    r = r <= 0.0031308f ? 12.92f * r : (1.0f + 0.055f) * pow(r, (1.0f / 2.4f)) - 0.055f;
    g = g <= 0.0031308f ? 12.92f * g : (1.0f + 0.055f) * pow(g, (1.0f / 2.4f)) - 0.055f;
    b = b <= 0.0031308f ? 12.92f * b : (1.0f + 0.055f) * pow(b, (1.0f / 2.4f)) - 0.055f;
    */
   
    r = r <= 0.0031308 ? 12.92 * r : (1.0 + 0.055) * Math.pow(r, (1.0 / 2.4)) - 0.055;
    g = g <= 0.0031308 ? 12.92 * g : (1.0 + 0.055) * Math.pow(g, (1.0 / 2.4)) - 0.055;
    b = b <= 0.0031308 ? 12.92 * b : (1.0 + 0.055) * Math.pow(b, (1.0 / 2.4)) - 0.055;

    let maxValue = Math.max(r,g,b);
    r /= maxValue;
    g /= maxValue;
    b /= maxValue;

    r = r * 255;   if (r < 0) { r = 255 };
    g = g * 255;   if (g < 0) { g = 255 };
    b = b * 255;   if (b < 0) { b = 255 };

    let r_str = Math.round(r).toString(16);
    let g_str = Math.round(g).toString(16);
    let b_str = Math.round(b).toString(16);

    if (r_str.length < 2)
        r_str="0"+r_str;        
    if (g_str.length < 2)
        g_str="0"+g_str;        
    if (b_str.length < 2)
        b_str="0"+r_str;        
    let rgb = "#" + r_str+g_str+b_str;

    this.rgb = rgb;
    return rgb;             
  }

  toReqBody(){
    let reqDict = {};
    reqDict['hue'] = this.hue;
    reqDict['bri'] = this.bri;
    reqDict['sat'] = this.sat;
    reqDict['on'] = this.on;
    console.log("Building req. Tran time: " + this.transitiontime);
    reqDict['transitiontime'] = this.transitiontime;

    let light_json = JSON.stringify(reqDict);
    console.log(light_json);
    return light_json;
  }

  name: string;
  hue: number
  bri: number;
  sat: number;
  on: boolean;
  transitiontime: number;
  rgb: string;
  x: number;
  y: number;
  briStyle: string;
  satStyle: string;
}
