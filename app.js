const game = document.querySelector("#game");
let ctx = game.getContext("2d");
ctx.scale(100,100)
game.setAttribute("height", getComputedStyle(game)["height"]);
game.setAttribute("width", getComputedStyle(game)["width"]);
const scoreEl = document.querySelector(".score")
//olyImg = document.querySelector(".oly");
let intFrameWidth = window.innerWidth;
let intFrameHeight = window.innerHeight
// console.log(intFrameWidth)
// console.log(intFrameHeight)

let canvasWidth = intFrameWidth * .8
let canvasHeight = intFrameHeight * .9

console.log(canvasWidth)
console.log(canvasHeight)

//console.log(olyImg)
let stoop;
let oly;
let bunny1;
let bunny2;
let bunny3;
let coyote;
let score = 0;
let road;
let dash1;
let dash2;
let dash3;
let dash4;
let dash5;
let car1;
let car2;
let sharoll;
let mathew;

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
    // this.drawImage = ctx.drawImage(this.image, this.x, this.y, this.width, this.height)
  }

  //   renders images onto canvas
  //   image, destination x, destination y, destination width, destination height
  //   drawImage() {
  //       ctx.drawImage(this.image,this.x,this.y,this.width,this.height)
  //   }

  render() {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
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
    this.onStoop = false;
    this.hasBunny = false;
    // this.drawImage = ctx.drawImage(olyImg, this.x, this.y, this.width, this.height)
  }

  //   drawImage(img) {
  //     ctx.drawImage(img)
  //     }

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
    this.pickedUp = false;
    this.onStoop = false;
    this.scored = false;
  }
  //Add score once dead bunny is dropped on stoop.
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

window.addEventListener("DOMContentLoaded", function () {
  (function () {
    //const floor = document.querySelector(".floor")
    //floor.style.backgroundImage = "url('../img/betterGrass.png')"; // Oly was rendering under the floor. Tried to get it so he would redner after floor img loaded. Didn't work. Will revist later.

    //create my game characters
    oly = new Oly(canvasWidth - (canvasWidth *.05), canvasHeight - (canvasHeight * .16), "grey", canvasWidth*.042, canvasWidth*.042, 3);
    bunny1 = new Bunny(
      Math.floor(Math.random() * (canvasWidth-(canvasWidth * .052))),
      Math.floor(Math.random() * (canvasHeight-(canvasHeight * .186))),
      "white",
      canvasWidth * .021,
      canvasWidth * .021,
      0.3
    );
    bunny2 = new Bunny(
        Math.floor(Math.random() * (canvasWidth-(canvasWidth * .052))),
        Math.floor(Math.random() * (canvasHeight-(canvasHeight * .186))),
        "white",
        canvasWidth * .021,
        canvasWidth * .021,
        0.3
    );
    bunny3 = new Bunny(
        Math.floor(Math.random() * (canvasWidth-(canvasWidth * .052))),
        Math.floor(Math.random() * (canvasHeight-(canvasHeight * .186))),
        "white",
        canvasWidth * .021,
        canvasWidth * .021,
        0.3
    );
    coyote = new Character(
        Math.floor(Math.random() * (canvasWidth-(canvasWidth * .052))),
        Math.floor(Math.random() * (canvasHeight-(canvasHeight * .186))),
        "brown",
        canvasWidth * .0578,
        canvasWidth * .0578,
        0.7
    );
    stoop = new Character(canvasWidth * .9674, canvasHeight * .83897, "black", canvasWidth * .042, canvasHeight * .10827, 0);
    road = new Character(canvasWidth * .3153, 0, "black", canvasWidth * .1051, canvasHeight)
    dash1 = new Character(canvasWidth * .3627,0, "yellow",canvasWidth * .0105, canvasHeight * .10826 )
    dash2 = new Character(canvasWidth * .3627,canvasHeight * .2165, "yellow",canvasWidth * .0105, canvasHeight * .10826)
    dash3 = new Character(canvasWidth * .3627,canvasHeight * .4330, "yellow",canvasWidth * .0105, canvasHeight * .10826)
    dash4 = new Character(canvasWidth * .3627,canvasHeight * .6496, "yellow",canvasWidth * .0105, canvasHeight * .10826)
    dash5 = new Character(canvasWidth * .3627,canvasHeight * .8661, "yellow",canvasWidth * .0105, canvasHeight * .10826)
    car1 = new Character(canvasWidth * .3134,0 - (canvasHeight * .13534), "blue", canvasWidth * .0473,canvasHeight * .0812, 6)
    car2 = new Character(canvasWidth * .3733,canvasHeight, "blue", canvasWidth * .0473,canvasHeight * .0812, 6)
    sharoll = new Character(Math.floor(Math.random()* (canvasWidth * .2418)),Math.floor(Math.random() * (canvasHeight * .813)), "orange" ,canvasWidth * .0578,canvasWidth * .0578, .5)
    mathew = new Character((canvasWidth * .4311) + Math.floor(Math.random()* (canvasWidth * .4732)),Math.floor(Math.random() * (canvasHeight * .813)), "purple" ,canvasWidth * .0578,canvasWidth * .0578, .5)
    
    

    console.log(bunny1.constructor.name);
    // floor.onload = function(){
    // }

    //Render my Game Characters
    stoop.render();
    road.render();
    dash1.render();
    dash2.render();
    dash3.render();
    dash4.render();
    dash5.render();
    sharoll.render();
    mathew.render();
    oly.render();
    bunny1.render();
    bunny2.render();
    bunny3.render();
    coyote.render();
    car1.render();
    car2.render();
    //console.log(oly, 1);
    //console.log(bunny1, 2);
    //run the game
    const runGame = setInterval(gameLoop, 120);
  })();
  document.addEventListener("keydown", movementHandler);
  document.addEventListener("keyup", moveHandler2);
});

