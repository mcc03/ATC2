class Airplane{

    constructor(_speedX, _speedY, _posX, _posY, _altitude, _size){

        this.speedX = floor(random() * (1) + 3);
        this.speedY = floor(random() * (3) + 1);
        this.posX = floor(random() * (400) + 50);
        this.posY = floor(random() * (400) + 50);
        this.altitude = floor(random() * (2000 - 1000 + 1) + 1000);
        this.size = random() * (0.5) + 0.2
        this.xBorder = 500;
        this.yBorder = 500;
        // this.angle = atan2(this.speedX, this.speedY)
    }

    render(){
        fill(255)
        push()
        translate(this.posX, this.posY)

        // scales the plane
        transform: scale(this.size);

        let heading = atan2(this.speedY, this.speedX)
        rotate(heading+90)
        beginShape()
        stroke(255);
        vertex(0, 0)
        vertex(ap_width/2, ap_tail)
        vertex(0, -ap_height+ap_tail)
        vertex(-ap_height/2, ap_tail )
        endShape(CLOSE);
        pop();

        this.step();
        this.reset();
    }

    step(){
        this.posX += this.speedX;
        this.posY += this.speedY;
    }

    reset(){

        // if posX OR posY is greater than either border, resets to original pos
        if(this.posX > this.xBorder || this.posY > this.yBorder){
            this.posX += this.posX*-1
            this.posY += this.posY*-1  
        }

    }
}



