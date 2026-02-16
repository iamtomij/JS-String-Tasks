// Count how many times a string has the letter a

let text = "Bangladesh is an amazing area";
let count = 0;

for (let i = 0; i< text.length; i++){
  if(text[i]==="A"){
    count++;
  }
}


console.log("Total a:", count)