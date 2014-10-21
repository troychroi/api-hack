$(document).ready(function() {

	$('form').submit(function(event) {
			event.preventDefault();
			var tags = $("input[name='tags']").val();

			var endpoint = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?"

			$.getJSON(endpoint, {
				tags: tags + ", halloween, costume",
				format: "json"
			})
				.done(function (data) {
					$.each(data.items, function (item) {
					$('#results').append('<img src="'+ item.media.m + '">');
					});
				});
	});

});
