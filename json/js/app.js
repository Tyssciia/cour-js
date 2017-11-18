/** @namespace */
const fonctionParamReturn1 = (function(){
	"use strict";

/**
 *une fonction pipeau pour tester la documentation automatique 
 * @author Laetitia Cadet <laetitia77.100@live.fr>
 * @alias fonctionParamReturn1.one
 * @return {undefined}
 */

	 const one = function one(){
		alert("hello Simplon !");

		console.log(one);

	};

	const hello = function hello(){

		console.log("hello");
	};

	const dummyReturn = function dummyReturn(p){
		return p;
	};

    const foo = function foo(){
    	return ("bar");
    	console.log(foo);
    	var x = foo();
    }

	
	  window.onload = function init(){
	    let res;

	  	res = one();
	  	res = hello();
	  	res = dummyReturn();
	  	res = foo();


	  };
}());

