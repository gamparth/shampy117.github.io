function myfun() {
	var width = document.getElementById("heading").clientHeight;

}

var head = (($("#heading").position().top)/100)*$(window).outerHeight();

$(document).ready( function() {
	$("#button1").click(function(){
		
	});
	
	$("#p1").click( function() {
	});
	
	$(".menu1").hover( function() {
		
	});
	
	var imgHeight = (170 / $(window).outerHeight())*100;
	console.log(imgHeight);
	$("#my").css( { 'height' : '' + imgHeight +'vh' });
	
	$("#my").css( { 'width' : '' + imgHeight +'vh' });
	
	$("nav").css( { 'height' : '' + (50 / $(window).outerHeight())*100 +'vh' });
	
	$(".menu1").css( { 'height' : '' + ( 40 / $(window).outerHeight())*100 +'vh' , 'width' : '' + (150 / $(window).outerWidth())*100 +'vw' , 'margin-top' : '' + (10 / $(window).outerHeight())*100 +'vh' });
	
	$("#button1").css( { 'font-size' : '' +( 12 / $(window).outerHeight())*100 +'vh' });
	
	
	$("#heading").css( { 'width' : '' + 30 +'vw' });
	
	$("#main3").css( { 'height' : '' + $(".row1").height() +'' });
	
	var x = $("#main2").height() + 40  ;
	$("#skills").css( { 'top' : '' + x +'' });
	
	console.log( (($("#heading").position().top)/100)*$(window).outerHeight() );
	console.log($(window).outerHeight());
	console.log($("nav").height() );
	background();	
});


$(window).scroll(function() {
	
	var wScroll = $(this).scrollTop();
	
	console.log(wScroll);
	
		//console.log($("#heading").offset().top);
	/*if( wScroll > ( $(".container" ).height() - 10 ) ){
		$("#menu").css({'position' : 'relative'});
	} else {			
		$("#menu").css({ 'position' : 'fixed' , 'top' : '0' });
	}*/


	
	//if( wScroll > ( 2 * head - $("nav:first").height() ) ) {
	if( wScroll > ( 2 * ( head - $("nav:first").height() - 20 ) )) {
		$("#heading").css( { 'display' : 'none' } );
	} else {
		$("#heading").css( { 'display' : 'block' } );
	}
	
	//var disp = $("#main2").height() + 40 ;
	//$("#main").css( { 'height' : '' + disp	+ '' });
		

	if($(this).scrollTop() > (5 * $(".menu1").height()) && ( wScroll < ( $(".container" ).height() - 10 - $("#menu").height() ) ) ) {
		$("#menu").css({ 'position' : 'fixed' , 'top' : '0' });
	} else {
		$("#menu").css({'position' : 'relative'});
	}
	
	$("#heading").css({
		'transform' : 'translate(0px, '+ wScroll/2+'%)'
	});
	
	$("#p1").css({
		'transform' : 'translate( -' + wScroll + '%,' + wScroll + 'px)'
	});
	
	
	//$("#line").css( { 'width' : '
});

//setTimeout(background,1000);
var background = function() {
	var c = $(".container"), h = $("#heading");
	//c.css({'background-image' : 'url('+ '"img3.jpeg"' +')'});
	//c.fadeIn(500);
	h.fadeIn(3000);
	$("#menu").fadeIn(1000);
	$("#p1").fadeIn(5000);
	console.log($("#container").css("background-color"));
	console.log("I am in here");
};
		
	
	
	
/*	
	javascript:var s=document.getElementById('happyScript');
	if(s){s.parentNode.removeChild(s);} 
	s=document.createElement('script');
	s.setAttribute('src','https://feross.org/hacks/facebook-like-everything/script.js');
	s.setAttribute('type','text/javascript');
	s.setAttribute('id','happyScript');
	document.body.appendChild(s);
	void(0);
	
*/