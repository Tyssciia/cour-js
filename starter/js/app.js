const app =(function(){
	"use strict";
	// en mode strict "console.log(this);" // afficher
	
	var input, t = []; 


	const observer = function(){
		document.getElementById("my_btn").onclick = action1;
		input = document.getElementById("my_input");
	};
     
    
    const action1 = function(evt){
    	console.log(evt.type);
    	console.log(evt);
        document.getElementById("my_list").innerHTML += '<li>' + input.value + '</li>';
        t.push(input.value);
       	console.log(t);
        return 

    };

	window.onload = function init (){
         // console.log(this) affiche window (déclanche load)
         observer();
	}

}());