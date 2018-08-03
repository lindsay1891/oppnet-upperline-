// Code out an event listener for the button that logs "Button pressed!" to the console when it is clicked
var mainButton = document.querySelector("#mainButton")
var wrapper = document.querySelector("#wrapper")

mainButton.addEventListener("click", e=> {
  sendApiRequest();
} ) 

// Go to https://developers.giphy.com/ and create an account. Then create your first app called testApp to create an API key. Enter it below.
function sendApiRequest() {
    fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=4df284b75b3747b0b52920fdddb83bab")
    .then(function(data) {
      return data.json();
    })
    .then(function(json) {
      console.log(json);
      // Pass the JSON on to the next function.
      var title = getTitle(json)
      var imageurl = getImage(json)
      var articleurl = getArticle(json)
      putDataToScreen(title, imageurl, articleurl)
      
    });
};

// Get a specific image URL ending in .gif from your JSON search results. Pass it on to the next function.
function getTitle(myJSON) {
  //var random = Math.floor(Math.random() * 25);
  var title = myJSON.articles[0].title 
  //var imageurl = myJSON.articles["0"].urlToImage
  //var articleurl = myJSON.articles["0"].url
  return title;
}

function getImage(myJSON) {
  var imageurl = myJSON.articles[0].urlToImage
  return imageurl
}

function getArticle(myJSON) {
  var articleurl=  myJSON.articles[0].url
  return articleurl
 
}

// querySelect the wrapper, and add an image tag to it. Interpolate the URL string from the previous function.
function putDataToScreen(title, imageurl, articleurl) {
  wrapper.innerHTML = `<h1>${title}</h1> <image src = "${imageurl}" /> <a href = "${articleurl}"> click here</a>`
  
}

// Playtime challenges:
// Find something / someone else (rewrite the endpoint so that we aren't searching for Ryan Gosling)
// Instead of getting the first image, get a random image from the JSON results
// REPLACE the contents of the wrapper instead of adding onto them
// Make all your images the same height so that they line up nicely
