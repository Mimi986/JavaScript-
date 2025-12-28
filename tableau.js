const myarray = ["banane","pomme","cerise","poire",4]
console.log(myarray,"mon premier tableau");

const cars= new Array("BMW","Reunot","peugeot");
console.log(CaretPosition,"mon deuxième tableau");

console.log("La longueur de mon tableau",myarray.length);

console.log(myarray[0]);
myarray[0]="orange";
console.log(myarray[0]);

console.log(myarray.toString());

const nombres=[2,3,4];
const nvtab= [1,...nombres,5];   // les ... sont un spread_operator permettant de créer la copie d'un tableau (nombres ici) 
console.log(nvtab);

console.log(myarray.join("/"));

let voitures=cars.pop();
console.log(voitures);
console.log(cars);
let fruit=myarray.push("kiwi");
console.log(myarray);

const boys=["walid","kaz","naim"];
const girls=["feriel","asma","mounia"];

const children=boys.concat(girls);

console.log(children);

const semaine=["lun","mra","mer","jeu","ven","sam","ddi"];
semaine.pop();
console.log(semaine.push("dim"));   //affiche l'index de l'élément qu'on a ajouté 
semaine[1]="mar";
console.log(semaine);
console.log(semaine.length);

const x=["banane","orange","pomme","mangue"];
//x.splice(2,0,"citron","kiwi");   //à l'id 2 on supprime rien et on ajoute citron et kiwi 
console.log(x);
x.splice(2,1,"citron","kiwi");  //à l'id 2 on supprime un élément et on ajoute citron et kiwi
console.log(x);

const y=["fraises","pastèque","poire","mandarine"];
const slice_y = y.slice(2);   //coupe les deux premiers éléments du tableau
console.log(slice_y);

const z=["fraises","pastèque","poire","mandarine"];
const slice_z=z.slice(0,1);  //on récupère à partir de l'id 0 et on coupe à partir de l'id 2 
console.log(slice_z);