//Oly Move Function Key Down
function movementHandler(e) {
  //console.log(`the movement was ${e.key}`, 3)
  //console.log(`OlyBite is ${oly.bite}`, 4);
  switch (e.key) {
    case "ArrowUp":
      oly.y >= 0 ? oly.y -= ((canvasHeight * canvasWidth) * .000007114) * oly.speed : null;
      break;

    case "ArrowDown":
      oly.y += ((canvasHeight * canvasWidth) * .000007114) * oly.speed;
      break;

    case "ArrowLeft":
      oly.x -= ((canvasHeight * canvasWidth) * .000007114) * oly.speed;
      break;

    case "ArrowRight":
      oly.x += ((canvasHeight * canvasWidth) * .000007114) * oly.speed;
      break;
    case " ":
      oly.bite = true;
  }
  //console.log(oly)
}

//Oly Seconday Move Function Key Up
function moveHandler2(e) {
  //console.log(`OlyBite is ${oly.bite}`, 5);
  switch (e.key) {
    case " ":
      oly.bite = false;
      oly.hasBunny = false;
      bunny1.pickedUp = false;
      bunny2.pickedUp = false;
      bunny3.pickedUp = false;
      oly.speed = 3;
  }
}

//coyote will hunt you!
function coyoteHunt() {
  if (coyote.x < oly.x) {
    coyote.x += ((canvasHeight * canvasWidth) * .000007114) * coyote.speed;
  } else {
    coyote.x -= ((canvasHeight * canvasWidth) * .000007114) * coyote.speed;
  }

  if (coyote.y < oly.y) {
    coyote.y += ((canvasHeight * canvasWidth) * .000007114) * coyote.speed;
  } else {
    coyote.y -= ((canvasHeight * canvasWidth) * .000007114) * coyote.speed;
  }
}

