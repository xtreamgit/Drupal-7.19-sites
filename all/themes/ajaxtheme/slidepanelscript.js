(function ($) {
	Drupal.behaviors.slidepanel = {
	  attach: function(context) {
		  $('[data-slidepanel]').slidepanel({
			    orientation: 'left',
			    mode: 'push'
		  });
	  }
	};
})(jQuery);
