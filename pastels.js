pastelsDiv = document.getElementById("pastels");

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
  readTextFile("/resources/pastels.json", function(text){
      p = JSON.parse(text);
      for (var i = 0; i < Object.keys(p).length; i++){
        g = document.createElement("div");
        g.classList.add("galleryElement");
        pastelsDiv.appendChild(g);
        e = document.createElement("img");
        e.id = i;
        e.src = "resources/pastels/" + p[i][0];
        e.alt = p[i][1];
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