//Mathew Hunt you
function mathewHunt(m,dist){
    if(
        oly.hasBunny && 
        m.x - oly.x <= (dist * canvasWidth) &&
        m.x - oly.x >= 0 &&
        m.y - oly.y <= (dist * canvasHeight) &&
        m.y - oly.y >= 0
    ) {
    m.x -= ((canvasHeight * canvasWidth) * .000007114) * m.speed;
    m.y -= ((canvasHeight * canvasWidth) * .000007114) * m.speed;
    m.color = "red"
    } else if (
        oly.hasBunny && 
        oly.x - m.x <= (dist * canvasWidth) &&
        oly.x - m.x >= 0 &&
        oly.y - m.y <= (dist * canvasHeight) &&
        oly.y - m.y >= 0
    ) {
        m.x += ((canvasHeight * canvasWidth) * .000007114) * m.speed;
        m.y += ((canvasHeight * canvasWidth) * .000007114) * m.speed;
        m.color = "red"
    } else if (
        oly.hasBunny && 
        m.x - oly.x <= (dist * canvasWidth) &&
        m.x - oly.x >= 0 &&
        oly.y - m.y <= (dist * canvasHeight) &&
        oly.y - m.y >= 0
      ) {
        m.x -= ((canvasHeight * canvasWidth) * .000007114) * m.speed;
        m.y += ((canvasHeight * canvasWidth) * .000007114) * m.speed;
        m.color = "red"
      } else if (
        oly.hasBunny && 
        oly.x - m.x <= (dist * canvasWidth) &&
        oly.x - m.x >= 0 &&
        m.y - oly.y <= (dist * canvasHeight) &&
        m.y - oly.y >= 0
      ) {
        m.x += ((canvasHeight * canvasWidth) * .000007114) * m.speed;
        m.y -= ((canvasHeight * canvasWidth) * .000007114) * m.speed;
        m.color = "red"
      } else {
        m.color = "purple"
      }
}

function sharollHunt(m,dist){
    if(
        m.x - oly.x <= (dist * canvasWidth) &&
        m.x - oly.x >= 0 &&
        m.y - oly.y <= (dist * canvasHeight) &&
        m.y - oly.y >= 0
    ) {
    m.x -= ((canvasHeight * canvasWidth) * .000007114) * m.speed;
    m.y -= ((canvasHeight * canvasWidth) * .000007114) * m.speed;
    } else if (
        oly.x - m.x <= (dist * canvasWidth) &&
        oly.x - m.x >= 0 &&
        oly.y - m.y <= (dist * canvasHeight) &&
        oly.y - m.y >= 0
    ) {
        m.x += ((canvasHeight * canvasWidth) * .000007114) * m.speed;
        m.y += ((canvasHeight * canvasWidth) * .000007114) * m.speed;
    } else if (
        m.x - oly.x <= (dist * canvasWidth)&&
        m.x - oly.x >= 0 &&
        oly.y - m.y <= (dist * canvasHeight) &&
        oly.y - m.y >= 0
      ) {
        m.x -= ((canvasHeight * canvasWidth) * .000007114) * m.speed;
        m.y += ((canvasHeight * canvasWidth) * .000007114) * m.speed;
      } else if (
        oly.x - m.x <= (dist * canvasWidth) &&
        oly.x - m.x >= 0 &&
        m.y - oly.y <= (dist * canvasHeight) &&
        m.y - oly.y >= 0
      ) {
        m.x += ((canvasHeight * canvasWidth) * .000007114) * m.speed;
        m.y -= ((canvasHeight * canvasWidth) * .000007114) * m.speed;
      }
}

// //Bunny Move!
// function bunnyMove(b) {
//   if (b.alive) {
//     if (
//       b.x - oly.x <= 200 &&
//       b.x - oly.x >= 0 &&
//       b.y - oly.y <= 200 &&
//       b.y - oly.y >= 0
//     ) {
//       b.x += ((canvasHeight * canvasWidth) * .000007114) * b.speed;
//       b.y += ((canvasHeight * canvasWidth) * .000007114) * b.speed;
//     } else if (
//       oly.x - b.x <= 200 &&
//       oly.x - b.x >= 0 &&
//       oly.y - b.y <= 200 &&
//       oly.y - b.y >= 0
//     ) {
//       b.x - ((canvasHeight * canvasWidth) * .000007114) * b.speed;
//       b.y -= ((canvasHeight * canvasWidth) * .000007114) * b.speed;
//     } else if (
//       b.x - oly.x <= 200 &&
//       b.x - oly.x >= 0 &&
//       oly.y - b.y <= 200 &&
//       oly.y - b.y >= 0
//     ) {
//       b.x += ((canvasHeight * canvasWidth) * .000007114) * b.speed;
//       b.y -= ((canvasHeight * canvasWidth) * .000007114) * b.speed;
//     } else if (
//       oly.x - b.x <= 200 &&
//       oly.x - b.x >= 0 &&
//       b.y - oly.y <= 200 &&
//       b.y - oly.y >= 0
//     ) {
//       b.x -= ((canvasHeight * canvasWidth) * .000007114) * b.speed;
//       b.y += ((canvasHeight * canvasWidth) * .000007114) * b.speed;
//     }
//   }
// }

