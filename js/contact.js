// JavaScript Document
$(document).ready(function(e) {
    $(".xz").click(function(){
		$(this).addClass("xz-current");
		$(this).parent().parent().siblings().find(".xz").removeClass("xz-current");
		});
});