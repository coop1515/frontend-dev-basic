// jQuery로 작성하기 

var tabBox = {
	init: function() {
		/*window.addEventListener('load', this._onWindowLoad.bind(this));*/
		$(this._onWindowLoad.bind(this)
		);
	},
	_onTabClicked: function() {
	/*var lisSelected = document.getElementsByClassName('selected');*/
	var $lisSelected = $('.selected');
	$lisSelected.length == 1 && ($lisSelected[0] = ''); //(lisSelected[0].className = '')
	console.log($lisSelected[0]);
	
	// select
	this.className = 'selected';
	
	},
	_onWindowLoad: function(){
		/*var divTabBox = document.getElementsByClassName("tab-box")[0];*/
		var divTabBox = $('.tab-box')[0];
		var ul = divTabBox.childNodes[1];
		/*var liTabs = ul.getElementsByTagName("li");*/
		var liTabs = $("li");
		
		for(var i = 0; i < liTabs.length; i++){
			liTabs[i].addEventListener("click", this._onTabClicked)
			
			
		}
	}
}
/*
$(function(){
	$("ul li")
	.click(function(){
		$("ul li").removeClass("selected");
		$(this).addClass("selected");
	})
});*/