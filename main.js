// map pin url
//



var newVM = new Vue ({
  el: "#appMain",
  data: {
    mapPinUrl :"http://webpop.github.io/jquery.pin/images/pin.png",
    pinLocation: [],


  },
  methods: {
    checkXY: function(event){
      var Coordinates = function(x,y,active) {
        this.xCoordinate = x-25;
        this.yCoordinate = y-25;
        this.active = active;
        this.noteXCoordinate = x+15;
        this.noteYCoordinate = y-20;
        this.hoverStatus = active;
				this.note = "Add a note";
      };
      newVM.pinLocation.push(new Coordinates(event.clientX, event.clientY,false));
      console.log("clicked");
    },
    handler: function(locations){
      console.log(event);
      locations.active = !locations.active;
			locations.hoverStatus = true
      console.log(locations, 'locations');
    },
    hoverActive: function(locations){
      locations.hoverStatus = !locations.hoverStatus;
      console.log(locations);
    },

}
});
