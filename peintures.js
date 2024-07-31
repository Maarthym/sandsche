peinturesDiv = document.getElementById("peintures");

function readTextFile(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
}

window.onload = function() {
  readTextFile("/resources/peintures.json", function(text){
      desc = JSON.parse(text);
      keys = Object.keys(desc)
      for (var i = 0; i < keys.length; i++){
        g = document.createElement("div");
        g.classList.add("galleryElement");
        peinturesDiv.appendChild(g);
        e = document.createElement("img");
        e.id = i;
        e.src = "resources/peintures/" + keys[i];
        e.alt = desc[keys[i]];
        e.classList.add("img");
        e.classList.add("galleryImg");
        g.appendChild(e);
        particlesJS.load('particles-js', 'resources/particles.json', function() {
          console.log('callback - particles.js config loaded');
        });
      };
    reloadImgList();
  });  
}