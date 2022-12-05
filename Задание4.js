//Задание3
function everySecond(from, to) {
    let current = from;
    
    let timerId = setInterval(function() {
    console.log(current);
    if (current == to) {
      clearInterval(timerId);
    }
    current++;
   }, 1000);
  }
  
 everySecond(5, 15);