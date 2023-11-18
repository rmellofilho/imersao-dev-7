listaFilmes = {}

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


function adicionarFilme(){
     
    // Obtém o endereço da imagem do filme do input com ID 'filme'
    const enderecoImagemFilme = document.getElementById('filme').value;
    
    // Obtém o nome do filme do input ID 'nome-filme'
    const nomeFilme = document.getElementById('nome').value;
    
    // Obtém o link do trailer para o filme do input com ID 'trailer'
    const linkTrailerFilme = document.getElementById('trailer').value;
  
    // Obtém o elemento <ul> com ID 'listaFilmes'
    const elementoListaFilmes = document.getElementById('listaFilmes');
    
    //Validar se filme está no dicionário
    if (listaFilmes[nomeFilme]) {
      return alert('Esse filme já foi adicionado na lista! Tente outro filme por favor.')
    }
  
    if (validarUrlImagem(enderecoImagemFilme)){
      
      const filme = {
        enderecoImagem: enderecoImagemFilme,
        nomeFilmeExibido: nomeFilme,
        trailerFilme: linkTrailerFilme 
        };
      
      listaFilmes[nomeFilme] = filme; // Adicionando ao dicionário listaFilmes
      

      // Cria um elemento <img> para a imagem do filme
      const novaImagem = document.createElement('img');
      novaImagem.src = enderecoImagemFilme; // Define o atributo 'src' com o endereço da imagem
      
      // Cria um elemento <span> para a imagem do filme
      const novoNome = document.createElement('span');
      novoNome.textContent = nomeFilme; 

      // Cria um elemento <a> para obter o trailer do filme
      const novoTrailer = document.createElement('a');
      novoTrailer.href = linkTrailerFilme;
      novoTrailer.textContent = "Assistir trailer";

      // Cria um elemento <button> e adicionar <a> com link e texto
      const botaoTrailer = document.createElement('button');
      botaoTrailer.appendChild(novoTrailer);
      botaoTrailer.classList.add("button-trailer");
      
      // Cria um elemento <button> para remover os filmes adicionados
      const botaoRemoverFilme = document.createElement('button');
      botaoRemoverFilme.textContent = "Remover";
      botaoRemoverFilme.classList.add("button-remover");
      botaoRemoverFilme.onclick = function() {
      // Remove o filme do dicionário
      delete listaFilmes[nomeFilme];
      // Remove o filme do HTML
      elementoListaFilmes.removeChild(divElementFilme);
    };


      // Adiciona a nova imagem à lista de filmes
      var divElementFilme = document.createElement('div');
      divElementFilme.classList.add('filme-item');


      elementoListaFilmes.appendChild(divElementFilme);
      divElementFilme.appendChild(novaImagem);
      divElementFilme.appendChild(novoNome);
      divElementFilme.appendChild(botaoTrailer);
      divElementFilme.appendChild(botaoRemoverFilme);
      
    } else {
        alert("O link de imagem fornecido é inválido!")
    }
  }
