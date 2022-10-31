'use strict';

let designItem = document.querySelector('.design'); 
let videoItem = document.querySelector('.video');
let accessoriesItem = document.querySelector('.accessories');
let appsItem = document.querySelector('.apps');
let currentwidthScreen = window.innerWidth;
let designItemTextNum3 = designItem.lastElementChild.lastElementChild
                            .previousElementSibling.lastElementChild.
                            firstElementChild;
let acsItemText3 = accessoriesItem.lastElementChild.firstElementChild
                    .lastElementChild.
                    firstElementChild;
let apsItemText5 = appsItem.lastElementChild.lastElementChild
                    .lastElementChild.firstElementChild;
let videoItemText4 = videoItem.lastElementChild.lastElementChild.lastElementChild
                    .firstElementChild.innerHTML;

function changeVideoText(dataScreen) {
    if (videoItemText4.length > 205) {
        videoItem.lastElementChild.lastElementChild.lastElementChild.style.overflow = 'hidden';
    }
    if (dataScreen >= 1000) {
        designItemTextNum3.innerHTML = designItemTextNum3.innerHTML.replace('Оникс и Цитрус', 'Оникс и<br>Цитрус');
        videoItem.firstElementChild.innerHTML = 'Сканер отпечатка в экране';
        acsItemText3.innerHTML = 'Для любителей роскоши, модель S10+ будет выпускаться в керамическом корпусе черного и белого цветов.';
        apsItemText5.innerHTML = apsItemText5.innerHTML.replace('всеми смарт-устройствами', 'всеми<br>смарт-устройствами');
    } else {
        designItemTextNum3.innerHTML = designItemTextNum3.innerHTML.replace('Оникс и<br>Цитрус', 'Оникс и Цитрус');
        videoItem.firstElementChild.innerHTML = 'Съемка видео';        
        acsItemText3.innerHTML = `Обширный ассортимент чехлов лля каждой модели. Цветовая гамма, отличное качество, премиальные материалы и дополнительные 
        возможности призваны удовлетворить даже самый притязательный вкус.`;
        apsItemText5.innerHTML = apsItemText5.innerHTML.replace('всеми<br>смарт-устройствами', 'всеми смарт-устройствами');
    }
}

window.addEventListener('resize', (event) => {
    changeVideoText(event.target.innerWidth);        

  });

document.addEventListener('DOMContentLoaded', () => {
    changeVideoText(currentwidthScreen);
})
