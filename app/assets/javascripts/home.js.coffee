$(document).ready ->
  $('body').localScroll()
	height = $(window).height()
	$("#bg").css "height", height + "px"
	return