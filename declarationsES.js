function exmepleVar(){
    var x=5;      //var est de scope fonction 
    if(true){
        var x=10;
       console.log(x,"La valeur de x à l'intérieur de la condition");
    }
    console.log(x,"La valeur à l'extérieur de la condition");
}
exmepleVar();

function exempleLet(){
    let y=5;      /*let est scope block (les modifications appliquées dans un bloc
                                ne sont pas visibles sur les autres blocs*/
    if(true){
        let y=10;
       console.log(y,"La valeur de x à l'intérieur de la condition");
    }
    console.log(y,"La valeur à l'extérieur de la condition");
}
exempleLet();

function exempleConst(){
    const z=5;   //const est de scope block
    console.log(z);
}
exempleConst();