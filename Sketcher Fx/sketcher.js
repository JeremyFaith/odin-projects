start(13);

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

$('.tile').mouseenter(function(){ 

    $( this ).addClass( "color" );

});
    
/*
$('.tile').mouseleave(function(){

    $( this ).removeClass( "color" ); 

});
*/    
}

$('#clear').click(function() {
    var response = prompt("Enter the number of tiles on a side");
    var n = parseInt(response);
    $('.container').empty();
    start(n);
});