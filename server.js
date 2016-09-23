var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));





var articles={

'article-one':{
	title:'Article-one | Hello world',
	heading:'Article-one',
	content:`<p>
				I am in haldia Institute of technology. I am in haldia Institute of technology.
				I am in haldia Institute of technology.
				I am in haldia Institute of technology.I am in haldia Institute of technology.

			</p>

			<p>
				I am in haldia Institute of technology. I am in haldia Institute of technology.
				I am in haldia Institute of technology.
				I am in haldia Institute of technology.I am in haldia Institute of technology.

			</p>
			<p>
				I am in haldia Institute of technology. I am in haldia Institute of technology.
				I am in haldia Institute of technology.
				I am in haldia Institute of technology.I am in haldia Institute of technology.

			</p>`
},
'article-two':{
	title:'Article-two | Hello world',
	heading:'Article-one',
	content:`<p>
				I am in haldia Institute of technology. I am in haldia Institute of technology.
				I am in haldia Institute of technology.
				I am in haldia Institute of technology.I am in haldia Institute of technology.

	

			</p>`
},

'article-three':{
	title:'Article-three | Hello world',
	heading:'Article-one',
	content:`<p>
				I am in haldia Institute of technology. I am in haldia Institute of technology.
				I am in haldia Institute of technology.
				I am in haldia Institute of technology.I am in haldia Institute of technology.

			</p>`

}
};


function createTemplate(data){

	title = data.title;
	content= data.content;
	heading = data.heading;



	var htmlTemplate=`
		<!DOCTYPE html>
	<html>
	<head>
		<title>
			${title}
		</title>
		<meta name="viewport" content="width=device-width,intial-scale=1"/>

		<style>
		.container{
			max-width: 800px;
			font-family: sans-serif;
			padding-left: 50px;
			padding-right: 50px;
			padding-top: 50px;
			background: burlywood;
			margin:0 auto;
		}


		</style>
	</head>
	<body>

		<div class="container">

			<div>
				<a href=".\">Home</a>
			</div>
			<hr>

			<div>
				<h1>
					${heading}
				</h1>
			</div>

			<div>
				${content}

				</p>
			</div>



		</div>

	</body>
	</html>

	` ;
	return htmlTemplate;

}





app.get('/:articleName',function(req,res){
	

	var articleName = req.params.articleName;

	res.send(createTemplate(articles[articleName]));
});



app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

app.get('/ui/main.js',function(req,res){
   res.sendFile(path.join(__dirname,'ui','main.js')); 
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
