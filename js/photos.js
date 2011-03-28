var index = 1;
var pics = 5;
var transitionEnd = "TransitionEnd";

$(document).ready(function() {

  
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
  
  $("#p"+index).one(transitionEnd, updateTransition, true);

  
  
  $("#pnext").click(function(){
		//remove rotation
		var toremove = index+1;
		if(toremove > pics)
			toremove = 1;
	  
		var rotateindex = toremove+1;
		if(rotateindex > pics)
			rotateindex = 1;
		
		$("#p"+toremove).addClass("protzero");
			
		//brute force :(
		for(c = 1; c <= pics; c++)
			$("#p"+toremove).removeClass("p"+c+"rot");
		
	  
	    //$("#p"+index).removeClass("popaque");  
		$("#p"+index).addClass("pinvisible");  
    
	});
  
});

function updateTransition() {
	$("#p"+index).css("z-index",10-pics);

	var c = 1;
	for(c = 1; c <= pics; c++)
	{
		if(c != index)
		{
			var zindex = parseInt($("#p"+c).css("z-index"));
			var newindex = zindex+1;
			//alert("zi:"+ zindex+" for "+c + " ni: "+newindex);
			$("#p"+c).css("z-index",newindex );
		}
	}
	
	$("#p"+index).removeClass("protzero");
	
	var next = index+1;
	if(next > pics)
		next = 1;
	
	$("#p"+index).addClass("p"+next+"rot");
	
	$("#p"+index).removeClass("pinvisible");
	
	index++;
	if(index > pics)
		index = 1;
	$("#p"+index).one(transitionEnd, updateTransition, true);
	
};
