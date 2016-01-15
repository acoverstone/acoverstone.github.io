$(function(){
	setInterval("rotateImages()", 4000);
});


function rotateImages(){
	var currentPhoto = $("#picture div.current");
	var nextPhoto = currentPhoto.next();
	if(nextPhoto.length == 0)
		nextPhoto = $("#picture div:first");

	currentPhoto.removeClass("current").addClass("previous");
	nextPhoto.css({opacity: 0.0}).addClass("current")
				.animate({opacity: 1.0}, 1000, function(){
					currentPhoto.removeClass("previous");
				});

}