//Bunny Move!
function bunnyMove(b) {
  if (b.alive) {
    if (
      b.x - oly.x <= (canvasWidth * .21) &&
      b.x - oly.x >= 0 &&
      b.y - oly.y <= (canvasHeight * .21) &&
      b.y - oly.y >= 0
    ) {
      b.x += ((canvasHeight * canvasWidth) * .000007114) * b.speed;
      b.y += ((canvasHeight * canvasWidth) * .000007114) * b.speed;
    } else if (
      oly.x - b.x <= (canvasWidth * .21) &&
      oly.x - b.x >= 0 &&
      oly.y - b.y <= (canvasHeight * .21) &&
      oly.y - b.y >= 0
    ) {
      b.x - ((canvasHeight * canvasWidth) * .000007114) * b.speed;
      b.y -= ((canvasHeight * canvasWidth) * .000007114) * b.speed;
    } else if (
      b.x - oly.x <= (canvasWidth * .21) &&
      b.x - oly.x >= 0 &&
      oly.y - b.y <= (canvasHeight * .21) &&
      oly.y - b.y >= 0
    ) {
      b.x += ((canvasHeight * canvasWidth) * .000007114) * b.speed;
      b.y -= ((canvasHeight * canvasWidth) * .000007114) * b.speed;
    } else if (
      oly.x - b.x <= (canvasWidth * .21) &&
      oly.x - b.x >= 0 &&
      b.y - oly.y <= (canvasHeight * .21) &&
      b.y - oly.y >= 0
    ) {
      b.x -= ((canvasHeight * canvasWidth) * .000007114) * b.speed;
      b.y += ((canvasHeight * canvasWidth) * .000007114) * b.speed;
    }
  }
}


