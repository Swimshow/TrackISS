var lt ;
var lg ;

function preload(){
	var urlISS = "http://api.open-notify.org/iss-now.json";
	loadJSON(urlISS,ISSLocated);

}

function ISSLocated(ISSLoc){
	lt=floor(ISSLoc.iss_position.latitude);
	lg=floor(ISSLoc.iss_position.longitude);
	
}
function mousePressed(){
	preload();
	setup(); 
}

function setup() {
	
	initMap();
  
}

function initMap() {
		
        var location = {lat: lt, lng: lg};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 4,
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
  
}