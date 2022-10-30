 


var btn=document.getElementById('add');
var allitems=document.querySelectorAll('.list li');
var cart=document.getElementById("content");


function add(){
 		cart.innerHTML+= item.textContent;
 	}


 allitems.forEach( function(item) {
 	item.onclick= add(); 
 });

