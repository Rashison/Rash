

   var body = document.getElementById("body");
function fall(){
 for (var i = 0; i < 4000; i++) {
  var child = document.createElement("span");
  var a = Math.random();
  child.style.height = a + "px";
  child.style.width = a + "px";
  child.style.position = "absolute";
  child.style.left = Math. floor(Math.random() * 390) + "px";
  child.style.top = Math. floor(Math.random()* 770) + "px";
  child.style.zIndex = "-1";
  child.style.borderRadius = "50%";
  body.appendChild(child);
 }
 console.log(a);
}
fall();
var span = document.getElementsByTagName("span");
function shine(){
  span[Math.floor(Math.random()*899)].style.animation = "shine linear 2s infinite" ;
  span[Math.floor(Math.random()*899)].style.animation = "shine linear 2s infinite";
  span[Math.floor(Math.random()*899)].style.animation = "shine linear 2s infinite"  ;
  span[Math.floor(Math.random()*899)].style.animation = "shine linear 2s infinite" ;
  span[Math.floor(Math.random()*899)].style.animation = "shine linear 2s infinite" ;
  span[Math.floor(Math.random()*899)].style.animation = "shine linear 2s infinite" ;
  span[Math.floor(Math.random()*899)].style.animation = "shine linear 2s infinite" ;
  span[Math.floor(Math.random()*899)].style.animation = "shine linear 2s infinite" ;
  span[Math.floor(Math.random()*899)].style.animation = "shine linear 2s infinite" ;
  span[Math.floor(Math.random()*899)].style.animation = "shine linear 2s infinite" ;
  span[Math.floor(Math.random()*899)].style.animation = "shine linear 2s infinite"; span[Math.floor(Math.random()*899)].style.animation = "shine linear 2s infinite" ;span[Math.floor(Math.random()*899)].style.animation = "shine linear 2s infinite"; 
}
 
