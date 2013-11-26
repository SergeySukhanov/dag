var Tools = {
	toggleFilter: function(elem){
		$(elem).click(function(){
			$(this).next().slideToggle();
			$(this).toggleClass('close');
		});
		}
}