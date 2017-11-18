var tpClick = (function(){
"use strict";
 var btns;




function afficherMessage() {

	alert("tu as réussi ! ^_^ ")
}   


 function associerClickBtns(){

     var i;
	for (i = 0; i < btns.length;i+= 1){
		console.log(btns[i]);
		console.log(typeof btns[i]);
		btns[i].onclick = afficherMessage;
	}
}
    
   function activerIcone(){
   	var i, users = document.querySelectorAll(".user")

   	function changerCouleur(evt){


   	console.log(evt);
   	// evt est objet représentant l'évènement click
   	var user = evt.target || evt.srcElement;
   	// je stocke ici l'élément html clické 
   	console.log(user); 
   	// on aurait pu aussi y accéder avec le mot-clé this
   	// this représeterait ici la source du click , cad un user !!!!
   	user.classList.toggle("is-active");

   }


   for (i = 0; i < users.length; i += 1) {

   	users[i].onclick = changerCouleur;

  }

    window.onload = function() {
    	console.log(evt);
    	 btns = document.querySelectorAll(".btn");
    	 associerClickBtns();
    	  activerIcone();
    };

    return {
       btn: afficherMessage
  	}

}());
