/*
 * Special bits to take note of:
 *  - Code is assigned to an object in Drupal.behaviors.
 *  - Code that adds behaviors is wrapped in the 'attach' property.
 *  - Anything that has been attached to should get a new CSS class.
 *  - Run Drupal.attachBehaviors() to attach behaviors to new HTML.
 */
(function ($) {
  Drupal.behaviors.interact = {
    attach: function (context, settings) {

      // Fading in and out.
      $('h1:not(.interact-processed)').each(function () {
        $(this).addClass('interact-processed');
        $(this).hover(
          function () {
            $('.region-content').fadeOut(1000);
          },
          function () {
            $('.region-content').fadeIn(1000);
          }
        );
      });

      // What happens when you click on a paragraph after attaching behaviors? Can you fix that?
      $('p').click(function () {
        $('span').after('<h1>This is a new heading</h1>');
       // Drupal.attachBehaviors();
      });

    }
  };
})(jQuery);