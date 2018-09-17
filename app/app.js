



function apiCall(characterId) {

  var url = `https://rickandmortyapi.com/api/character/${characterId}`;

  $.getJSON(url, {})
    .done(function(data) {
      console.log(data);

                  var char = document.createElement("DIV");
                  char.className = "charCard";
                  $("#charContainer").append(char)


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
