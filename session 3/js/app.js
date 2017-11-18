var Reflex = function Reflex(fabrication){
	this.objectif = fabrication.objectif;
	this.nom = fabrication.nom;
	this.filtre = fabrication.filtre;
	this.chargeur = fabrication.chargeur;
};

var r1 = new Reflex({
	objectif: "800mm",
	nom: "canon",
	filtre: "sepia",
	chargeur: "250v",
});


var r2 = new Reflex({
	objectif:"50mm",
	nom : "nikon",
	filtre: "anti-UV",
	chargeur: "280v",
});

function Reflex (){
	this.objectif = "50mm";
}


 console.log("première instance de Reflex ----->>>");
    console.log(r1);

    console.log("deuxième instance de Reflex ----->>>");
    console.log(r2);

    