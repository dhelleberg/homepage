$(document).ready(function() {
  //jitter the pictures a bit

  var transitionEnd = "TransitionEnd";
if ($.browser.webkit) {
	vP = "-webkit-";
	transitionEnd = "webkitTransitionEnd";
} else if ($.browser.msie) {
	vP = "-ms-";
} else if ($.browser.mozilla) {
	vP = "-moz-";
	transitionEnd = "transitionend";
} else if ($.browser.opera) {
	vP = "-o-";
	transitionEnd = "oTransitionEnd";
}
  
  $("#p1").bind(transitionEnd, updateTransition, true);

  
  
  $("#pnext").click(function(){
	  //remove rotation
	  $("#p2").removeClass("p2rot");
	  $("#p2").addClass("protzero");
	  
	  $("#p1").addClass("pinvisible");  
    
	});
  
});

function updateTransition() {
	alert("done!");
	$("#p1").removeClass("p1");
	$("#p2").addClass("p1");
	$("#p2").removeClass("p2");
	
	$("#p1").removeClass("protzero");
	$("#p1").addClass("p2");
	$("#p1").addClass("p2rot");
	$("#p1").addClass("popaque");
	$("#p1").removeClass("pinvisible");
};
