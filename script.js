jQuery(document).ready(function () {
  $(document).on("click", ".js-bi-modal-close", function (e) {
    e.preventDefault();
    closeIePopup();
  });

  $(document).on("click", ".bi-modal__inner", function (e) {
    var popup = $(".bi-modal-popup");
    if (!popup.is(e.target) && popup.has(e.target).length === 0) {
      e.preventDefault();
      closeIePopup();
    }
  });

  function msieversion() {
    var ua = window.navigator.userAgent;
    var msie = ua.indexOf("MSIE ");

    if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./)) {
      loadIePopup();
    }

    return false;
  }

  function loadIePopup() {
    $.ajax({
      url: "ie-popup.html",
      success: function (data) {
        $("body").append(data);
        setTimeout(function () {
          openIePopup();
        }, 1500);
      },
      dataType: "html",
    });
  }

  function openIePopup() {
    $(".bi-modal").fadeIn(200);
  }
  function closeIePopup() {
    $(".bi-modal").fadeOut(200);
  }
});
