var request = require('request');
var React = require('react');
var { injectThemes } = require('react-simple-theme');
const themes = {
  defaultTheme: {
    color: 'black',
    outer: 'aliceblue',
  },
  altTheme: {
    color: 'white',
    outer: 'crimson',
  },
}

var author = 'andy';
var content = 'hope is a good thing';
var query = `mutation CreateMessage($input: MessageInput) {
  createMessage(input: $input) {
    id
  }
}`;

function loadImages(matches){
	jQuery.each(matches, function(){
		//Load image from URL
	});
}

function handleQueryResults(queryMap){
	var matches = [];
	//Replace this with a DB one day... For now, we can only dream....
	data = require('file://C:/Documents/backend/data.json')
	jQuery.each(post, function() {
		var good = true;
		Objects.keys(queryMap).forEach(function(key){
			//Look for fields specified for query
			//if there's an error, catch it and ignore for now; could be improved
			if(queryMap[key] != post[key]){
				good = false;
				break;
			}
		});
		if(good){
			matches.add[post];
		}
	});
	//Load all the matched images
	loadImages(matches)
}



request.post(
  'localhost:4000/graphql',
  { json : {
    query,
    variables: {
      input: {
        author,
        content,
      }
    }
  }},
  function (error, response, body) {
    if (!error && response.statusCode == 200) {
        console.log(body)
    }
}
);
