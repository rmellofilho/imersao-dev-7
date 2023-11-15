var listaFilmes = [
  "https://upload.wikimedia.org/wikipedia/pt/thumb/1/13/John_wick_ver3.jpg/250px-John_wick_ver3.jpg",
  "https://upload.wikimedia.org/wikipedia/pt/7/72/John_Wick_Chapter_2.png",
  "https://upload.wikimedia.org/wikipedia/pt/e/e0/John_Wick_3_Parabellum.png",
  "https://images.justwatch.com/poster/304815974/s592/john-wick-chapter-4",
  "https://infinitaeph.com.br/wp-content/uploads/2018/10/20128877.jpg"
];

var listaNomeFilmes = ["John Wick 1", "John Wick 2", "John Wick 3", "John Wick 4", "Matrix"];

var isLoaded = true;

function inicializarCatalogo() {
var container = document.getElementById("secaoCatalogo");
container.innerHTML = "";

for (var i = 0; i < listaNomeFilmes.length; i++) {
  var filmeImagemSrc = listaFilmes[i];
  var tituloFilme = listaNomeFilmes[i];

  var divElement = document.createElement('div');
  divElement.classList.add('filme-item');

  var imgElement = document.createElement('img');
  imgElement.src = filmeImagemSrc;

  var figCaption = document.createElement('figcaption');
  figCaption.textContent = tituloFilme;

  divElement.appendChild(imgElement);
  divElement.appendChild(figCaption);

  container.appendChild(divElement);
}
}

function adicionarFilmeCatalogo() {
let srcImage = document.getElementById("url").value;
let tituloFilme = document.getElementById("nome").value;

if (!srcImage.endsWith("jpg") && !srcImage.endsWith("jpeg")) {
  alert("Endereço de imagem inválido. Insira um endereço de imagem válido no formato jpg ou jpeg.");
  return;
}


if (listaNomeFilmes.includes(tituloFilme)) {
  alert("Este filme já foi adicionado à lista.");
  return;
}

listaNomeFilmes.push(tituloFilme);
listaFilmes.push(srcImage);

document.getElementById("url").value = "";
document.getElementById("nome").value = "";

adicionarParaCatalogo(); // Adiciona o filme ao catálogo
}

document.addEventListener("DOMContentLoaded", function() {
inicializarCatalogo(); // Preenche o catálogo inicial
});

document.getElementById("formFilme").addEventListener("submit", function(event) {
event.preventDefault();
adicionarFilmeCatalogo();
});

function adicionarParaCatalogo() {
var container = document.getElementById("secaoCatalogo");
container.innerHTML = "";
inicializarCatalogo();
}
