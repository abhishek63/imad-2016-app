console.log('Loaded!');

// change the content of the webpage 
var x = document.getElementById('text');
x.innerHTML = 'This is the my new webpage';


//move image to right 
var img = document.getElementById('madi');

var right=10;
function moveright(){

	right = right+10;

	img.style.marginLeft =right+"px";


}
img.onclick= function(){

		// let image scroll left to right
		var interval= setInterval(moveright,100);


};