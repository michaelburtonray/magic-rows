;(function($, undefined) {



  $.fn.magicRows = function (options) {
    
      var defaults = {
        items_per_row: 5      
      }

      var options = $.extend({}, defaults, options || {});


      console.log(['items_per_row',options.items_per_row]);



    return this;

  }

}(jQuery));