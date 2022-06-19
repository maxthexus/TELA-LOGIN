var imgsite = new Array("imagens/cow.svg", "imagens/dog.svg", "imagens/alien.svg","imagens/cat.svg","imagens/astronauta.svg")
var numrandom = Math.floor(Math.random() * imgsite.length)


document.getElementById("esquerda-img").src = imgsite[numrandom];
