let airplanes =[];
let airfield;
let numAirfield = 5;
let ap_width = 100;
let ap_height = 100;
let ap_tail = 20;

function setup(){
    createCanvas(500, 500);
    angleMode(DEGREES)

    for(let x = 0; x < 5; x++){
        airplanes.push(new Airplane());
    }

    for(let x =0; x < numAirfield; x++){
        airfield = new Airfield(500, 500, airplanes);
    }

    background(50)

};

function draw(){
    background(0);
    for(let x = 0; x < airfield.length; x++){
        airfield[x].drawField();
    }
    
}
