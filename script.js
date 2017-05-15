
var currentNumber = []; // holds the current number being typed
var terms = []; // holds the numbers and operators entered
var state = {current: "zero"}; // stores state (waiting for numbers/operators, calculating, etc)

function clickNumeral(elem) {
  switch (state.current) {
    case "zero":
      // The LCD is zeroed and a number has been pressed
      // Push the number onto the currentNumber array
      if (elem.id == "dec") {
        currentNumber.push("0");
        currentNumber.push(".");
      } else {
        currentNumber.push(elem.id);
      }
      // Show the number in the LCD
      document.getElementById("lcd").value = currentNumber.join("");
      // Change the state
      state.current = "num";
      break;
    case "num":
      // a number is being entered and a number key was pressed
      if (elem.id == "dec" && currentNumber.indexOf(".") == -1) {
        currentNumber.push("."); // push a decimal only if one is not already there
      } else {
        currentNumber.push(elem.id);
      }
      // Update the LCD
      document.getElementById("lcd").value = currentNumber.join("");
      break;
    case "operator":
      // A numeral was pressed after an operator
      // Push the number onto the currentNumber array
      if (elem.id == "dec") {
        currentNumber.push("0");
        currentNumber.push(".");
      } else {
        currentNumber.push(elem.id);
      }
      // Show the number in the LCD
      document.getElementById("lcd").value = currentNumber.join("");
      // Change the state
      state.current = "num";
      break;
  }
  return elem;
}

function clickOperator(elem) {
  switch (state.current) {
    case "zero":
      // The LCD is zeroed and they pressed an operator
      switch (elem.id) {
        case "oadd":
          // do
          break;
        case "osubtract":
          // do
          break;
        case "omultiply":
          // do
          break;
        case "odivide":
          // do
          break;
        case "oclearentry":
          // do
          break;
        case "oallclear":
          // do
          break;
      }
      // push zero onto the terms array
      // change the state
      break;
    case "num":
      // A number is being entered and they pressed an operator
      break;
    case "operator":
      // do something
      break;
  }
  return elem;
}

