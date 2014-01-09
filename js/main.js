$('.navbar').waypoint(function(direction) 
{
	if (direction == 'down')
	{
		$('.navbar').addClass('navbar-fixed-top');
		$('.site').css('margin-top', '+=50');
	}
  	else
  	{
  		$('.navbar').removeClass('navbar-fixed-top');
  		$('.site').css('margin-top', '-=50');
  	}
});