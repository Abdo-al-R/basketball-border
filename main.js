let newGame = document.querySelector(".new-btn");

let score = document.querySelector(".score");
let add1 = document.getElementById("add-1");
let add2 = document.getElementById("add-2");
let add3 = document.getElementById("add-3");

let score2 = document.getElementById("score2");
let addOne = document.getElementById("add-one");
let addTwo= document.getElementById("add-two");
let addThree = document.getElementById("add-three");




let count = 0 
    
add1.addEventListener("click", (eo) => {
    count  +=  1 
   score.textContent = count
});

add2.addEventListener("click", (eo) => {   
   count  +=  2
   score.textContent = count
});

add3.addEventListener("click", (eo) => {
    count  +=  3
   score.textContent = count
});



let num = 0
addOne.addEventListener("click", (eo) => {
    num  +=  1 
   score2.textContent = num
});

addTwo.addEventListener("click", (eo) => {   
    num  +=  2
   score2.textContent = num
});

addThree.addEventListener("click", (eo) => {
    num  +=  3
   score2.textContent = num
});






window.onload = function(){
    let minute = 00;
    let second = 00;
    let OutputMinutes = document.getElementById("min");
    let OutputSeconds = document.getElementById("seconds");
    let buttonStart = document.getElementById("btn-start");
    let buttonStop = document.getElementById("btn-stop");
    let Interval;

    buttonStart.addEventListener('click', () => {
        clearInterval(Interval);
        Interval = setInterval(startTimer, 1000);  // millisecond 10 = 0.01 second
    });

    buttonStop.addEventListener('click', () => {
        clearInterval(Interval);
    });

    newGame.addEventListener ("click", (eo) => {
        count = 0
        num = 0
        score.textContent = count
        score2.textContent = num 

        clearInterval(Interval);
        minute = "00";
        second = "00";
        OutputSeconds.innerHTML = second;
        OutputMinutes.innerHTML = minute;
    
    })

    function startTimer(){
        second++;
        if(second <= 9){
            OutputSeconds.innerHTML = "0" + second;
        }

        if(second > 9){
            OutputSeconds.innerHTML = second;
        }

        if(second > 59){
            minute++;
            OutputSeconds.innerHTML = "0" + minute;
            second = 0;
            OutputMinutes.innerHTML = "0" + minute;
        }

        if(minute > 9){
            OutputMinutes.innerHTML = minute;
        }
    }
}














