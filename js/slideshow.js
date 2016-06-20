var index = 1;

function changePicture(){

picture = document.getElementById('slideshow-frame');

  if(index+1>=17){
    index=1;
  }else{
    index++;
  }
picture.src = "img/" + index + ".jpg";


}
