//Variáveis dos Carros;
let Ycarros = [40, 96, 150, 210, 270, 318];
let velocidadeCarros = [4, 3, 2.5, 5, 4, 3.5];
let Xcarros = [600, 600, 600, 600, 600, 600];
let comprimentoCarro = 50;
let alturaCarro = 40;

function mostraCarro(){
  for (let i = 0; i < imagemCarros.length; i++){
    image(imagemCarros[i], Xcarros[i], Ycarros[i], comprimentoCarro, alturaCarro);
  }
}

function movimentaCarro(){
  for (let i = 0; i < imagemCarros.length; i++){
    Xcarros[i] -= velocidadeCarros[i];
  }
}

function retornaCarros(){
  for (let i = 0; i < imagemCarros.length; i++){
    if (passouTodaTela(Xcarros[i])){
        Xcarros[i] = 500;
    }
  }
}

function passouTodaTela(Xcarro){
  return Xcarro < -80;
}
