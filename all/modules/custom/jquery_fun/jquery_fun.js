(function ($) {
Drupal.behaviors.jquery_fun = {
  attach: function(context, settings) {
    // add accordions to all h3 elements wrapped in a div with a class of accordion
    $('.accordion').accordion();
    $('.datepicker').datepicker();
    //$('.tabs').tabs();
  }
};

})(jQuery);