
               var cn=process.stdout,s=Math.sin,
          sh=cn.rows,sw=cn.columns,ss=sh*sw,s=Math.sin,
       c=Math.cos,ts=7,ps=2,cs=".,-~:;=!*#$@",R1=10,R2=20,                  //    Problem, JavaScript?
    K2=50,K1=sh*K2*3/(8*(R1+R2)),A=0,B=0,us = () => {console.               //⠀⠀⠀ ⠀⠀⠀⢀⣤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⢤⣤⣀⣀⡀⠀⠀⠀⠀⠀⠀
   clear();var o=new Array            (ss).fill(" "),zb=new                 //⠀⠀⠀ ⠀⢀⡼⠋⠀⣀⠄⡂⠍⣀⣒⣒⠂⠀⠬⠤⠤⠬⠍⠉⠝⠲⣄⡀⠀⠀
   Array(ss).fill(0);for(              var th=0;th<628;th+=ts)              //⠀⠀⠀ ⢀⡾⠁⠀⠊⢔⠕⠈⣀⣀⡀⠈⠆⠀⠀⠀⡍⠁⠀⠁⢂⠀⠈⣷⠀⠀
  {for(var ph=0;ph<628;                 ph+=ps){let cA=c(A),sA=s            //⠀ ⠀⣠⣾⠥⠀⠀⣠⢠⣞⣿⣿⣿⣉⠳⣄⠀⠀⣀⣤⣶⣶⣶⡄⠀⠀⣘⢦⡀
  (A),cB=c(B),sB=s(B),                   ct=c(th),st=s(th),cp=c(            // ⢀⡞⡍⣠⠞⢋⡛⠶⠤⣤⠴⠚⠀⠈⠙⠁⠀⠀⢹⡏⠁⠀⣀⣠⠤⢤⡕⠱⣷
  ph),sp=s(ph),cx=R2+                    R1*ct,cy=R1*st,x=cx*(cB            //⠘⡇⠇⣯⠤⢾⡙⠲⢤⣀⡀⠤⠀⢲⡖⣂⣀⠀⠀⢙⣶⣄⠈⠉⣸⡄⠠⣠⡿
   *cp+sA*sB*sp)-cy*cA                  *sB,y=cx*(sB*cp-sA*cB*sp            //⠀⠹⣜⡪⠀⠈⢷⣦⣬⣏⠉⠛⠲⣮⣧⣁⣀⣀⠶⠞⢁⣀⣨⢶⢿⣧⠉⡼⠁
   )+cy*cA*cB,z=K2+cA*                  cx*sp+cy*sA,oz=1/z,xp=              //⠀⠀⠈⢷⡀⠀⠀⠳⣌⡟⠻⠷⣶⣧⣀⣀⣹⣉⣉⣿⣉⣉⣇⣼⣾⣿⠀⡇⠀
   parseInt(sw/2+K1*oz*                x),yp=parseInt(sh/2-K1*              //⠀⠀⠀⠈⢳⡄⠀⠀⠘⠳⣄⡀⡼⠈⠉⠛⡿⠿⠿⡿⠿⣿⢿⣿⣿⡇⠀⡇⠀
   oz*y),pos=xp+sw*yp,L=cp           *ct*sB-cA*ct*sp-sA*st+cB               //⠀⠀⠀⠀⠀⠙⢦⣕⠠⣒⠌⡙⠓⠶⠤⣤⣧⣀⣸⣇⣴⣧⠾⠾⠋⠀⠀⡇⠀
    *(cA*st-ct*sA*sp);if(oz>zb    [pos]){zb[pos]=oz;let li=                 //⠀⠀⠀⠀⠀⠀⠀⠈⠙⠶⣭⣒⠩⠖⢠⣤⠄⠀⠀⠀⠀⠀⠠⠔⠁⡰⠀⣧⠀
      parseInt(L*8);o[pos]=cs[li>0?li:0]}}};var oi=0,ro=""                  //⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠛⠲⢤⣀⣀⠉⠉⠀⠀⠀⠀⠀⠁⠀⣠⠏⠀
        ;for(var y=1;y<=sh;y++){for(var x=1;x<=sw;x++)                      //⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠉⠉⠛⠒⠲⠶⠤⠴⠒⠚⠁⠀⠀
           {ro+=o[oi];oi+=1}};console.log(ro);A+=.2;
                  B+=.1};setInterval(us,50);




