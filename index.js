

for(var i = 0; i<document.querySelectorAll(".drum").length;i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click",function () {
        this.style.color = 'black';

        let btnClicked = this.innerHTML;
        makeSound(btnClicked);
        btnAnimation(btnClicked);

    })

}



document.addEventListener("keydown",function(event) {
    makeSound(event.key);
    btnAnimation(event.key);
})


function makeSound(key) {
    switch (key) {
        case 'w' :
            console.log("W is Pressed");
            var audio = new Audio('sounds/tom-1.mp3');
            audio.play();  
            break;
        case 'a' :
            console.log("a is Pressed");
            var audio = new Audio('sounds/tom-2.mp3');
            audio.play();  
            break;
        case 's' :
            console.log("s is Pressed");
            var audio = new Audio('sounds/tom-3.mp3');
            audio.play();  
            break;
        case 'd' :
            console.log("d is Pressed");
            var audio = new Audio('sounds/tom-4.mp3');
            audio.play();  
            break;
        case 'j' :
            console.log("j is Pressed");
            var audio = new Audio('sounds/crash.mp3');
            audio.play();  
            break;
        case 'k' :
            console.log("W is Pressed");
            var audio = new Audio('sounds/kick-bass.mp3');
            audio.play();  
            break;
        case 'l' :
            console.log("W is Pressed");
            var audio = new Audio('sounds/snare.mp3');
            audio.play();  
            break;


}
}

function btnAnimation(currentKey) {
    var activeBtn = document.querySelector("."+currentKey);
    activeBtn.classList.add('pressed');

    setTimeout(function() {
        activeBtn.classList.remove('pressed');
    },100)
     
}