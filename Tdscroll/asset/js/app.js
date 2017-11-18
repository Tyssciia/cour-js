var td = (function(){
	var items;

	function scroller() {
   console.log(this)
   var cible, elementCibl;
   cible = this.getAttribute("data-target");
   elementCibl = document.getElementById(cible);
   window.smoothScroll(elementCibl,500);
}

	function ecouterClicks()
	{
		var i

		for (i=0; i < items.length; i += 1){
			items[i].onclick = scroller;
		}
	}
	window.onload = function(){
		items = document.querySelectorAll("#nav .item");
		console.log(items);
		ecouterClicks();
	};

}());