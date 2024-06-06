let xb = 300;
let yb = 200;
let diametro = 25;
let xvb = 6;
let yvb = 6;
let raio = diametro/2

let xr = 5;
let yr = 150;
let lr = 10;
let ar = 100;
let xri = 585;
let yri = 150;
let colidiu = false;

let imagem;
let ponto;
let raquete;
let fundo;

let meuspontos =0;
let pontosdooponente =0;



function setup() {
  createCanvas(600, 600);
}

function draw() {
  image(imagem,0,0,600,600);
  mostrabola();
  mexebola();
  quicabola();
  mostraraquete(xr, yr);
  mostraraquete(xri, yri);
  mexeraqueteinimigo();
   mexeraquete();
  quicaraquetebola(xr, yr);
  quicaraquetebola(xri, yri);
  pontos();
  placar();
  texto();
}

function preload(){
  imagem = loadImage("pikachu.jpg");

  raquete= loadSound("raquete.wav");
}


function mostrabola() {
  circle (xb,yb,diametro);
  fill (`#C217DF`)
}

function mexebola(){
 xb += xvb;
  yb += yvb; 
}

function quicabola(){
   if (xb + raio > width || xb - raio < 0){
    xvb *= -1;
  }
  
  if (yb + raio > height || yb - raio < 0){
    yvb *= -1;
  }
}

function mostraraquete(x,y) {
  rect(x,y,lr,ar);
}

function mexeraquete() {
  if (keyIsDown(UP_ARROW))
  yr -= 10;
  
  
  if (keyIsDown(DOWN_ARROW))
  yr += 10;
}


function mexeraqueteinimigo() {
  if (keyIsDown(87)) //s
  yri -= 10;
  
    
  if (keyIsDown(83)) //w
  yri += 10;
}

function quicaraquetebola(x,y){
  colidiu = collideRectCircle(x,y,lr,ar,xb,yb,raio);
}
  if(colidiu){
    xvb *= -1;
    raquetada.play();
  }

function pontos(){
  if (xb > 590){
    meuspontos += 1
    ponto.play();
  }


 if (xb < 10){
  pontosdooponente += 1
   ponto.play();
  }
}
function placar(){
stroke ("pink");
  textAlign(CENTER);
  textSize(20);
  fill("violet");
  rect(150,10,40,20);
  fill("white");
  text(meuspontos, 170,12);
  fill("violet");
 rect(430,10,40,20);
  fill("white");
  text(pontosdooponente, 450,12);
}

function texto(){
  let frase = "MEUS PONTOS"
  let xf =90;
  let yf =40;
  textSize(20);
  textAlign(LEFT, TOP);
  fill("#C50BE5");
  text(frase, xf, yf);
  
  
  let frase2 = "PONTOS OPONENTE"
  let xf2 =330;
  let yf2 =40;
  textSize(20);
  textAlign(LEFT, TOP);
  fill("#9C27B0");
  text(frase2, xf2, yf2);
}

