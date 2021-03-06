// DOM Event Model1 Level0: basic: HTML Element의 Event Attribute에 
// Event Handler(함수)를 설정하는 방식 
// JavaScript Code(DOM API)로만 작성하기. 
var tabBox = {
	/*_liSelected: null,*/
	init: function() {
		/*window.onload = this._onWindowLoad.bind(this);*/
		window.addEventListener('load', this._onWindowLoad.bind(this));
	},
	_onTabClicked: function() {
	// console.log(this);
	/*if(tabBox._liSelected != null){
		tabBox._liSelected.className = '';
	}*/	
	
	// unselected
	var lisSelected = document.getElementsByClassName('selected');
	lisSelected.length == 1 && (lisSelected[0].className = '');
	
	// select
	this.className = 'selected';
	// tabBox._liSelected = this;
	
	},
	_onWindowLoad: function(){
		/*	document.getElementById("tab01").onclick = this._onTabClicked;
			document.getElementById("tab02").onclick = this._onTabClicked;
			document.getElementById("tab03").onclick = this._onTabClicked;
			document.getElementById("tab04").onclick = this._onTabClicked;
			document.getElementById("tab05").onclick = this._onTabClicked;*/
		var divTabBox = document.getElementsByClassName("tab-box")[0];
		var ul = divTabBox.childNodes[1];
		var liTabs = ul.getElementsByTagName("li");
		
		for(var i = 0; i < liTabs.length; i++){
			liTabs[i].addEventListener("click", this._onTabClicked)
		}
	}
}