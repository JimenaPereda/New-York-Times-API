$("#searchBtn").on("click", function() {
  varticle = $("#userinput").val();
  
  var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=" +
  "OzdjLYAiG8ECaGjANjbA18V4HbOzL5GD";

      $.ajax({
        url: queryURL,
        method: "GET"
      })
        .then(function(response) {
          console.log(response);
          for (var i = 0; i < response.response.docs.length; i++) {
            var articleDiv = $("<div>");
            var article = response.response.docs[i].abstract;
            
             articleDiv.text(article);
     
              console.log(articleDiv)
       
          $(".topArticles").append(articleDiv);
          }
        });
    });