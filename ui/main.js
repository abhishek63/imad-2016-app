console.log('Loaded!');

// change the content of the webpage 
var x = document.getElementById('text');
x.innerHTML = 'This is the my new webpage';

var button = document.getElementById('submit');
var data=0;
button.onclick=function(){

		var text1 = document.getElementById('text1');
		data = data+1;
		text1.innerHtml = data.toString();
};