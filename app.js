$(document).ready(function() {

var tags = $("input[name='tags']").val();

$(document).keyup(function(event) {
		if (event.which == 13) {
			tags = $("input[name='tags']").val();
			$("img").attr('src', "https://farm"+ endpoint.farm +".staticflickr.com/"+ endpoint.server +"/"+ endpoint.id +"_"+ endpoint.secret +".jpg");
			console.log(endpoint.responseText);
			console.log(tags);
		}
});
 
var endpoint = $.ajax({
		url: "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=eadba36bed227c4d0b98d9f47b7b2a18&tags="+ tags +"&text=halloween%2C+costume%2C+halloween+costume%2C+my+costume%2C+my+halloween+costume&accuracy=1&content_type=1&per_page=100&format=json",
		dataType: "json",
		data: tags,
		type: "GET"
		})
});