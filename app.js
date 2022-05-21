const game = document.querySelector("#game");
let ctx = game.getContext("2d");
game.setAttribute("height", getComputedStyle(game)["height"]);
game.setAttribute("width", getComputedStyle(game)["width"]);
let oly;
let bunny1
let bunny2
let bunny3
let coyote

class Character {
  constructor(x, y, color, width, height, speed) {
    this.x = x;
    this.y = y;
    this.color = color;
    this.width = width;
    this.height = height;
    this.speed = speed;
    this.alive = true;
    this.hunting = false;
  }

  //renders images onto canvas
  //image, destination x, destination y, destination width, destination height
//   drawImage() {
//       ctx.drawImage(this.image,this.x,this.y,this.width,this.height)
//   }

  render(){
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x,this.y,this.width, this.height)
}


//   //very basic move function for non Oly Characters
//   move() {
//     x += Math.floor(Math.random() * game.width);
//     y += Math.floor(Math.random() * game.height);
//   }

//   //The hunt mechanic for Coyote, and David. 
//   hunt(oly,predator){
//     predator.x = oly.x;
//     predator.y = oly.y;
//   }
  
//   //die/hitTest
//   die(p1,p2){
//     if(hitTest){

//     }
// }
}

class Oly extends Character {
  constructor(x, y, color, width, height, speed) {
    super(x, y, color, width, height, speed);
    this.bite = false;
    this.hasBunny = false;
  }

  //Oly's move mechanics. Follows arrow keystrokes
    // sayHi(){
    //     return "hi"
    // }

    // move(e) {
    //   console.log(`the movement was ${e.key}`);

    //   switch (e.key){
    //     case "ArrowUp": 
    //     oly.y >=0 ? oly.y -= 5 * oly.speed : null
    //         break
        
    //     case "ArrowDown":
    //     oly.y += 5 * oly.speed;
    //         break

    //     case "ArrowLeft":
    //         oly.x -= 5 * oly.speed;
    //         break

    //     case "ArrowRight":
    //         oly.x += 5 * oly.speed;
    //         break
    
    // }
    //   console.log(oly);
    // }
  //Oly bite mechanic. Space bar click bites. If collision with deadBunny and bite ==> hasBunny. 
//   bite(e){
//     if(e.key === " "){
//         console.log(`it is ${this.bite} about oly's bite`)
//         return this.bite = true;
//         // killBunny(oly.aliveBunny)
//         // append(oly.deadBunny)  
//     }
//   }

}

class Bunny extends Character {
    constructor(x, y, img, width, height, speed) {
        super(x, y, img, width, height, speed);
    this.held = false;
    }
    //Add score once dead bunny is dropped on stoop. 
    scoreCount(bunny){
        if(!bunny.alive && x === 73 && y === 76){
            addScore();
        }
    }
}

// class David extends Character {
//     constructor(x, y, img, width, height, speed) {
//         super(x, y, img, width, height, speed);
// }
//     //Activates David hunt. Switches his img to Angry David. 
//     getAngry(){
//         if(hunting){
//             img.src = "Angry David"
//             this.hunt(oly,david)
//         } else {
//             img.src = "nice David"
//         }
//     }
// }

window.addEventListener("DOMContentLoaded", function(){
    (function (){
        //const floor = document.querySelector(".floor")
        //floor.style.backgroundImage = "url('../img/betterGrass.png')"; // Oly was rendering under the floor. Tried to get it so he would redner after floor img loaded. Didn't work. Will revist later. 
        
        //create my game characters
        oly = new Oly(900,620,'Grey',40,40,3);
        bunny1 = new Bunny(Math.floor(Math.random() * 900),Math.floor(Math.random() * 600),"white",20,20,.5)
        bunny2 = new Bunny(Math.floor(Math.random() * 900),Math.floor(Math.random() * 600),"white",20,20,.5)
        bunny3 = new Bunny(Math.floor(Math.random() * 900),Math.floor(Math.random() * 600),"white",20,20,.5)
        coyote = new Character(Math.floor(Math.random() * 900),Math.floor(Math.random() * 600),"brown", 55,55,.7)
        // floor.onload = function(){
            // }
            
            //Render my Game Characters
            oly.render();
           bunny1.render();
           bunny2.render();
           bunny3.render();
           coyote.render();
           console.log(oly,1)
           console.log(bunny1,2)
           
           //run the game
           const runGame = setInterval(gameLoop, 120)
        })()
        document.addEventListener("keydown", movementHandler)
        document.addEventListener("keyup", moveHandler2)
         
    })
    
    //Oly Move Function Key Down
function movementHandler(e){
    //console.log(`the movement was ${e.key}`, 3)
    console.log(`OlyBite is ${oly.bite}`,4)
    switch (e.key){
        case "ArrowUp": 
        oly.y >=0 ? oly.y -= 5 * oly.speed : null
            break
        
        case "ArrowDown":
        oly.y += 5 * oly.speed;
            break

        case "ArrowLeft":
            oly.x -= 5 * oly.speed;
            break

        case "ArrowRight":
            oly.x += 5 * oly.speed;
            break
        case " ":
            oly.bite = true;
    }
    //console.log(oly)
}

//Oly Seconday Move Function Key Up
function moveHandler2(e){
    console.log(`OlyBite is ${oly.bite}`,5)
    switch (e.key){
        case " " :
            oly.bite = false;
    }
}

function coyoteHunt(){
    if(coyote.x < oly.x){
        coyote.x += 5 * coyote.speed
    } else {
        coyote.x -= 5 * coyote.speed
    }

    if(coyote.y < oly.y){
        coyote.y += 5 * coyote.speed
    }  else {
        coyote.y -= 5 * coyote.speed
    } 
}
//listen to key up and down

//Game Loop
function gameLoop(){
    //clear baord every loop
    ctx.clearRect(0,0, game.width, game.height)
    //render my characters every loop
    oly.render();
    bunny1.render();
    bunny2.render();
    bunny3.render();
    coyote.render();
    detectHit(oly,bunny1)
    detectHit(oly,bunny2)
    detectHit(oly,bunny3)
    coyoteHunt();
    
}
//detect hit function
function detectHit(p1,p2){
    let hitTest =
    p1.y + p1.height > p2.y &&
    p1.y < p2.y + p2.height &&
    p1.x + p1.width > p2.x &&
    p1.x < p2.x + p2.width; // {boolean} : if all are true -> hit 

    if(hitTest){
        console.log("Hit",6)
        //check for bite
        if(oly.bite){
            console.log("Hit and Bit",7)
            p2.color = "red"
            //attach bunnies to Oly
            p2.x = oly.x
            p2.y = oly.y
        }
    } else {

    }
}