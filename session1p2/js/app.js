var session1 = (function easyDom (){

	var list, resultat;
  

	
	function identifierLesDiv(user){
       var i = 0;
    
       while (i < list.length) {
       		console.log(list[i]);
       		list[i].innerHTML = i + 1;
       		resultat.innerHTML += list[i].id;
        	i += 1;
       }

	}
    
  function colorDiv(element){
    console.log("elemenbt clické =>");
    if(element.style.background === "" ||
      element.style.background === "white")
    {

      element.style.background = "purple ";}
      else{
      element.style.background= "white";
      }
    }

  

    window.onload = function(){
    	console.log("ReAdY");
    	list = document.querySelectorAll("#div_1, #div_2, #div_3, #div_4, #div_5");
    	resultat = document.getElementById("resultat");
    	
    	console.log(list);
    	identifierLesDiv();
      
    }

    return {
        exo5: identifierLesDiv,
        exo6: colorDiv
      };

}());
