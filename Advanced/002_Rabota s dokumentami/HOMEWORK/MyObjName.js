// Пустой объект, который будет выполнять функцию протсранства имен.
// Это единственное глобальное имя, которое будет вмещать все остальные имена.
// Правило: имя модуля должно быть связано с именем файла

var MyObjName = {};

MyObjName.name = "Elena";

MyObjName.startMyObjName = function (paragraphs) {
  for (var i = 0; i < paragraphs.length; i++) {
      paragraphs[i].innerHTML = "PARAGRAPH";
  }
};

//после отрисовки всей страницы запускаем функцию
window.onload = function () {
    var paragraphs = document.getElementsByTagName('p');
    MyObjName.startMyObjName(paragraphs);
}