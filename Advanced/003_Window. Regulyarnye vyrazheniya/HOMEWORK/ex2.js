function getQueryString() {
  var args = {};
  //получение строки запроса location.search.substring(1) пропускаем символ вопроса ?
  var query = location.search.substring(1);
  console.log("query:", query);
  // разделение строки по знаку
  var pairs = query.split("&");
  console.log(pairs);

  for (var i = 0; i < pairs.length; i++) {
    var pos = pairs[i].indexOf("=");
    if (pos == -1) {
      continue;
    }
    var argname = pairs[i].substring(0, pos);
    var value = pairs[i].substring(pos + 1);
    args[argname] = value;
  }
  return args;
}

let sumFunc = function () {
  let myDiv = document.getElementById("result");
  const args = getQueryString();
  myDiv.innerHTML =
    "Результат = " + (Number.parseInt(args.a) + Number.parseInt(args.b));
};

window.addEventListener("load", sumFunc);
