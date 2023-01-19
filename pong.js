//Variáveis da Bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 22;
let raio = diametro/2;

//Variáveis da Velocidade da Bolinha
let velocidadeXbolinha = 6;
let velocidadeYbolinha = 6;

//Variáveis da Raquete
let xRaquete = 10;
let yRaquete = 150;
let bRaquete = 10;
let hRaquete = 90;

//Variáveis da Velocidade da Raquete2
let velocidadeYraquete2;

//Variáveis da Raquete do Oponente //A chamarei de raquete2
let xRaquete2 = 580;
let yRaquete2 = 150;
let bRaquete2 = 10;
let hRaquete2 = 90;

//Placar do jogo
let meusPontos = 0;
let pontosDoOponente = 0;

//Sons do Jogo
let ponto;

//Variáveis do Erro do Oponente
let chanceDeErrar = 0;

function preload() {
  soundFormats('mp3', 'ogg');
  ponto = loadSound('trilha.mp3');
}

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  desenhaBolinha(); //Desenha a Bolinha na tela
  movimentaBolinha(); //Faz a bolinha se movimentar
  colisaoBolinha(); //Verifica se a bolinha colidiu com a borda
  desenhaRaquete(xRaquete, yRaquete);
  desenhaRaquete(xRaquete2, yRaquete2);
  movimentoRaquete(); //movimenta a raquete
  movimentoRaquete2(); //movimenta a raquete do adversário
  //colisaoRaquete();
  colisaoBiblioteca(xRaquete, yRaquete);
  colisaoBiblioteca(xRaquete2, yRaquete2);
  mostraplacar();
  placar();
  calculaChanceDeErrar();
  bolinhaNaoFicaPresa();
}

function desenhaBolinha(){
  circle(xBolinha, yBolinha, diametro);
}

function movimentaBolinha(){
  xBolinha += velocidadeXbolinha;
  yBolinha -= velocidadeYbolinha;
}


function bolinhaNaoFicaPresa(){
    if (xBolinha - raio < 0){
    xBolinha = 23
    }
}


function colisaoBolinha(){
  if (xBolinha + raio > width || xBolinha - raio < 0){
    velocidadeXbolinha *= -1;
  }
  if (yBolinha + raio > height || yBolinha - raio < 0){
    velocidadeYbolinha *= -1;
  }
}

function desenhaRaquete(x,y){
  rect(x, y, bRaquete, hRaquete);
}

function movimentoRaquete(){
  if (keyIsDown(UP_ARROW)){
    yRaquete -= 10;
  }
  if(keyIsDown(DOWN_ARROW)){
    yRaquete += 10;
  }
}

function movimentoRaquete2(){
  velocidadeYraquete2 = yBolinha - yRaquete2 - bRaquete / 2 - 30;
  yRaquete2 += velocidadeYraquete2 + chanceDeErrar 
}

function calculaChanceDeErrar() {
  if (pontosDoOponente >= meusPontos) {
    chanceDeErrar += 1
    if (chanceDeErrar >= 39){
    chanceDeErrar = 43
    }
  } else {
    chanceDeErrar -= 1
    if (chanceDeErrar <= 35){
    chanceDeErrar = 38
    }
  }
}
  
  function colisaoRaquete(){
  if (xBolinha - raio < xRaquete + bRaquete && yBolinha - raio < yRaquete + hRaquete && yBolinha + raio > yRaquete){
    velocidadeXbolinha *= -1;
  }
}

function colisaoBiblioteca(x,y){
  colidiu = 
  collideRectCircle(x, y, bRaquete, hRaquete, xBolinha, yBolinha, raio);
  if (colidiu){
    velocidadeXbolinha *= -1;
    
  }
}

function mostraplacar(){
  stroke(255);
  textSize(20);
  textAlign(CENTER);
  fill(color(128, 0, 1280));
  rect(133, 9, 35, 20);
  fill(250);
  text(meusPontos, 150, 26);
  fill(color(128, 0, 1280));
  rect(432, 9, 35, 20);
  fill(250);
  text(pontosDoOponente, 450, 26);
}

function placar(){
  if (xBolinha > 590){
    meusPontos += 1;
    
  }
  if (xBolinha < 10){
    pontosDoOponente += 1;
    
  }
}
