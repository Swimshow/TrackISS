var lt ;
var lg ;
var latEle;
var longEle;
var count=0;
var urlISS = "http://api.open-notify.org/iss-now.json";
var socket;

function reload(){
	loadJSON(urlISS,ISSLocated);

}

function preload(){

	
	loadJSON(urlISS,ISSLocated);

}

function ISSLocated(ISSLoc){
	lt=floor(ISSLoc.iss_position.latitude);
	lg=floor(ISSLoc.iss_position.longitude);
	initMap();
	
}
function mousePressed(){

}
function mouseDragged(){
  console.log('sending '+mouseX + "," + mouseY);
  var data = {
    x: mouseX,
    y:mouseY
  }
  socket.emit('mouse',data)
}
function newInfo(data){
  console.log('I have gotten some data from another socket ' + data.x, +","+data.y);
}
function setup() {
  socket =io.connect('http://localhost:3000');
  socket.on('mouse', newInfo);

  createCanvas(270,50);
  background(51);

	var buttonRefresh = select('#refresh');

	buttonRefresh.mousePressed(reload);
}

function initMap() {
		
        var location = {lat: lt, lng: lg};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 5,
          center: location
        });
       
        var marker = new google.maps.Marker({
          position: location,
          map: map
        });
        console.log(lt);
        console.log(lg);
      }

function draw() {
  if (count%1000==0) {
    loadJSON(urlISS,ISSLocated);
    background(51);
    textSize(20);
    fill(255);
    text("Latitude: "+ lt , 10,height/2);
    text(" Longitude: "+ lg , 120,height/2);
  }
count++;

   
}