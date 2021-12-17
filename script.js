function switchh(){

   var mo = document.getElementById("switch").checked;
   if(mo == true){
    console.log("Input is checked");
    document.getElementById("style").href="style.css";
  } else {
    console.log("Input is NOT checked");
    document.getElementById("style").href="stylewhite.css";
    
   
  }
}