(function ($) {
Drupal.behaviors.jquery_fun = {
  attach: function(context, settings) {
    $('.tabs').tabs();
  }
};

})(jQuery);