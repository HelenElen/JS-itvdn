(function () {
  // Определяем анонимную функцию.
  // Отсутствие имени означает отсутствие глобального имени
  // Тело функции
  // здесь можно объявлять любые переменные - это не приведет к созданию глобальных переменных.

  var changeP = function (paragraphs) {
    for (var i = 0; i < paragraphs.length; i++) {
      paragraphs[i].innerHTML = "PARAGRAPH";
    }
  };

  window.onload = function () {
    var paragraphs = document.getElementsByTagName("p");
    changeP(paragraphs);
  };
})(); // конец определения функции и ее вызов.
