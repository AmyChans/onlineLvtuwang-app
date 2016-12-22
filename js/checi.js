// JavaScript Document
$(document).ready(function(e) {
    $(".f-3").click(function(){
		$(".zhezhao").fadeToggle(200);
		$(".mx").fadeToggle(200);
		$(".f-3").toggleClass("f-31");
		});
});

$(document).ready(function(e) {
    $(".a-l").click(function(){
		$(".all-zhezhao").fadeToggle(200);
		$(".leave").fadeToggle(200);
		});
	$(".all-zhezhao").click(function(){
		$(this).hide(100);
		$(".leave").hide(100);
		});
});

$(document).ready(function(e) {
    $(".goahead").click(function(){
		$(".all-zhezhao").hide(100);
		$(".leave").hide(100);
		});
});





























