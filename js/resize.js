var waitForFinalEvent = (function () {
  var timers = {};
  return function (callback, ms, uniqueId) {
    if (!uniqueId) {
      uniqueId = "Don't call this twice without a uniqueId";
    }
    if (timers[uniqueId]) {
      clearTimeout (timers[uniqueId]);
    }
    timers[uniqueId] = setTimeout(callback, ms);
  };
})();

$(window).resize(function () {
  waitForFinalEvent(function(){
    $('#ChevronUpIcon, #ChevronDownIcon').attr('style', 'font-size:28px; z-index: 0;');
    $('#MenuIcon, #CloseIcon').attr('style', 'font-size:34px');
    $('.NavigationMenu').attr('style', '');
    // $(document).ready(function(){
    //   location.reload(true);
    // });
    // alert('Resize...');
    //...
  }, 200, "some unique string");
});