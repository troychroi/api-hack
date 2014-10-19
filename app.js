$(document).ready(function() {

var tags = $("input[name='tags']").val();

$(document).keyup(function(event) {
		if (event.which == 13) {
			tags = $("input[name='tags']").val();
			getData(tags);
			var endpoint = getData(tags);
			//$("img").attr('src', "https://farm"+ endpoint.photos.photo[0].farm +".staticflickr.com/"+ endpoint.photos.photo[0].server +"/"+ endpoint.photos.photo[0].id +"_"+ endpoint.photos.photo[0].secret +"m.jpg");
			console.log(endpoint);
			console.log(tags);
		}
});
var getData = function(data) {  
	
	var tags = $("input[name='tags']").val();

	var args = {
		farm: "farm",
		server: "server",
		id: "id",
		secret: "secret",
		tags: tags
	};

	return $.ajax({
			url: "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=eadba36bed227c4d0b98d9f47b7b2a18&tags="+ tags +"&text=halloween%2C+costume%2C+halloween+costume%2C+my+costume%2C+my+halloween+costume&accuracy=1&content_type=1&per_page=100&format=json",
			dataType: "json",
			data: args,
			type: "GET"
			})
	}

});

