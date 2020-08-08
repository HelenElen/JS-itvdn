window.onload = function () {
  var someText = {};
  var myButton = (document.getElementById("mybutton").onclick = function () {
    someText = document.getElementById("mytext").value;
    console.log(someText);

    var getParseValue = function (ind) {
      var myObj = {};

      var elements = someText.split(ind);

      for (var i = 0; i < elements.length; i++) {
        myObj[i] = elements[i];
      }

      switch (ind) {
        case "+":
          document.getElementById("result").innerHTML =
            Number.parseInt(myObj[0]) + Number.parseInt(myObj[1]);
          break;
        case "-":
          document.getElementById("result").innerHTML =
            Number.parseInt(myObj[0]) - Number.parseInt(myObj[1]);
          break;
        case "*":
          document.getElementById("result").innerHTML =
            Number.parseInt(myObj[0]) * Number.parseInt(myObj[1]);
          break;

        default:
          document.getElementById("result").innerHTML =
            Number.parseInt(myObj[0]) / Number.parseInt(myObj[1]);
          break;
      }
    };

    var operator = function () {
      var operators = ["+", "-", "/", "*"];
      for (var i = 0; i < operators.length; i++) {
        var indO = someText.indexOf(operators[i]);
        if (indO >= 0) {
          return getParseValue(operators[i]);
        }
      }
    };
    operator();
  });
};