//Game Loop
function gameLoop() {
  //clear baord every loop
  ctx.clearRect(0, 0, game.width, game.height);
  //render my characters every loop
  stoop.render();
  road.render();
  dash1.render();
  dash2.render();
  dash3.render();
  dash4.render();
  dash5.render();
  oly.render();
  sharoll.render();
  mathew.render();
  bunny1.render();
  bunny2.render();
  bunny3.render();
  coyote.render();
  car1.render();
  randomCar();
  car2.render();
  detectHit(oly, bunny1);
  detectHit(oly, bunny2);
  detectHit(oly, bunny3);
  detectHit(oly, coyote);
  detectHit(bunny1, stoop);
  detectHit(bunny2, stoop);
  detectHit(bunny3, stoop);
  detectHit(oly,stoop);
  detectHit(coyote,road)
//   detectHit(car1,oly)
//   detectHit(car2,oly)
  coyoteHunt();
  mathewHunt(mathew,.315)
  sharollHunt(sharoll,.21)
  detectHit(car1,coyote)
  detectHit(car2,coyote)
  detectCarHit(car1, oly)
  detectCarHit(car2, oly)
  detectHit(mathew,oly)
  detectHit(sharoll,oly)
  bunnyMove(bunny1);
  bunnyMove(bunny2);
  bunnyMove(bunny3);
  addScore(bunny1);
  addScore(bunny2);
  addScore(bunny3);
  //console.log(coyote.speed)
  //console.log(oly.speed)
  //   console.log(`bunny1x: ${bunny1.x} bunny1y: ${bunny1.y}`);
  //   console.log(`Olyx: ${oly.x} olyy: ${oly.y}`);
  //console.log(car2.y)
}
//detect hit function
function detectHit(p1, p2) {
  let hitTest =
    p1.y + p1.height > p2.y &&
    p1.y < p2.y + p2.height &&
    p1.x + p1.width > p2.x &&
    p1.x < p2.x + p2.width; // {boolean} : if all are true -> hit

    if (hitTest) {
        //console.log("Hit", 6);
        //check for bite
        if (oly.bite && p2.constructor.name === "Bunny" && oly.hasBunny === false) {
          console.log("Hit and Bit", 7);
          p2.color = "red";
          p2.alive = false;
          oly.hasBunny = true;
          p2.pickedUp = true;
          //attach bunnies to Oly
        } else if (p2.pickedUp === true) {
          p2.x = oly.x;
          p2.y = oly.y;
          oly.speed = 2;
        } else if (p1 === oly && p2 === coyote) {
          //stand in place for end game message
          console.log("The Coyote Got you!");
          oly.color = "red";
        } else if (p1.constructor.name === "Bunny" && p2 === stoop) {
          p1.onStoop = true;
          //console.log(this.onStoop)
        // } else if (p1 === car1 || p1 === car2 && p2 === oly){
        //     oly.color = "red"
        //     console.log(`Oly Got hit by a car :()`)
        } else if(p1 === car1 || p1 === car2 && p2 === coyote){
            console.log(`coyote was hit`)
            if(Math.random() < .5){
                spawny = -1;
            } else { 
                spawny = 1;
            }
            if(spawny === -1){
                coyote.y = 0 - Math.floor(Math.random() * (canvasHeight * .8120))
            } else {
                coyote.y = canvasHeight + Math.floor(Math.random() * (canvasHeight * .8120))
            }
            if(Math.random() < .5){
                spawnx = -1;
            } else { 
                spawnx = 1;
            }
            if(spawnx === -1){
                coyote.x = 0 - Math.floor(Math.random() * (canvasWidth * .6307))
            } else {
                coyote.x = canvasWidth + Math.floor(Math.random() * (canvasWidth * .6307))
            }

        } else if (p1 === coyote && p2 === road ) {
            coyote.speed = 3
        } else if(p1 === mathew || p1 === sharoll && p2 === oly ){
            oly.color = "red";
            console.log(`${p1.constructor.name} got oly!`)
        }
    }
    else {
            coyote.speed = .7
        }
    //console.log(oly.speed)
    }

    function detectCarHit(p1, p2) {
        let carHit =
          p1.y + p1.height > p2.y &&
          p1.y < p2.y + p2.height &&
          p1.x + p1.width > p2.x &&
          p1.x < p2.x + p2.width; // {boolean} : if all are true -> hit
      
          if (carHit) {
              if(p1 === car1 || p1 === car2 && p2 === oly){
                    oly.color = "red"
                    console.log(`Oly Got hit by a car :()`)
              }
          }
    }



    function addScore(b) {
      if (b.onStoop === true) {
        console.log(`Add Score Ran`);
        score += 1;
        scoreEl.innerText = score;
        b.onStoop = false;
        b.color = "white";
        b.x = Math.floor(Math.random() * (canvasWidth-(canvasWidth * .052)));
        b.y = Math.floor(Math.random() * (canvasHeight-(canvasHeight * .186)));
        console.log(score);
      }
    }

    //function randomCar
    function randomCar(){
        if(car1.y < 800){
            car1.y += ((canvasHeight * canvasWidth) * .000007114) * car1.speed;
        } else {
            car1.y = (-1 * (canvasHeight * .09473)) - (Math.floor(Math.random() * (canvasHeight * 2.7067)))
        }

        if(car2.y > -70){
            car2.y -= ((canvasHeight * canvasWidth) * .000007114) * car1.speed
        } else {
            car2.y = (canvasHeight + (canvasHeight * .015))+ (Math.floor(Math.random() * (canvasHeight * 2.7067)))
        }
    }