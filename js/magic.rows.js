;(function($, undefined) {



  $.fn.magicRows = function ( options ) {

    var settings = $.extend({
      max_height: 225
    }, options);

    return this.each(function(){
      var $this = $(this);
      var $children = $this.children();

      var height = 0;
      $children.each(function(){
        var $this = $(this);
        height = height + $this.height();

        $this.height('100');

        console.log(height);

      });



    });

  };



})( jQuery );