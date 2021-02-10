
'use strict';
/*Восстановить порядок книг.*/
const book = document.querySelectorAll('.book');
book[1].after(book[0]);
book[0].after(book[4]);
book[4].after(book[3]);
book[3].after(book[5]);
book[5].after(book[2]);
/* Заменить картинку заднего фона на другую из папки image*/
const bgImg = document.querySelector('body');

bgImg.style.backgroundImage = 'url(./image/you-dont-know-js.jpg)';
/* Исправить заголовок в книге 3(Получится - "Книга 3. this и Прототипы Объектов")*/
const h2Target = document.getElementsByTagName('h2');
h2Target[2].innerHTML = '<a> Книга 3. this и Прототипы Объектов</a> '
/* Удалить рекламу со страницы */
const rem = document.getElementsByTagName('div')
rem[6].remove();
/* Восстановить порядок глав во второй и пятой книге(внимательно инспектируйте индексы элементов, поможет dev tools)*/
const elems = document.querySelectorAll('li');
elems[3].after(elems[6]);
elems[6].after(elems[8]);
elems[49].before(elems[55]);
elems[50].after(elems[48]);
/* в шестой книге добавить главу “Глава 8: За пределами ES6” и поставить её в правильное место*/
const newElem = document.createElement('li');
newElem.textContent = 'Глава 8: За пределами ES6';
elems[25].append(newElem);














