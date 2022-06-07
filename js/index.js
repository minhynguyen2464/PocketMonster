const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

//width & height of the canvas
canvas.width = 1024;
canvas.height = 576;

//draw white rectangle
c.fillStyle = 'white';
c.fillRect(0,0,canvas.width,canvas.height); 

//draw the map 
const image = new Image();
image.src = './img/Pellet Town.png';

//create character
const playerImage = new Image();
playerImage.src = './img/PlayerDown.png';

class Sprite{
    constructor({position, velocity, image}){
        this.position = position;
        this.image = image;
    }

    draw(){
        c.drawImage(image,this.position.x,this.position.y); //draw image method
    }
}

const background = new Sprite({
    position:{
        x: -740,
        y: -590
    },
    image: image
})

const keys = { //Create keys object
    w:{
        pressed: false
    },
    a:{
        pressed: false
    },
    s:{
        pressed: false
    },
    d:{
        pressed: false
    },
}

function animate() {
    window.requestAnimationFrame(animate);
    background.draw();
    c.drawImage( 
        playerImage, //cropping the image
        0,
        0,
        playerImage.width/4,
        playerImage.height,
        canvas.width/2 - (playerImage.width/4)/2, //actual
        canvas.height/2 - playerImage.height/4,
        playerImage.width/4,
        playerImage.height
    ); 
    if(keys.w.pressed && lastKey === 'w'){
        background.position.y +=3;
    }
    else if(keys.s.pressed && lastKey === 's'){
        background.position.y -= 3;
    }
    else if(keys.a.pressed && lastKey === 'a'){ 
        background.position.x += 3;
    }
    else if(keys.d.pressed && lastKey === 'd'){
        background.position.x -= 3;
    }

}
animate();

let lastKey = '';

window.addEventListener('keydown',(e) =>{ //Event listener
    switch(e.key){
        case 'a':{
            keys.a.pressed = true;
            lastKey = 'a';
            break;
        }
        case 's':{
            keys.s.pressed = true;
            lastKey = 's';
            break;
        }
        case 'd':{
            keys.d.pressed = true;
            lastKey = 'd';
            break;
        }
        case 'w':{
            keys.w.pressed = true;
            lastKey = 'w';
            break;
        }
    }
})

window.addEventListener('keyup',(e) =>{ //Event listener
    switch(e.key){
        case 'a':{
            keys.a.pressed = false;
            break;
        }
        case 's':{
            keys.s.pressed = false;
            break;
        }
        case 'd':{
            keys.d.pressed = false;
            break;
        }
        case 'w':{
            keys.w.pressed = false;
            break;
        }
    }
})


