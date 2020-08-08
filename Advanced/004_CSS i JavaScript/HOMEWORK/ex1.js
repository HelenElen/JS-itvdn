let exsOne = function () {
  var btn = document.getElementById("button");
  var allDiv = document.getElementsByTagName("div"); //oblect
  curr = 0;
  prev = allDiv.length;

  var setColor = function () {
    if (curr == 0) {
      allDiv[prev - 1].style.backgroundColor = "green";
    }
    for (var i = 0; i < allDiv.length; i++) {
      if (curr == i) {
        allDiv[i].style.backgroundColor = "red";
        // console.log(i);
        if (i != 0) {
          allDiv[i - 1].style.backgroundColor = "green";
        }
        if (i == allDiv.length - 1) {
          curr = -1;
          i = 0;
        }
        curr++;
        break;
      }
    }
  };

  btn.addEventListener("click", setColor, false);
};

window.addEventListener("load", exsOne, false);
