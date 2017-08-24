var button2status = 0;

function myFunction(x) {
  if (button2status==0) {
    document.getElementById("src-1-1").style.backgroundColor = "#FFFF00";
    document.getElementById("src-1-2").style.backgroundColor = "#FFFF00";
    button2status=1;
   } else if (button2status==1) {
    document.getElementById("select-1-1").className = "dropdown-content-show";
    document.getElementById("select-1-2").className = "dropdown-content-show";
    button2status=2;
   } else {
    document.getElementById("src-1-1").style.backgroundColor = "#f0f0f0";
    document.getElementById("src-1-2").style.backgroundColor = "#f0f0f0";
    document.getElementById("select-1-1").className = "dropdown-content";
    document.getElementById("select-1-2").className = "dropdown-content";
    button2status=0;
   }
}


