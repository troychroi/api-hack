$(document).ready(function() {

$('form').submit(function(event) {
    event.preventDefault();
      $('#results').find('img').remove();
      getData();
});

function getData() {  
  tags = $("input[name='tags']").val();
  var args = {
    tags: tags + ", halloween, costume",
    text: tags + ", halloween, costume",
    accuracy: "1",
    content_type: "1",
    per_page: "100",
    method: "flickr.photos.search",
    api_key: "eadba36bed227c4d0b98d9f47b7b2a18",
    format: "json"
  };

  var result =  $.ajax({
      url: "https://api.flickr.com/services/rest/?jsoncallback=?",
      dataType: "json",
      data: args,
      type: "GET",
      success: function(result) {
          var items = result.photos.photo;
          for (var i = 1; i < items.length; i++) {
            $("#results").append('<img src="https://farm'+ result.photos.photo[i].farm +'.staticflickr.com/'+ result.photos.photo[i].server +'/'+ result.photos.photo[i].id +'_'+ result.photos.photo[i].secret +'_m.jpg">');
          };     
      }
      })
      .done(function() {
        $("input[name='tags']").val('');
      });
}

});