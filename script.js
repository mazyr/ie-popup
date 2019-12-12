jQuery(document).ready(function(){

  function isIE() {
    var ua = window.navigator.userAgent;
    var msie = ua.indexOf('MSIE '); // IE 10 or older
    var trident = ua.indexOf('Trident/'); //IE 11

    return (msie > 0 || trident > 0);
  }

  setTimeout(function(){
    if (isIE()) {
      $('.browser-notice').show();
  
      $('.close-notice').click(function(){
        $('.browser-notice').remove();
      });
  
    } else {
      alert('Not IE browser');
      $('.browser-notice').remove();
    }

  }, 5000);

})