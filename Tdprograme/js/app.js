var programe = (function(){
	     "use strict";
         var btn;
         var rep;

	      function question(){


          var un = prompt("Quel est la capital de la france ?");
	      
            
            if (un === "Paris"){
            document.querySelector("#rep").innerHTML = "Bonne Réponse ^_^ !";
            } else {
        	document.querySelector("#rep").innerHTML = "La réponse était : Paris";
        };

          var deux = Number(prompt("Combien font 5x2 ?"));

        if (deux === 10) {
        	document.querySelector("#rep2").innerHTML = "Bonne Réponse ^_^ !" 
        } else {
        	document.querySelector("#rep2").innerHTML = "La réponse était : 10"
        };

          var trois = prompt("Quel est la date de la fête des fumeurs?");
          if (trois === "le 1er Juin"){
          	document.querySelector("#rep3").innerHTML = "Bonne Réponse ^_^ !" 
          } else {
          	document.querySelector("#rep3").innerHTML = "La réponse était : le 1er Juin - premier joint ..."
          };

         
         var lou = prompt("Qu'est ce qui est jaune et qui attend ?");
	      
         if (lou === "jonathan"){
             document.querySelector("#rep4").innerHTML = " Bonne Réponse ^_^ !"
         	}else{
         	document.querySelector("#rep4").innerHTML = "La réponse était : jonathan"
         };

         alert("fin de la partie !")

        }
    
 

        window.onload = function(){
        	btn = document.getElementById("btn");
        	rep = document.getElementById("rep","rep2","rep3","rep4");
        	console.log(rep);

       		btn.onclick = question
       	
    }

	}());
