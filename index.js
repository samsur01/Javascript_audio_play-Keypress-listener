
for(var x=0; x<3; x++){
    var selButton = document.querySelectorAll(".myButton")[x].addEventListener("click",function(){
        var text = this.innerHTML;
        audioPlay(text);
        playAnimation(text);
    })
}

document.addEventListener("keypress",function(event){
    var press = event.key;
    audioPlay(press);
    playAnimation(press);
});

function audioPlay(text){
    switch(text){
        case "a":
            var audio = new Audio("Audio/a.mp3");
            audio.play();
            break
        case "b":
            var audio = new Audio("Audio/B.mp3");
            audio.play();
            break

        case "c":
            var audio = new Audio("Audio/C.mp3");
            audio.play();
            break
    }
}
function playAnimation(text){
    var sellectButton = document.querySelector("."+text);
    sellectButton.classList.add("anim");
    setTimeout(function(){
        sellectButton.classList.remove("anim");
    },3000)

}




var count = 0;
document.addEventListener("keypress",function(event){
    count++;
    var text = event.key;
    document.querySelector("p").innerHTML="You Have Clicked = "+count;
})