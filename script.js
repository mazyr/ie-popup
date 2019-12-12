jQuery(document).ready(() => {

  function isIE() {
    var ua = window.navigator.userAgent;
    var msie = ua.indexOf('MSIE '); // IE 10 or older
    var trident = ua.indexOf('Trident/'); //IE 11

    return (msie > 0 || trident > 0);
  }

  if (!isIE()) {
    alert('Not IE browser');
  }

  $('.close-notice').click(function(){
    $('.browser-notice').remove();
  });

  setTimeout(function(){
    if (!isIE()) {
      alert('Not IE browser');
    };


  }, 5000)

})