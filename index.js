var noOfButtons = document.querySelectorAll(".drum").length;
// function audioSound(){
//   var audio = new Audio("sounds/tom-1.mp3");
//   audio.play();
// }


for(var i=0;i<noOfButtons;i++){
  //document.querySelectorAll("button")[i].addEventListener("click",audioSound);
  document.querySelectorAll(".drum")[i].addEventListener("click",function(){
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);



  });



}
document.addEventListener("keypress", function(event){
  //alert("Key got clicked:");
  makeSound(event.key);
});
function makeSound(key){
  switch (key) {
    case "w":
    var tom1 = new Audio("sounds/tom-1.mp3");
    tom1.play();

    break;
    case "a":
    var tom2 = new Audio("sounds/tom-2.mp3");
    tom2.play();
    break;

    case "s":
    var tom3 = new Audio("sounds/tom-3.mp3");
    tom3.play();
    break;

    case "d":
    var tom4 = new Audio("sounds/tom-4.mp3");
    tom4.play();
    break;

    case "j":
    var tom5 = new Audio("sounds/snare.mp3");
    tom5.play();
    break;

    case "k":
    var tom6 = new Audio("sounds/kick-bass.mp3");
    tom6.play();
    break;

    case "l":
    var tom7 = new Audio("sounds/crash.mp3");
    tom7.play();
    break;
    default:console.log(buttonInnerHTML);
}
}

//document.querySelector("button").addEventListener("click",handleClick);
// function handleClick(){
//   alert("I got clicked");
// }






// EARLIER CODE STARTS FROM HERE:
// var numberOfButtons = document.querySelectorAll(".drum").length;
//
// for(i=0; i<numberOfButtons; i++){
//   document.querySelectorAll(".drum")[i].addEventListener("click", function (){
//
//     var buttonInnerHTML = this.innerHTML;
//
//     makeSound(buttonInnerHTML);
//
//     buttonAnimation(buttonInnerHTML);
//
//
//
//
//
//   });
//
// }
//
// document.addEventListener("keypress", function(event){
//   makeSound(event.key);
//   buttonAnimation(event.key);
// })
//
// function makeSound(key){
//   switch (key) {
//     case "w":
//
//     var crash = new Audio("sounds/crash.mp3")
//     crash.play();
//       break;
//       case "a":
//       var kickbass = new Audio("sounds/kick-bass.mp3")
//       kickbass.play();
//       break;
//       case "s":
//       var snare = new Audio("sounds/snare.mp3")
//       snare.play();
//       break;
//       case "d":
//       var tom1 = new Audio("sounds/tom-1.mp3")
//       tom1.play();
//       break;
//       case "j":
//       var tom2 = new Audio("sounds/tom-2.mp3")
//       tom2.play();
//       break;
//       case "k":
//       var tom3 = new Audio("sounds/tom-3.mp3")
//       tom3.play();
//       break;
//       case "l":
//       var tom4 =  new Audio("sounds/tom-4.mp3")
//       tom4.play();
//       break;
//     default: console.log(buttonInnerHTML);
//
//   }
// }
// function buttonAnimation(currentKey){
// var activeButton = document.querySelector("."+ currentKey);
// activeButton.classList.add("pressed");
//
// setTimeout(function(){
//   activeButton.classList.remove("pressed");
// },100);
// }
