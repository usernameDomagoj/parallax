// jquery
$(document).ready(function() {

  //pozivanje funkcije
  $(window).scroll(function() {
    parallax();
  })

  //sama parallax funkcija, u ovom slucaju za tri elementa na tri nacina
  function parallax() {
    var wScroll = $(window).scrollTop();

    //pomicanje backgrounda
    $('.container').css('background-position', 'center ' + (wScroll*0.2) + 'px')

    //pomicanje div.box elementa prema dole i u desno
    $('.box').css({'top': + (wScroll*0.008) + 'em',
                  'margin': 20 + (wScroll*0.009) + 'px'})

    //povecavanje velicine pozadine da bi se dobio zoom efekt
    $('.containerTwo').css('background-size', (100 + (wScroll*0.005) + '%') + '100%')
  }
});

/*
// plain js
document.addEventListener("scroll", () => {
  const wScroll = window.scrollY;
  
  //pomicanje backgrounda
  const contOne = document.querySelector('.container');
  contOne.style.backgroundPosition = 'center ' + (wScroll*0.2) + 'px';

  //pomicanje div.box elementa prema dole i u desno
  const box = document.querySelector('.box');
  box.style.top = + (wScroll*0.008) + 'em';
  box.style.margin = 20 + (wScroll*0.009) + 'px';

  //povecavanje velicine pozadine da bi se dobio zoom efekt
  const contTwo = document.querySelector('.containerTwo');
  contTwo.style.backgroundSize = (100 + (wScroll*0.005) + '%') + '100%';

});
*/