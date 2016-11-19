function loadArticles () {
        // Check if the user is already logged in
    var request = new XMLHttpRequest();
    request.onreadystatechange = function () {
        if (request.readyState === XMLHttpRequest.DONE) {
            var articles = document.getElementById('articles');
            if (request.status === 200) 
            {
                var content = '';
                var articleData = JSON.parse(this.responseText);
                
                for (var i=0; i< articleData.length; i++) {
                    /*content += `<li>
                    <a href="/articles/${articleData[i].title}">${articleData[i].heading}</a>
                    (${articleData[i].date.split('T')[0]})</li>`;*/

                    content+=`

                 <div class="row">
                        <div class="col-md-3">
                            <div class="section-title">
                                <h2>My Specialities</h2>
                            </div>
                        </div>

                        <div class="col-md-8">
                            <div class="row">
                                
                                    <div class="expertise-item">
                                        <h3>${articleData[i].title}</h3>

                                        <p>
                                            Posted 10 minutes ago by ${articleData[i].author_id}, Contributor
                                        </p>


                                        <h4>

                                            ${articleData[i].content}
                                            
                                        </h4>
                                    </div>
                               
                             
                            </div>
                           
                        </div>
                    </div>

                    `;
        }
                //content += "</ul>"
                articles.innerHTML = content;
            } else {
                articles.innerHTML('Oops! Could not load all articles!')
            }
        }
    };
    
    request.open('GET', '/get-articles', true);
    request.send(null);
};



function test(){
 var content = '';
    for (var i=0; i< 3; i++) {
                    /*content += `<li>
                    <a href="/articles/${articleData[i].title}">${articleData[i].heading}</a>
                    (${articleData[i].date.split('T')[0]})</li>`;*/

                    content +=`

                 <div class="row">
                        <div class="col-md-3">
                            <div class="section-title">
                                <h2>My Specialities</h2>
                            </div>
                        </div>

                        <div class="col-md-8">
                            <div class="row">
                                
                                    <div class="expertise-item">
                                        <h3>FBI will receive âlimitedâ Twitter firehose access through Dataminr, but has to watch its step</h3>

                                        <p>
                                            Posted 10 minutes ago by Devin Coldewey, Contributor
                                        </p>


                                        <h4>


                                            TechCrunch was told that the service being provided to the FBI is different from that requested by the CIA, which was turned away before. The FBI would receive âa limited version of our breaking news alerting productâ starting December 1, according to a Dataminr statement. (âDataminr is not a product that enables surveillance,â it concluded. Not knowingly, perhaps.)

                                        </h4>
                                    </div>
                               
                             
                            </div>
                           
                        </div>
                    </div>

                    `;





                }
 var articles = document.getElementById('articles');
 articles.innerHTML = content;

}

loadArticles();






