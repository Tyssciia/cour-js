
// exercice 1 
 
function displayTextBox(p) {
	alert(p);
}

function init() {
	console.log("document ready !");


}

displayTextBox("je suis le message");
displayTextBox("je suis un autre message");

// exercice 2

function calcule(a,b)

{
	console.log(a+" "+b);	

}
 calcule("c'est une belle journée...","Pour s'exercer à JS!&");

// exercice 3 

function multiplier(a,b)
{

 if (isNaN(a * b)) 
 	return console.log(a * b) ;
  else alert("erreur");
}

multiplier(40,"lala");
multiplier(40 ,15);


// exercice 4 


var user1 = 
{ name:"patrick",
  age:30
};

var user2 =
{
	name:"cycy",
	age:27
};

function getName(user) {
	return user.name || "- nom non renseigné -";
}
function getAge(user) {

	 return user.age || "- age non renseigné -";
}

function displayUserInfo(user) {
	console.log('L'utilisateur se nommant ${})

}


console.log(getName(user1));
console.log(getAge(user1));
console.log(displayUserInfo())
