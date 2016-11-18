
var express = require('express');
var morgan = require('morgan');
var path = require('path');
var Pool = require('pg').Pool;

var crypto = require('crypto');

//database library
var config = {
    
    user : 'abhishek63',
    host : 'db.imad.hasura-app.io',
    port : '5432',
    database : 'abhishek63',
    password : process.env.DB_PASSWORD
    
};




var app = express();
app.use(morgan('combined'));



		var articles ={

				'article-one' : {

					title :'article-one | Abhishek',
					heading:'Artile-one',
					date:'15th september',
					content:
							`<p>
								India clinched a memorable victory in their 900th ODI match as they beat New Zealand in the 1st ODI of 5-match ODI series at Dharamsala. After winning the toss, India decided to bowl first. Except for Tom Latham, all New Zealand top order batsmen failed against Indian bowling. With the help of some brave lower-order partnerships, New Zealand managed to score 190 in 43.5 overs (190/10).

							</p>`

				},

				'article-two' : {

					title :'article-two | Abhishek',
					heading:'Artile-2',
					date:'15th september',
					content:
							`<p>
								India clinched a memorable victory in their 900th ODI match as they beat New Zealand in the 1st ODI of 5-match ODI series at Dharamsala. After winning the toss, India decided to bowl first. Except for Tom Latham, all New Zealand top order batsmen failed against Indian bowling. With the help of some brave lower-order partnerships, New Zealand managed to score 190 in 43.5 overs (190/10).

							</p>`

				},

				'article-three' : {

					title :'article-three | Abhishek',
					heading:'Artile-3',
					date:'15th september',
					content:
							`<p>
								India clinched a memorable victory in their 900th ODI match as they beat New Zealand in the 1st ODI of 5-match ODI series at Dharamsala. After winning the toss, India decided to bowl first. Except for Tom Latham, all New Zealand top order batsmen failed against Indian bowling. With the help of some brave lower-order partnerships, New Zealand managed to score 190 in 43.5 overs (190/10).

							</p>`

				}

			};



function createHtmlTemplate(data){

		var title = data.title;
		var heading = data.heading;
		var date =  data.date;
		var content = data.content;

	

	var htmlTemplate = `

					<html>
			<head>
			<title>${title}</title>
			</head>

			<body>

				<div id="container">

					<h1>

						${heading} 

					</h1>

					<h2>
						Created by --- Abhishek  ${date}
					</h2>
						
						${content}
				</div>
			</body>

			</html>
	`;


	return htmlTemplate;
}



function hash(input,salt){

	var hashed =  crypto.pbkdf2Sync(input, salt, 1, 512, 'sha512');

	return hashed.toString('hex');

}


app.get('/hash/:input', function (req, res) {

	var hashedString = hash(req.params.input,'this-is-a-random-string');

	res.send(hashedString);

  


});

var pool = new Pool(config);
app.get('/test',function(req,res){
   // make a select query 
   pool.query('SELECT * FROM article',function(err,result){
       if(err){
       
       res.status(500).send(err.toString());
       }
       else{
           res.send(JSON.stringify(result.rows));
       }
   });
    
});


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/js/main.js',function(req,res){
   res.sendFile(path.join(__dirname,'/ui/js','main.js')); 
});


app.get('/ui/css/main.css',function(req,res){
   res.sendFile(path.join(__dirname,'/ui/css','main.css')); 
});


app.get('/ui/css/about.css',function(req,res){
   res.sendFile(path.join(__dirname,'/ui/css','about.css')); 
});

app.get('/ui/css/logincss.css',function(req,res){
   res.sendFile(path.join(__dirname,'/ui/css','logincss.css')); 
});


app.get('/ui/include/login.html',function(req,res){
   res.sendFile(path.join(__dirname,'/ui/include','login.html')); 
});

app.get('/ui/include/register.html',function(req,res){
   res.sendFile(path.join(__dirname,'/ui/include','register.html')); 
});

app.get('/ui/img.jpg',function(req,res){
   res.sendFile(path.join(__dirname,'ui','img.jpg')); 
});


app.get('/ui/include/about.html',function(req,res){
   res.sendFile(path.join(__dirname,'/ui/include','about.html')); 
});

app.get('/ui/include/login.html',function(req,res){
   res.sendFile(path.join(__dirname,'/ui/include','login.html')); 
});

app.get('/ui/include/home.html',function(req,res){
   res.sendFile(path.join(__dirname,'/ui/include','home.html')); 
});



app.get('/ui/header.html',function(req,res){
   res.sendFile(path.join(__dirname,'ui','header.html')); 
});




app.get('/ui/footer.html',function(req,res){
   res.sendFile(path.join(__dirname,'ui','footer.html')); 
});


app.get('/:articleName',function(req,res){


	var articleName = req.params.articleName;

	console.log("articleName");


	res.send(createHtmlTemplate(articles[articleName]));

});



var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
