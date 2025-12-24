const titre = document.getElementsByClassName("title");
console.log(titre,"La récupération de l'élément via sa classe name");    //récupère trois éléments 

const demo=document.getElementById("demo");
console.log(demo,"la récupération de l'élément via son id");

demo.style.color = "red";

//demo.innerTEXT="Texte modifié via js";

demo.innerHtml = "<h1>Texte modifié via js</h1>";
const para=document.getElementsByTagName("p");
console.log(para,"La récupération de l'élément via sa balise");

const mySelector = document.querySelector("#liste_livres li:nth-child(2) .name");
console.log(mySelector,"La récupération de l'élément via query-selector");

const bookList = document.querySelectorAll( "#liste_livres .name");
console.log(bookList);

