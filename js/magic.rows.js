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
      max_height: 225,
      margin: 6
    }, options);



    // private methods




    // public methods
    this.init = function() {

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

      return this;
    }

    this.trigger = function() {
      var parent_width = this.width();

      // Row Loop
      while(images_array.length > 0) {

        // current image
        var image = images_array.shift();

        // push onto row
        row.push(image);

        // calculate height
        var denominator = 0;

        for(var i=0; i < row.length; i++) {
          denominator += row[i].aspect_ratio;
        }

        var whitespace = settings.margin * row.length * 2;

        var height = (parent_width - whitespace)/denominator;

        if(height <= settings.max_height) {

          // iterate through row array and set height
          for(var i=0; i < row.length; i++) {
            var index = row[i].index;

            // set the height for the image in the row array

            console.log($(this).height);

            $(this).children().get(index).style.height = height + 'px';
            $(this).children().get(index).style.margin = settings.margin + 'px';

            // $(this).children().index(index).height(height);
          }

          // clear our row array
          row = [];
        }

      }

      return this;
    }

    return this.init().trigger();

  };

})(jQuery);