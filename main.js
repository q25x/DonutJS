const screen_height = process.stdout.rows;
const screen_width = process.stdout.columns;
const screen_size = screen_height * screen_width;
const sin = Math.sin;
const cos = Math.cos;
var th_spacing = 7;
var phi_spacing = 2;
var chars = ".,-~:;=!*#$@"
var R1 = 10, R2 = 20;
var K2 = 50;
var K1 = screen_height * K2 * 3 / (8 * (R1+R2));
let A = 0, B = 0;

function updateScreen() {
  console.clear();
  var output = new Array(screen_size).fill(" ");
  var z_buffer = new Array(screen_size).fill(0);
  for(var th=0; th<628; th+=th_spacing) {
    for(var phi=0; phi<628; phi+=phi_spacing) {
      
      let cA = cos(A), sA = sin(A);
      let cB = cos(B), sB = sin(B);
      let ct = cos(th), st = sin(th);
      let cp = cos(phi), sp = sin(phi);

      let circ_x = R2 + R1 * ct;
      let circ_y = R1 * st;
      
      let x = circ_x * (cB * cp + sA * sB * sp) - circ_y * cA * sB;
      let y = circ_x * (sB * cp - sA * cB * sp) + circ_y * cA * cB;
      let z = K2 + cA * circ_x * sp + circ_y * sA;
      let ooz = 1/z;

      let x_projected = parseInt(screen_width / 2 + K1 * ooz * x);
      let y_projected = parseInt(screen_height / 2 - K1 * ooz * y);
      
      let pos = x_projected + screen_width * y_projected;
      ``
      let Luminance = cp * ct * sB - cA * ct *sp - sA * st + cB * (cA * st - ct * sA * sp);
      if( ooz > z_buffer[pos]) {
        z_buffer[pos] = ooz;
        let luminance_index = parseInt(Luminance * 8)
        output[pos] = chars[luminance_index>0?luminance_index:0];
      };
    };
  };

  var output_index = 0;
    var real_output = "";
    for(var y=1; y<=screen_height; y++) {
      for(var x=1; x<=screen_width; x++) {
        real_output += output[output_index];
        output_index+=1;
      };
    };
  console.log(real_output);
  A += 0.2;
  B += 0.1;
};
setInterval(updateScreen, 50);