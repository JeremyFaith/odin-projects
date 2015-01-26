

function start(n) {
	var n;

	var side = (630/n);
	var length = side + 'px';
	     
	var container = $('.container');
	   
	for (var i=1; i <= n*n; i++) {            
	  container.append('<div class="tile"></div>');                 
	}

	var tile = $('.tile');
	 	tile.css({width:length, height:length});  
      
}


$('#clear').click(function() {
    var response = prompt("Enter the number of tiles per side");
    var n = parseInt(response);
    $('.container').empty();

    $(currentButton).css('color','red');

	$('.container').removeClass('cursorDraw');
	$('.container').removeClass('cursorErase');

    start(n);

});


$('#erase').click(function() {

	buttonColor('#erase');
		
	$('.tile').off('mouseenter');

	$('.tile').on('mouseenter', function(){
		
		$(this).css('background', '#2c3050');

	});

});


$('#draw').click(function() {

	buttonColor('#draw');

	$('.tile').off('mouseenter');

	$('.tile').on('mouseenter', function(){

		var color = $('#picker').val();
		$(this).css('background', color);
		
	});	

});


$('#random').click(function() {

	buttonColor('#random');

	$('.tile').off('mouseenter');

	$('.tile').on('mouseenter', function(){ 

		var numRand = Math.floor(Math.random() * 256);
		
  		$(this).css('background', 'rgb(' + (numRand*3)%255 + ',' + (numRand*7)%255 +',' + numRand +')');
 
	});

});


$('#picture').click(function() {

	buttonColor('#picture');

	$('.tile').off('mouseenter');

	$('.tile').on('mouseenter', function(){ 

    	$(this).fadeTo('fast', 0);	

	});	

});


$('#pattern').click(function() {

	buttonColor('#pattern');

	$('.tile').off('mouseenter');

	$('.tile').on('mouseenter', function(){ 

		$(this).css('background', 'url("images/carbon.png") center');
		// Pattern carbon -  http://subtlepatterns.com/tag/carbon/
	});	
});

var currentButton;	

function buttonColor(button) {

	$(currentButton).css('color','red');
	 currentButton = button;
	$(currentButton).css('color','white');

	if (button === "#erase" || button === "#picture") {

		$('.container').removeClass('cursorDraw');
		$('.container').addClass('cursorErase');
	
	}else {

		$('.container').removeClass('cursorErase');
		$('.container').addClass('cursorDraw');
	}

}

start(16);