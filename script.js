$(document).ready(function () {
  var search = $("#userinput").val();
  var apiKey = "OzdjLYAiG8ECaGjANjbA18V4HbOzL5GD";
  var queryURL =
    "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" +
    search +
    "&api-key=" +
    apiKey;
  $("#searchBtn").on("click", function () {
    $.ajax({
      url: queryURL,
      method: "GET",
    }).then(function (data) {
      console.log(data.response);
      for (var i = 0; i < data.response.docs.length; i++) {
        var column = $("<div>").addClass("column");
        var card = $("<div>").addClass("card");
        var article = data.response.docs[i].abstract;
        var title = data.response.docs[i].headline.main;
        var info = data.response.docs[i].lead_paragraph;
        var link = data.response.docs[i].web_url;
        var titleDiv = $("<h3>").text(title);
        var textDiv = $("<p>").text(info);
        var cardBtn = $("<a>").addClass("btn btn-primary").text("Go to the Article");
        var maxLength = 30;
        $("<p>").keyup(function() {
          var textlen = maxLength - $(this).val().length;
        });


        $(".row").append(column);
        column.append(card);
        card.append(titleDiv).append(textDiv).append(cardBtn);
        cardBtn.attr("href", link);
      }
    });
  });


});
  
  /*<div class="column">
  <div class="card1">
  <h3 id="t1">Card 1</h3>
  <p id="p1">Some text</p>
  <a class="btn btn-primary">Go to Article</a>
 </div>*/