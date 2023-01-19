// Variáveis das Imagens e dos Sons;
let imagemDaEstrada;
let imagemDoAtor;
let imagemCarro;
let imagemCarro2;
let imagemCarro3;

// Sons
let sonDaTrilha;
let sonDaColisão;
let sonDoPonto;

function preload(){
  
  imagemDaEstrada = loadImage("Imagens/estrada.png"); 
  imagemDoAtor = loadImage("Imagens/ator-1.png");
  imagemCarro = loadImage("Imagens/carro-1.png");
  imagemCarro2 = loadImage("Imagens/carro-2.png");
  imagemCarro3 = loadImage("Imagens/carro-3.png");
  imagemCarros = [imagemCarro, imagemCarro2, imagemCarro3, imagemCarro, imagemCarro2, imagemCarro3];
  sonDaTrilha = loadSound("sons/trilha.mp3");
  sonDaColisão = loadSound("sons/colidiu.mp3");
  sonDoPonto = loadSound("sons/pontos.mp3");
}

