var isNotClicked=true;


 var loveCalculator=function () {
  var yourName = document.getElementById("firstname").value;
  var loversName = document.getElementById("lovername").value;
  var loveScore = Math.random() * 100;
  var loveFinal = Math.round(loveScore);
  if (yourName === "") {
    alert("please enter your name");
  } else if (loversName === "") {
    alert("Please enter Your partner's name.");

  } else if (isNotClicked && loveScore>70) {
    document.getElementById("lovefinal").innerHTML = yourName + " and " + loversName + " your lovescore is " + loveFinal + " % " + " and you love each other forever and ever";
    isNotclicked=false;
  }else if (isNotClicked && loveScore>50  && loveScore<=70 ) {
    document.getElementById("lovefinal").innerHTML = yourName + " and " + loversName + " your lovescore is " + loveFinal + " % " + " and you both are made for each other";
    isNotclicked=false;
  }else if (isNotClicked && loveScore>30  && loveScore<=50 ) {
    document.getElementById("lovefinal").innerHTML = yourName + " and " + loversName + " your lovescore is " + loveFinal + " % " + " and Being deeply loved by someone gives you strength, while loving someone deeply gives you courage.";
    isNotclicked=false;
  }
  else if (isNotClicked && loveScore<30 ) {
    document.getElementById("lovefinal").innerHTML = yourName + " and " + loversName + " your lovescore is " + loveFinal + " % " + "don't feel Nobody has ever measured, even poets, how much a heart can hold.";
    isNotclicked=false;
  }
  else {
    document.getElementById("lovefinal").innerHTML = yourName + " and " + loversName + " your lovescore is " + loveFinal + " % ";
  }
};
//resetbutton
function resetFunction() {
  location.reload();
}


// for time and date

function time() {
var d = new Date();
document.getElementById("tx").innerHTML = d.toLocaleTimeString();
 document.getElementById("ti").innerHTML = d.toLocaleDateString();
}
setInterval(time, 1000);
