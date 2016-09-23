console.log('Loaded!');

// change the content of the webpage 
var x = document.getElementById('text');
x.innerHTML = 'This is the my new webpage';


//move image to right 

var img = document.getElementById('madi');

//when image click then this function will work
img.onclick= function(){

		// let image little bit bigger

		img.style.marginLeft ='500px';
		console.log("clicked");


};