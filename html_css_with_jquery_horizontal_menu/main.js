$(document).ready(function () {
  $('nav#menu > ul > li').each(function (idx) {
    if( $(this).find('ul').size() > 0) {
      $(this).mouseover(function () {
        $(this).children('ul').css('display', 'block');
      }).mouseleave(function () {
        $(this).children('ul').css('display', 'none');
      });
    }
  });
});
