
var app = (function gestionStock(){
    "use strict" 

         var a;  

   var Produit = function Produit(prod){
     
     this.ref = prod.ref;
     this.name = prod.name;
     this.price = prod.price;
     this.desc = prod.desc;
     this.color = prod.color;
     this.image = prod.image;
     }

     console.log("objet via constructeur");

     var prod1 = new Produit ({
     	ref:1,
     	name:"basket",
     	price:100,
     	desc:"Running pour courir vite !",
     	color:"rouge",
     })
     

   function addNewProduct(){
         let receiveName = document.getElementById("name");
         let receiveDesc = document.getElementById("desc");
         let receiveColor = document.getElementById("color");
         let receivePrice = document.getElementById("price");
         console.log(receiveName);

        productName = new Produit({
        ref  : id,
        name : receiveName.value,
        desc : receiveDesc.value,
        color: receiveColor.value,
        price: receivePrice.value
    });
            id += 1;
            stockArray.push(productName);
                   
         document.getElementById("addProductBtn").addEventListener("click", function()

         {
           console.log(receiveName.value);    
         });

        }


     function  supprimerProduit(){
        let receiveName = document.getElementById("name");
         let receiveDesc = document.getElementById("desc");
         let receiveColor = document.getElementById("color");
         let receivePrice = document.getElementById("price");

       document.getElementById("delProductBtn").addEventListener("click",function()


  })
     }
     
     function afficherProduit(){

        a=document.getElementById("afficher").innerHTML +=`
        <tr>
         <td>${prod1.name}</td>
         <td>${prod1.desc}</td>
         <td>${prod1.color}</td>
         <td>${prod1.price}</td>
         </tr>`; 
     }
   



   window.onload = function init(){
    console.log("ready!");
    console.log(prod1);
    addNewProduct();
    afficherProduit();


   }

}());