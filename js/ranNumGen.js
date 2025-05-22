let guess = Number(window.prompt("guess the number from 1 to 50"));


let min = 1;
let max = 50;
let ranGen =  Math.floor(Math.random() * (max - min + 1)) + min;

console.log(ranGen);


if(ranGen > guess){
    console.log(`you wrote small value ${ranGen}` );
}else if(ranGen < guess){
  console.log(`you wrote big value ${ranGen}`);
}else{
    console.log("Hooray! You guessed it right! 🎉");
}






