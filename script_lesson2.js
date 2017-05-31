
// ======= ======= ======= DRAGGERS ======= ======= =======
// ======= ======= ======= DRAGGERS ======= ======= =======
// ======= ======= ======= DRAGGERS ======= ======= =======


// ======= default objects =======
var rooms = {
    livingRoom: { id:"livingRoom", name:"Living Room", X:0, Y:0, W:12, H:18 },
    kitchen: { id:"kitchen", name:"Kitchen", X:12, Y:0, W:12, H:12 },
    bathroom: { id:"bathroom", name:"Bathroom", X:12, Y:12, W:12, H:6 },
    bedroom: { id:"bedroom", name:"Bedroom", X:24, Y:0, W:12, H:18 }
}
console.dir(rooms);

draggers = {
    chair1: { id:"chair1", name:"Chair", class:"chair", el:null,
        msX:0, msY:0, moX:0, moY:0, X:0, Y:0, W:30, H:35 },
    couch1: { id:"couch1", name:"Sofa", class:"couch", el:null,
        msX:0, msY:0, moX:0, moY:0, X:20, Y:20, W:60, H:30 }
};
console.dir(draggers);

// ======= myCondo =======
var myCondo = {
    address: "1400 U St.",
    floor: "2",
    unit: "2-B",
    rooms: rooms,
    condoBox: {},                            // new property for drag limits
    draggers: draggers,                      // make draggers part of object
    customRooms: {},                         // store user-designed room data
    activeDragger: null,                     // store currently active dragger
    initialize: function() {
        console.log("== initialize ==");
        myCondo.condoBox.L = $('#condo').offset().left;
        myCondo.condoBox.T = $('#condo').offset().top;
        myCondo.condoBox.W = $('#condo').width();
        myCondo.condoBox.H = $('#condo').height();
        $(window).on('mousemove', myCondo.mouseLoc)
        myCondo.makeRooms();
        myCondo.activateUserActions();
    },
    makeRooms: function() {
        console.log("== makeRooms ==");
        var condoEl = document.getElementById('condo');
        var nextRoomEl, nextStyles;

        function conversion(feet) {
          console.log("== conversion ==");
          var pixels = feet * 10;
          return pixels;
        }

        // == create div elements (with id, class); append to condo
        $.each(myCondo.rooms, function(key, roomObj) {

            // == divs
            nextRoomEl = document.createElement("div");
            nextRoomEl.id = key;
            nextRoomEl.className = "room";
            condoEl.appendChild(nextRoomEl);

            // == name labels
            nextName = roomObj.name;
            nextNameEl = document.createElement("p");
            nextNameEl.innerHTML = nextName;
            nextNameEl.className = "room-label";
            nextRoomEl.appendChild(nextNameEl);

            // == size labels
            nextSizeEl = document.createElement("p");
            nextSizeEl.innerHTML = roomObj.W + " x " + roomObj.H;
            nextSizeEl.className = "size-label";
            nextRoomEl.appendChild(nextSizeEl);

            // == add size and position styles to divs
            var pixelsW = conversion(roomObj.W);
            var pixelsH = conversion(roomObj.H);
            var pixelsX = conversion(roomObj.X);
            var pixelsY = conversion(roomObj.Y);
            nextStyles = "position:absolute; ";
            nextStyles += "left:" + pixelsX + "px; top:" + pixelsY + "px; ";
            nextStyles += "width:" + pixelsW + "px; height:" + pixelsH + "px; ";
            nextRoomEl.setAttribute("style", nextStyles);
            console.log("nextStyles:", "nextStyles");

            // == convert feet to pixels for positioning

        });
    },

    activateUserActions: function() {
      console.log("== activateUserActions ==");
      var selRoom = document.getElementById("selRoom");
      selRoom.addEventListener("change", myCondo.setSelectedRoom);
    },
    setSelectedRoom: function() {
      console.log("== setSelectedRoom ==");
      var roomN = document.getElementById("roomN");
      var roomW = document.getElementById("roomW");
      var roomH = document.getElementById("roomH");

      // var selectedRoom = $('#selRoom').find(":selected").val();
      var selectedRoomId = document.getElementById("selRoom").value;
      console.log("selectedRoomId:", selectedRoomId);
      var selectedRoomName = myCondo.rooms[selectedRoomId].name;
      console.log("selectedRoomName:", selectedRoomName);
      roomN.value = selectedRoomName;
      var selectedRoomWidth = myCondo.rooms[selectedRoomId].W;
      roomW.value = selectedRoomWidth;
      var selectedRoomHeight = myCondo.rooms[selectedRoomId].H;
      roomH.value = selectedRoomHeight;
      var selectedRoomEl = document.getElementById(selectedRoomId);
      selectedRoomEl.style.background = "#FFA500";
    }

};

myCondo.initialize();
// ======= ======= ======= EVENTS ======= ======= =======
// ======= ======= ======= EVENTS ======= ======= =======
// ======= ======= ======= EVENTS ======= ======= =======

    // ======= activateRoomSelect =======


    // ======= activateClearSelection =======
    // ======= clearSelectedRoom =======
    // ======= setSelectedRoom =======


// ======= ======= ======= LOGIC ======= ======= =======
// ======= ======= ======= LOGIC ======= ======= =======
// ======= ======= ======= LOGIC ======= ======= =======


    // ======= showRoomData =======
    // ======= if =======
    // ======= if...else =======
    // ======= if...else if...else =======
    // ======= AND: && =======
    // ======= OR: || =======


// ======= ======= ======= SWITCH ======= ======= =======
// ======= ======= ======= SWITCH ======= ======= =======
// ======= ======= ======= SWITCH ======= ======= =======


    // ======= switchSelectedRoom =======


// ======= ======= ======= CONSTRUCTORS & PROTOTYPES ======= ======= =======
// ======= ======= ======= CONSTRUCTORS & PROTOTYPES ======= ======= =======
// ======= ======= ======= CONSTRUCTORS & PROTOTYPES ======= ======= =======


// // == multiple condo instances
// var condo2B = new Condo(
//     /* name: */ "Unit 2-B",
//     /* box: */  {},
//     /* X: */    0,
//     /* Y: */    0,
//     /* W: */    36,
//     /* H: */    18
// )
// var condo5A = new Condo(
//     /* name: */ "Unit 5-A",
//     /* box: */  {},
//     /* X: */    0,
//     /* Y: */    30,
//     /* W: */    48,
//     /* H: */    24
// )
//
// // == Condo constructor function
// function Condo(name, condoBox, X, Y, W, H) {
//     console.log("== Condo ==");
//     this.condoBox = condoBox;
//     this.name = name;
//     this.X = X;
//     this.Y = Y;
//     this.W = W;
//     this.H = H;
// }
//
// // == adding methods to the Condo object prototype
// Condo.prototype.initialize = function() {
//     console.log("== initialize ==");
//     console.log("   condo: ", this.name);
//     this.condoBox.L = $('#condo').offset().left;
//     this.condoBox.T = $('#condo').offset().top;
//     this.condoBox.W = $('#condo').width();
//     this.condoBox.H = $('#condo').height();
//     $(window).on('mousemove', this.mouseLoc)
// }
//
// console.log("condo2B: ", condo2B);
// console.log("condo5A: ", condo5A);
// condo2B.initialize();
// condo5A.initialize();
