 function calculate(val) {
     let display = document.getElementById('display');
     if(val == '=') {
         display.value = eval(display.value);
     }
     else if(val == 'DEL') {
        display.value = '';
     }
     else{
         display.value += val;
     } 
 }