var easy_time = 180;
var easy_timer = setInterval(timer, 1000);

function timer(){
    document.getElementById("timer").innerHTML = easy_time;
    
    if(easy_time <= 0) {
        // alert("Game Over");
        clearInterval(easy_timer);

        document.getElementById("timer").innerHTML ="";
        return;
    }

    easy_time--;
}


// var normal_time = 5;
// var normal_timer = setInterval(timer2, 1000);

// function timer(){
//     document.getElementById("timer2").innerHTML = normal_time;
    
//     if(normal_time <= 0) {
//         alert("Game Over");
//         clearInterval(normal_timer);

//         document.getElementById("timer2").innerHTML ="";
//         return;
//     }
    
//     normal_time--;
// }



// var hard_time = 5;
// var hard_timer = setInterval(timer3, 1000);

// function timer(){
//     document.getElementById("timer3").innerHTML = hard_time;
    
//     if(hard_time <= 0) {
//         alert("Game Over");
//         clearInterval(hard_timer);

//         document.getElementById("timer3").innerHTML ="";
//         return;
//     }
    
//     hard_time--;
// }