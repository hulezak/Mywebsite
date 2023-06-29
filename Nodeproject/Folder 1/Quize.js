 
  //vibrate
  /*function example1() {
    // Vibrate for 500ms
    navigator.vibrate(300);
};*/

    function change() {
    document.querySelector('h1').innerHTML = "completed";
    }



    function hello() {
    document.querySelector('#check').innerHTML = "you are correct";
    audio.play();
  
    document.querySelector("#check").style.background = "green";
       
    
    ;
    }
    let counter = 0;
    function count() {
      counter++;
      alert(counter)
    }

    /*function wrong() {
     
  
     document.querySelector('#check').innerHTML = "you are not correct";
    document.querySelector("#check").style.background = "red";
   navigator.vibrate(300);
    } */
document.addEventListener('DOMContentLoaded', 
 function() {
   document.querySelectorAll('.wrong').forEach (function(button) {
     button.onclick= function() {
document.querySelector('#check').innerHTML = "you are not correct";
    document.querySelector("#check").style.background = "red";

   navigator.vibrate(300);
   
    } 
   })
 });
 
 
 document.addEventListener('DOMContentLoaded', 
 function() {
   document.querySelectorAll('.correct').forEach (function(button) {
     button.onclick= function() {
document.querySelector('#check').innerHTML = "you are correct";
    document.querySelector("#check").style.background = "green";
    const audio = new Audio("correct-answer.mp3");
   audio.play();

    } 
   })
 });