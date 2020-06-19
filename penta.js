//CO2
if (value>=380 & value<=1000)  
k = 1-(value-380)*0.000532;
else if (value>1000 & value<=2000)  
k = 0.67-(value-1000)*0.00037;
    else if (value>2000)  k = 0.3-(value-2000)*0.0001;
if (k>0) return k*10 
    else return 0;
    
//Temperature
if(value < 21 ){
    k = (9*value-90)/100
}
  else if(value > 25 ){
    k = (412.5-12.5*value)/100
}
   else if(21 <= value <= 25 ){
    k =1;
}
if (k>0) return k*10 
    else return 0;
    
//Humidity
if(value > 60 ){
    k = (value*(-2.5)+250)/100
}
  else if(value < 40 ){
    k = (value*(2.56)-2.56)/100
}
   else if(40 <= value <= 60 ){
    k=1;
}
if (k>0) return k*10 
    else return 0;
    
//Light
if(value <= 350 ){
    k = 0;
}
  else if(value >350 && value <= 500 ){
    k = 0.7;
}
   else 
    k=1;
if (k>0) return k*10 
    else return 0;
    
//Noise
if(value >= 80 ){
    k = 0;
}
else if(value <= 20 ){
    k = 1;
}
  else {
    k = (value*(-1.66)+133)/100
}
if (k>0) return k*10 
    else return 0;
