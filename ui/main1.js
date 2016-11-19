

var header = `

        <nav class="navbar navbar-default navbar-fixed-top" role="navigation">
            <div class="container">
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>

        		
                    <a class="navbar-brand" href="#/"><i class="fa fa-rss" aria-hidden="true"></i> Kumargolu63 </a>
                </div>

                
                <div class="collapse navbar-collapse navbar-ex1-collapse">
                    <ul class="nav navbar-nav navbar-right">
                        <li><a href="#/services">Home</a>
                        </li>
                        <li><a href="#/pricing">Pricing Table</a>
                        </li>
                        <li><a href="#/about">About</a>
                        </li>
                        <li><a href="#/faq">FAQ</a>
                        </li>
                        <li><a href="#/contact">Contact</a>
                        </li>

                        <li class="dropdown">
                            <a class="dropdown-toggle" data-toggle="dropdown">Blog <i class="fa fa-user-o" aria-hidden="true"><b class="caret"></b></i></a>
                            <ul class="dropdown-menu">
                                <li><a href="#/blog">List of Posts</a>
                                </li>
                                <li><a href="#/blog/post">View One Post</a>
                                </li>
                            </ul>
                        </li>

                        <li><a href="/login"><i class="fa fa-user" aria-hidden="true"></i> Login</a></li>
                    </ul>
                </div>
                
            </div>
        </nav>
        `;

function createTemplate(){


    var htmlTemplate = `

                <!DOCTYPE html>
                <html class="no-js">
                <head>

                    <!-- Information about blog IMAD -->
                    <title>Kumargolu63 Blog</title>
                    <meta charset="utf-8">
                    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
                    <meta name="description" content="Imad Courses.">
                    <meta name="viewport" content="width=device-width, initial-scale=1">
                    <link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css">
                    <link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap-theme.min.css">
                    <link href="http://maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css" rel="stylesheet">
                    <link rel="stylesheet" href="ui/css/main.css">
                   

                </head>
            
                <body>


               
                <div id="myheader"></div>




                <div ng-include="myfooter"></div>

                <script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
                <script src="//maxcdn.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min.js"></script>
                <script src="ui/js/main.js"></script>

                </body>
                </html>

    `;

     return htmlTemplate;

 };

//createTemplate();
document.getElementById('myheader').innerHTML = header;





