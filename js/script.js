let mole = document.querySelectorAll(".mole");
let start = document.querySelector(".start");
let score = document.getElementById("score");
let time = document.getElementById("time");
let model = document.querySelector(".modal");
let easy = document.querySelector(".e")
let midiam = document.querySelector(".m")
let hard = document.querySelector(".h")
let lavel = document.querySelector(".lavel");
let timers = document.querySelector(".timerCount");


// Audio Sset

let hit1 = new Audio("../css/hit.mp3");
let hit2 = new Audio("../css/hit2.mp3");
let startAudio = new Audio("../css/start.mp3");
let anotherClick = new Audio("../css/ding.mp3")
let showAudio = new Audio("../css/peep.mp3");

// audio random

function hitAudio(){
    let random = 1 + (Math.floor(Math.random() * 2))
    if(random == 1){
        hit1.play();
    }else{
        hit2.play()
    }
    
    
}

easy.addEventListener("click", function(e){
    e.preventDefault();
    
    model.style.display = "none";
    lavel.innerText = 1;
    timers.innerText = 30;
    anotherClick.play();
})

midiam.addEventListener("click", function(e){
    e.preventDefault();
    
    model.style.display = "none";
    lavel.innerText = 2;
    timers.innerText = 20;
    anotherClick.play();
})

hard.addEventListener("click", function(e){
    e.preventDefault();
    
    model.style.display = "none";
    lavel.innerText = 3;
    timers.innerText = 10;
    anotherClick.play();
})


function gameControl(a, b){
    let random3 = a + (Math.floor(Math.random() * 4));
        let random1 = a + (Math.floor(Math.random() * 5));
        let interval1 = setInterval(() => {
            
            let random2 = 1+ (Math.floor(Math.random() * 8));
            
            let randomMole = mole[random2];
            randomMole.style.top = "0%";
            randomMole.innerHTML = " ";
            showAudio.play();
            setTimeout(() => {
                randomMole.style.top = "100%"
                randomMole.innerHTML = ".";
            }, `${random3}00`);

        }, `${random1}00`);

        
        score.innerText = 0;
        time.innerText = b;
        let timeValue = parseInt(time.innerText);
        let interval2 = setInterval(() => {
            timeValue --;
            time.innerText = timeValue;
        }, 1000);
        
        setTimeout(() => {
            clearInterval(interval1);
            clearInterval(interval2);

            let yourScore = document.querySelector(".enterName");
            let inputScore = document.getElementById("inputScore");
            let scoreVal = score.innerText

            anotherClick.play()
            yourScore.style.display = "flex";
            inputScore.value = scoreVal;
        }, `${b}500`);
}

start.addEventListener("click", function(){
    startAudio.play()
    if(lavel.innerText == "1"){
        gameControl(8, 30)
    }else if(lavel.innerText == '2'){
        gameControl(7, 20)
    }else if( lavel.innerText == '3'){
        gameControl(6, 10)

    }

    
})


function tap(hole){

    if(hole.childNodes[3].innerText !== "."){
        hitAudio()
        let scoreValue = parseInt(score.innerText);
        score.innerText = scoreValue + 1;

        let mole = hole.childNodes[3];
        mole.style.top = "100%";
    }
}