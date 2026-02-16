//Check whether a string contains all the vowels a, e, i, o, u

let text = "Education is awesome";

if(
  text.includes("a")&&
  text.includes("e")&&
  text.includes("i")&&
  text.includes("o")&&
  text.includes("u")
){
  console.log("all vowel of present");
} else{
  console.log("missing some vowel");
}