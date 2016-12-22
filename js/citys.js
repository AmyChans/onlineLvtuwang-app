// JavaScript Document
$(document).ready(function(e) {
    var dw=$(".dingwei").offset().top;
	var rm=$(".remen").offset().top;
	var as=$(".a-s").offset().top;
	var bs=$(".b-s").offset().top;
	$("#dingw").click(function(){
		$("body,html").stop().animate({"scrollTop":dw-108},1000);
		});
	$("#rem").click(function(){
	    $("body,html").stop().animate({"scrollTop":rm-108},1000);
		});
	$("#aa").click(function(){
		$("body,html").stop().animate({"scrollTop":as-108},1000);
		});
	$("#bb").click(function(){
		$("body,html").stop().animate({"scrollTop":bs-108},1000);
		});
});






































