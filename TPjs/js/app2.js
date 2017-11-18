// parcourir une liste avec une boucle 

(function boucle(){

    var liste;
    var selected;
    var selectedAll;

    window.onload = function(){
		console.log("Ready");
  		liste = document.getElementById("liste"); 
  		parcourirListe();
  		selected = document.querySelector("now");
  		selectorEtSelectorAll();
        selectedAll = document.querySelectorAll(".learn");
  		lancerBoucleFor();
  		
   }

    function parcourirListe() {
    	var i = 0, text;
    	while(i < liste.children.length) {
        	console.log(liste.children[i]);
        	text=liste.children[i].textContent;

        	if (text === "pause repas") {
        	     console.log("miam");
        	}
    		i += 1;
    	}
    	
        console.log("fin de la boucle");
    }


    function selectorEtSelectorAll(){

     //    var i = 0;

    	// while(i > selectedAll.length){
    	// 	console.log(selectedAll);
    	//     i += 1;}

 	}

    // 
 	function lancerBoucleFor(){
   
 		// for (var i = 0; i < selectedAll.length;i+= 1) {
 		// 	console.log(selectedAll[i]);
 		// }

 		// if (selected.)
       
 	} 


}());