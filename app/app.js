// var request = new XMLHttpRequest();
// var data;
// var i;
// for (i = 0; i < 99; i++) {
// }
// request.open('GET', `https://rickandmortyapi.com/api/character/${i}`, true);
//
// request.onload = function () {
//   console.log((request))
//   // var data = JSON.parse(request.results)
//   }
//
// request.send();




function apiCall(characterId) {

  var url = `https://rickandmortyapi.com/api/character/${characterId}`;

  $.getJSON(url, {})
    .done(function(data) {
      console.log(data);

                  var char = document.createElement("DIV");
                  char.className = "charCard";
                  $("#charContainer").append(char)

                  // var charNameNode = document.createElement("DIV");
                  // var placeName = document.createElement("h1");
                  // placeName.className = "heroTitle";
                  // charNameNode.appendChild(placeName);
                  // var nameApi = data.name;
                  // var grabbedName = document.createTextNode(nameApi);
                  // placeName.appendChild(grabbedName);
                  // $(char).append(placeName);

                  var imgHolder = document.createElement("DIV");
                  imgHolder.className = "heroBackgroundImage";

                  var backgroundImageUrl = data.image;
                  $(imgHolder).css("background-image", `url(${backgroundImageUrl})`);

                  var heroBackgroundImageContainer = document.createElement("DIV");
                  heroBackgroundImageContainer.className = "heroBackgroundImageContainer";
                  $(char).append(heroBackgroundImageContainer);
                  $(heroBackgroundImageContainer).append(imgHolder);
    })
    .fail(function(err){
      console.log(err);
    });
};

var i;
for(i = 1; i <= 16; i++){
  apiCall(i)
}
