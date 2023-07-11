let ifoda = "";

function ekranaYaz(button) {
  let oxirgiElement = ifoda[ifoda.length - 1];
  let basilganElement = button.innerHTML;
  if (
    basilganElement == "+" ||
    basilganElement == "*" ||
    basilganElement == "-" ||
    basilganElement == "." ||
    basilganElement == "/"
  ) {
    if (
      oxirgiElement !== "+" &&
      oxirgiElement !== "-" &&
      oxirgiElement !== "/" &&
      oxirgiElement !== "*" &&
      oxirgiElement !== "." &&
      ifoda.length !==0
    ) {
      ifoda = ifoda + basilganElement;
    }
  }
  if (
    basilganElement == "0" ||
    basilganElement == "1" ||
    basilganElement == "2" ||
    basilganElement == "3" ||
    basilganElement == "4" ||
    basilganElement == "5" ||
    basilganElement == "6" ||
    basilganElement == "7" ||
    basilganElement == "8" ||
    basilganElement == "9"
  ) {
    ifoda = ifoda + basilganElement;
  }
  if(basilganElement == '='){
      ifoda =eval(ifoda);
  }
  document.getElementsByClassName("current-operand")[0].innerHTML = ifoda;
}

function birniOchir() {
  ifoda = ifoda +'';
  ifoda = ifoda.slice(0, ifoda.length - 1);
  document.getElementsByClassName("current-operand")[0].innerHTML = ifoda;
}

function toliqOchir() {
  ifoda = "";
  document.getElementsByClassName("current-operand")[0].innerHTML = ifoda;
}


