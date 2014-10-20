$(document).ready(function() {

var tags = $("input[name='tags']").val();

$(document).keyup(function(event) {
		if (event.which == 13) {
			tags = $("input[name='tags']").val();
			getData();
			result = getData();
			//$("img").attr('src', "https://farm"+ result.photos.photo[0].farm +".staticflickr.com/"+ result.photos.photo[0].server +"/"+ result.photos.photo[0].id +"_"+ result.photos.photo[0].secret +"m.jpg");
			console.log(tags);
			console.log(result);
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
		api_key: "eadba36bed227c4d0b98d9f47b7b2a18",
		format: "json"
	};

	var result =  $.ajax({
			url: "https://api.flickr.com/services/rest/",
			dataType: "json",
			data: args,
			type: "GET"
			})
	return result;
}

});

