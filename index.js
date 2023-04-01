// Write your solution here!
const cats = (["Milo", "Otis", "Garfield"]);

function logCats(cats) {
  console.log("cats:", cats);
}

logcats(cats);

function destructivelyAppendCat(name){
    cats.push("Ralph"); 
}

function destructivelyPrependCat(name){
    cats.unshift("Bob");
}

function destructivelyRemoveLastCat(){
    cats.pop();
}

function destructivelyRemoveFirstCat(){
    cats.shift();
}

function appendCat(name) {
    let newCatsArray = [...cats, "Broom"];
    return newCatsArray;
  }let newCatsArray = appendCat();

  function prependCat(name) {
    let newCatsArray = ["Arnold", ...cats];
    return newCatsArray;
  }let newCatsArray2 = appendCat();

  function removeLastCat() {
    let copyOfCats=cats.slice(0,2)
return copyOfCats;
  }
  let copyOfCats2=removeLastCat();

  function removeFirstCat(){
   let copyOfCats3=cats.slice(1)
    return copyOfCats3;
  }
  let copyOfCats4=removeFirstCat();
  console.log(copyOfCats4)