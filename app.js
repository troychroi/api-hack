$(document).ready(function() {

var tags = $("input[name='tags']").val();

$(document).keyup(function(event) {
		if (event.which == 13) {
			tags = $("input[name='tags']").val();
			getData();
			var endpoint = getData();
			//$("img").attr('src', "https://farm"+ endpoint.photos.photo[0].farm +".staticflickr.com/"+ endpoint.photos.photo[0].server +"/"+ endpoint.photos.photo[0].id +"_"+ endpoint.photos.photo[0].secret +"m.jpg");
			console.log(endpoint);
			console.log(tags);
		}
});
var getData = function() {  
	
	var tags = $("input[name='tags']").val();

	var args = {
		tags: tags + ", halloween, costume, "+ tags +" halloween costume, "+ tags +" costume, halloween costume, my "+ tags +" halloween costume",
		text: tags + ", halloween, costume, "+ tags +" halloween costume, "+ tags +" costume, halloween costume, my "+ tags +" halloween costume",
		accuracy: "1",
		content_type: "1",
		per_page: "100",
		method: "flickr.photos.search",
		api_key: "eadba36bed227c4d0b98d9f47b7b2a18"
	};

	var result =  $.ajax({
			url: "https://api.flickr.com/services/rest/",
			dataType: "json",
			data: args,
			type: "GET"
			})
	console.log(result);
}

});

