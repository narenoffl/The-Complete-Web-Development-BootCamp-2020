var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);

  function handleClick() {
    var buttonInnerHTML = this.innerHTML;
    buttonAnimation(buttonInnerHTML);

    switch (buttonInnerHTML) {
      case "w":
        var tom1 = new Audio("sounds/tom-1.mp3")
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
        var sna = new Audio("sounds/snare.mp3");
        sna.play();
        break;

      case "k":
        var kic = new Audio("sounds/crash.mp3");
        kic.play();
        break;

      case "l":
        var cra = new Audio("sounds/kick-bass.mp3");
        cra.play();
        break;

      default:
        console.log(buttonInnerHTML);
        break;





    }

    function buttonAnimation(click){
        var activeButton = document.querySelector("." +click);

        activeButton.classList.add("pressed");
        setTimeout(function(){
          activeButton.classList.remove("pressed");
        },100);
    }


  }

}









/*
var audio = new Audio("sounds/tom-1.mp3");
audio.play(); */
