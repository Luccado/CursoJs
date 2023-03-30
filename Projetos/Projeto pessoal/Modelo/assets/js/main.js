function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }



  let count = 1;
  document.getElementById("radio1").checked = true;

  setInterval( function(){
    nextImage()
  },5000)

  function nextImage(){
    count++;
    if(count>4){
      count = 1;
    }
    document.getElementById("radio"+count).checked = true;
  }