'use strict';
// IFFE
(function () {
  // dom
  const btnShowFeedback = document.querySelector('.btn-show-feedback');
  const feedbackPopup = document.forms[3];
  const btnCloseFeedback = feedbackPopup.querySelector('.btn-close');
  feedbackPopup.classList.add('feedback-hidden');

  // обработчики
  const onBtnTogglePopup = function () {
    feedbackPopup.classList.toggle('feedback-hidden');
  };

  btnShowFeedback.addEventListener('click', onBtnTogglePopup);
  btnCloseFeedback.addEventListener('click', onBtnTogglePopup);

  // яндекс-карты
  ymaps.ready(init);
  function init(){
    const myMap = new ymaps.Map( // создаем новую карту
        'map',
        {
         center: [59.939014, 30.326763],
         zoom: 16
        },
        {
          searchControlProvider: 'yandex#search'
        }
      ),
      myPlacemark = new ymaps.Placemark( // создаем свою метку на картк
        [59.938631, 30.323055],
        {
        balloonContent: 'Gllacy'
        },
        {
          iconLayout: 'default#image',
          iconImageHref: 'img/map-pin.svg',
          iconImageSize: [80, 140],
          iconImageOffset: [-39, -139]
      }
      );
    myMap.geoObjects.add(myPlacemark); //добавляем свою метку на карту
  };
})();
