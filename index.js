const cats = ["Milo", "Otis", "Garfield"];


function destructivelyAppendCat(name){
  cats.push("Ralph");
}
 
function  destructivelyPrependCat(name){
    cats.unshift("Bob");
}
function destructivelyRemoveLastCat(){
    cats.pop()
}
function destructivelyRemoveFirstCat(){
    cats.shift();
}

    

function  appendCat(name){
const copyOfCats = cats.slice();

    copyOfCats.push("Broom");
    return(copyOfCats);
}
function  prependCat(name){
const copyOfCats = cats.slice();
copyOfCats.unshift("Arnold");
return (copyOfCats);
}
 function removeFirstCat(){
const copyOfCats = cats.slice();
copyOfCats.shift(0);
return (copyOfCats);
 }
function removeLastCat(){ 
    const copyOfCats = cats.slice();
     copyOfCats.pop(2);
     return (copyOfCats);
}
