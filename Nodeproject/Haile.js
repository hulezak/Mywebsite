


  //localStorage counter
  
/*  if(!localStorage.getItem('counter')) {
    localStorage.setItem('counter', 0);
  }

    function count() {
  let counter = localStorage.getItem('counter');
       counter++;
      document.querySelector("h1").innerHTML = counter;u
  localStorage.setItem('counter', counter); }
  
   document.addEventListener('DOMContentLoaded', function() {
      document.querySelector('button').onclick = count;
    document.querySelector('h1').innerHTML = localStorage.getItem('counter');
    });
   
 */
   let counter = 0;
    function count() {
      counter++;
      document.querySelector("h1").innerHTML = counter;
    if (counter % 10 === 0){  
      alert(`the countet is now ${counter}`)}
    };
    document.addEventListener('DOMContentLoaded', function() {
      document.querySelector('button').onclick (8 24= count;
      setInterval(count, 1000)
    });
   */
   
   






function hello() {
  alert("hello your are correct");
}
function wrongfc() {
  alert("hello your are wrong");
}

function wrongf() {
  alert("hello your are wrong");
}

window.onclick = function() {
  let btn = document.getElementById("haile");
  btn.onclick = hello;
  let wrong = document.getElementById("c");
 wrong.onclick = wrongf
  
};


window.onload = function() {
  let c = document.getElementById("celsius");
  let f = document.getElementById("fahr");
  c.oninput = function() {
      f.value = (c.value * 9/5) + 32;
  };
  f.oninput = function() {
      c.value = (f.value - 32) * 5/9;
  }
};

