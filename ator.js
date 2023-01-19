//Variáveis da Posição do Ator;
let Yator = 366;
let Xator = 100;
let colisao = false
let meusPontos = 0;

function mostraAtor(){
  image(imagemDoAtor, Xator, Yator, 30, 30);
}


function movimentaAtor(){
  if (keyIsDown(UP_ARROW)){
    Yator -= 3;
  }
  if (keyIsDown(DOWN_ARROW)){
    if (podeSeMover()){
      Yator += 3;
    }
  }
}

function verificaColisao(){
  //collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
  for (let i = 0; i < imagemCarros.length; i++){
   colisao = collideRectCircle(Xcarros[i], Ycarros[i], comprimentoCarro, alturaCarro, Xator, Yator, 15)
    if (colisao){
      voltaAtor();
      sonDaColisão.play();
      if (pontosMaiorQueZero()){
        meusPontos -= 1;
      }
    }
  }
}

function voltaAtor(){
  Yator = 366;
}

function incluiPontos(){
  textAlign(CENTER);
  textSize(25);
  fill(color(255,0,255));
  text(meusPontos, width / 3, 26);
}

function marcaPontos(){
  if (Yator < 10 ){
    meusPontos += 1;
    sonDoPonto.play();
    voltaAtor();
  }
}

function pontosMaiorQueZero(){
  return meusPontos > 0;
}

function podeSeMover(){
  return Yator < 366;
}
