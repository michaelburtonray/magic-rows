;(function($) {
  var _$this = $(this);


  $.fn.magicRows = function ( options ) {
    // support multiple elements
    if (this.length > 1){
      this.each(function() { $(this).magicRows(options) });
      return this;
    }

    // private variables
    var images_array = [];
    var row = [];

    // settings
    var settings = $.extend({
      max_height: 225
    }, options);



    // private methods




    // public methods
    this.init = function() {

      console.log(this);

      var $children = $(this).children();

      $children.each(function(){
        var $this = $(this);

        images_array.push({
          aspect_ratio: $this.width() / $this.height(),
          height: $this.height(),
          index: $this.index(),
          width: $this.width()
        });

      });

      console.log(['images_array',images_array]);

      return this;
    }

    this.trigger = function() {
      console.log(this.width());
      // Row queue

      // while(images_array.length > 0) {

      //   var image = images_array.shift();

      //   row.push(image);

      //   var denominator

      //   for(var i = 0;i < row.length;i++) {
      //     denominator += row[i];
      //   }

      //   // var height = 


      // }

      return this;
    }

    return this.init().trigger();

  };



})(jQuery);