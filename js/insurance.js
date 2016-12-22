// JavaScript Document
$(document).ready(function(e) {
    $(".check").click(function(){
		$(this).addClass("check-current").parent().siblings().find(".check").removeClass("check-current");
		});
	
	$(".sm-title").click(function(){
		$(this).toggleClass("sm-title1");
		$(".sm-content").toggle();
		});
});













