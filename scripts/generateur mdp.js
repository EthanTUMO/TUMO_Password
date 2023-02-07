var passwordoutput =  document.getElementById('passwordoutput');
var tableauminuscule = ["a","z","e","r","t","y","u","i","o","p","q","s","d","f","g","h","j","k","l","m","w","x","c","v","b","n"];
var tableaumajuscule = ["A","Z","E","R","T","Y","U","I","O","P","Q","S","D","F","G","H","J","K","L","M","W","X","C","V","B","N"];
var tableaunumero = [1,2,3,4,5,6,7,8,9,0];
var tableausymbole=["$","%","^","&","!","@","#",":",";","'",",",".",">","/","*","-",",","|","?","~","_","=","+"];


function generateur() {
	

  var tableauxregroupé = [].concat( //www.bouzid-krita.com
    lowercase.checked ? tableauminuscule : [], 
    uppercase.checked ? tableaumajuscule : [],
    numbers.checked ? tableaunumero : [],
    symbols.checked ? tableausymbole : []);

	


  var passwordLength = parseInt(document.getElementById('taille').value);
  var mdp = ''; 
  

  if (tableauxregroupé.length<1 && passwordLength< 12) {

  
    alert('Tu dois sélectionner au moins un critère');
	 alert('Le minimum est de 12 caractères');


   
  }
  

   else if (tableauxregroupé.length>=1 && passwordLength< 12) {
   
    alert('Le minimum est de 12 caractères');
	
    
  }
  ///// si l'utilisateur saisi aucun critère
  
   else if (tableauxregroupé.length<1 && passwordLength< 12) {
	alert('Tu dois séléctionner au moins un critère');
   
    
  }
  
   
  else if (tableauxregroupé.length<1 && passwordLength>= 12) {
   
	alert('Tu dois séléctionner au moins un critère');
   
    
  }
  
  
  
  
  else {

	  for (i = 0; i < passwordLength; i++) {
		mdp+= tableauxregroupé[Math.floor(Math.random() * tableauxregroupé.length)]; 
	  }
   passwordoutput.value = mdp; 
  }


}

 function copie(){
	 
	 if (document.getElementById('passwordoutput').value==0) {
		 
		 alert('Case vide , il n y a rien à copier')
	 }
	 else {
passwordoutput.select();
  document.execCommand('copy');
  alert('Copié') 
  }
 }
 
//www.bouzid-krita.com 
 
 function best() {
document.getElementById('taille').value=16;
 
	document.getElementById('lowercase').checked =true;
	document.getElementById('uppercase').checked =true;
	document.getElementById('numbers').checked =tru;
	document.getElementById('symbols').checked =true;
	
	
	 
//www.bouzid-krita.com
generateur();
 }

  

 
 
 
 
 