var modal = document.getElementById('modal');
var modalImg = document.getElementById('modal-img');
var modalDesc = document.getElementById('modal-desc');
var close = document.getElementById('modal-close');
var img = document.getElementsByClassName('img');
var modalRightArrow = document.getElementById('modal-right-arrow');
var modalLeftArrow = document.getElementById('modal-left-arrow');

var index = 0;

function reloadImgList(){
  img = document.getElementsByClassName('img');
  for (var i = 0; i < img.length; i++) {
    img[i].onclick = function() {
      modal.style.display = "block";
      modalImg.src = this.src;
      modalImg.clientWidth = "80%";
      modalImg.clientHeight = "80%";
      modalDesc.innerHTML = this.alt;
      if (img.length > 1){
        if (this.classList.contains("galleryImg")){
          index = parseInt(this.id);
          if (index != null){
            if(document.getElementById(index + 1)){
              modalRightArrow.style.display = "block";
            }
            if(document.getElementById(index - 1)){
              modalLeftArrow.style.display = "block";
            }
          }
        }
      }
    }
  }
}

reloadImgList();

modalRightArrow.onclick = function() {
  index++;
  s = document.getElementById(index);
  modalImg.src = s.src;
  modalDesc.innerHTML = s.alt;
  if(document.getElementById(index + 1)){
    modalRightArrow.style.display = "block";
  } else {
    modalRightArrow.style.display = "none";
  }
  if(document.getElementById(index - 1)){
    modalLeftArrow.style.display = "block";
  } else {
    modalLeftArrow.style.display = "none";
  }
};

modalLeftArrow.onclick = function() {
  index--;
  s = document.getElementById(index);
  modalImg.src = s.src;
  modalDesc.innerHTML = s.alt;
  if(document.getElementById(index + 1)){
    modalRightArrow.style.display = "block";
  } else {
    modalRightArrow.style.display = "none";
  }
  if(document.getElementById(index - 1)){
    modalLeftArrow.style.display = "block";
  } else {
    modalLeftArrow.style.display = "none";
  }
};

close.onclick = function() {
  modal.style.display = "none";
  index = 0;
};
