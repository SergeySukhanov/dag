var Tools = {
	toggleFilter: function(elem){
		$(elem).click(function(){
			$(this).next().toggle();
			$(this).toggleClass('close');
		});
		}
}