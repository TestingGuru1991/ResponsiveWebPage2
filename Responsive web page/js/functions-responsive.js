
// building select nav for mobile width only
$(function(){
	var $window = $(window);
	var windowsize = $window.width();
        if (windowsize < 900) {
			// building select menu
			$('<select />').appendTo('nav');
		
			// building an option for select menu
			$('<option />', {
				'selected': 'selected',
				'value' : '',
				'text': 'Choise Page...'
			}).appendTo('nav select');
		
			$('nav ul li a').each(function(){
				var target = $(this);
		
				$('<option />', {
					'value' : target.attr('href'),
					'text': target.text()
				}).appendTo('nav select');
		
			});
		
			// on clicking on link
			$('nav select').on('change',function(){
				window.location = $(this).find('option:selected').val();
			});
		}
});
//end

