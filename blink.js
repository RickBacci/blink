(function ( $ ) {

  $.fn.blink = function(options) {
    var duration = options;
    var _this = this;

    setInterval(function(){
      _this.toggle();
    }, duration)
    return this;
  }

}( jQuery ));


