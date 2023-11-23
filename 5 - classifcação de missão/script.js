var listaDeJogadores = [];
var elementoTabela = document.getElementById("tabelaJogadores");
var elementoTabelaResumo = document.getElementById("tabelaResumo");
var quantidadeDePartidas = 0;
var quantidadeDeJogadores = 0;

//elementoTabela.addEventListener("onload", exibirNaTela());


function validarUrlImagem(imagem){
  const extensoesImagem = [".jpg", ".jpeg", ".png", ".gif", ".bmp"];
  // obtém texto do link e transforma ele em texto minúsculo
  const linkImagem = imagem.toLowerCase();

  for (let extensao = 0; extensao < extensoesImagem.length; extensao++ ){
    if(linkImagem.endsWith(extensoesImagem[extensao])) {
      return true;
    }
  }
  
  return false;  
}


function exibirNaTela() {
  elementoTabela.innerHTML = "";
  elementoTabelaResumo.innerHTML = "";
  let quantidadeDeJogadores = listaDeJogadores.length;
  
  //ordena a lista de jogadores por pontos
  listaDeJogadores.sort((jogadorA, jogadorB) => jogadorB.pontos - jogadorA.pontos);
  
  //lista as posições em ordem a partir de 1
  listaDeJogadores.forEach((jogador, index) => {
    jogador.posicao = index + 1;
  });

  listaDeJogadores.forEach((jogador, index) => {
    console.log(jogador);
    elementoTabela.innerHTML += `
        <tr>
            <td>${jogador.posicao}</td>
            <td><img src="${jogador.imagem}"></td>
            <td>${jogador.nome}</td>
            <td>${jogador.vitoria}</td>
            <td>${jogador.empate}</td>
            <td>${jogador.derrota}</td>
            <td>${jogador.partidas}</td>
            <td>${jogador.pontos}</td>
            <td><button onClick="adicionarVitoria(${index})">Vitória</button></td>
            <td><button onClick="limparPontuacaoJogador(${index})">Limpar Registros</button></td>
            <td><button onClick="removerJogador(${index})">Apagar Jogador</button></td>
          </tr>
    `;
    });
  
  elementoTabelaResumo.innerHTML += `
      <td>${quantidadeDeJogadores}</td>
      <td>${quantidadeDePartidas}</td>
  `
}



function criarJogador() {
  //verificar se player ja existe ou não
  var nomeNovoJogador = document.getElementById("campoNomeJogador").value;
  var imagemNovoJogador = document.getElementById("campoImagemJogador").value;
  
  
  if(validarUrlImagem(imagemNovoJogador)){
    listaDeJogadores.push({
    nome: nomeNovoJogador,
    imagem: imagemNovoJogador,
    vitoria: 0,
    empate: 0,
    derrota: 0,
    pontos: 0,
    partidas: 0,
    posicao: 0
    });
    document.getElementById("campoNomeJogador").value = "";
    document.getElementById("campoImagemJogador").value = "";
    exibirNaTela();
  } else {
      alert("Insira uma URL de imagem válida. Tente novamente.")
  }
}
  

function adicionarVitoria(index) {
  const jogadorVitorioso = listaDeJogadores[index].nome;
  
  listaDeJogadores.forEach((jogador, index) => {
    if (listaDeJogadores[index].nome === jogadorVitorioso) {
      jogador.vitoria++;
      jogador.pontos += 3;
      jogador.partidas++;
    } else {
        adicionarDerrota(index);
    }
  });
  
  quantidadeDePartidas++;
  exibirNaTela();    
}


function adicionarEmpate(index) {
  const qntdJogadores = listaDeJogadores.length;
    
  listaDeJogadores.forEach((jogador, index) => {
      jogador.empate++;
      jogador.pontos += 1;
      jogador.partidas++;
  });
  
  quantidadeDePartidas=+1;
  exibirNaTela();   
}


function adicionarDerrota(index) {
  const jogador = listaDeJogadores[index];
  jogador.derrota++;
  jogador.partidas++;
  exibirNaTela();
}


function limparPontuacaoJogador(index) {
  listaDeJogadores[index].vitoria = 0;
  listaDeJogadores[index].empate = 0;
  listaDeJogadores[index].derrota = 0;
  listaDeJogadores[index].partidas = 0;
  listaDeJogadores[index].pontos = 0;
  exibirNaTela();
}


function removerJogador(index) {
  listaDeJogadores.splice(index, 1);
  exibirNaTela();
}


function apagarJogadores() {
  listaDeJogadores = [];
  exibirNaTela();
}

