const game = document.querySelector("#game");
let ctx = game.getContext("2d");
ctx.scale(100, 100);
game.setAttribute("height", getComputedStyle(game)["height"]);
game.setAttribute("width", getComputedStyle(game)["width"]);
const scoreEl = document.querySelector(".score");
let intFrameWidth = window.innerWidth;
let intFrameHeight = window.innerHeight;
let gameOver = false;
let timeRanOut = false;
let lostScore
let endGameEl = document.querySelector(".EndGame")
// console.log(intFrameWidth)
// console.log(intFrameHeight)

let canvasWidth = intFrameWidth * 0.8;
let canvasHeight = (intFrameHeight * 0.9);
let spawnHeight = canvasHeight - (canvasHeight * .06999)
console.log(canvasHeight)

let minSpawn = (canvasHeight - spawnHeight)
let maxSpawn = canvasHeight - (canvasHeight * .0812)
//console.log(canvasWidth);
console.log(spawnHeight);

//images
const olyImageLeft = new Image();
olyImageLeft.src = 'img/Olyleft.png'
const olyImageRight = new Image();
olyImageRight.src = 'img/Olyright.png'
const aliveBunnyImage = new Image();
aliveBunnyImage.src = 'img/aliveBunny.png'
const deadBunnyImage = new Image();
deadBunnyImage.src = 'img/deadBunny.png'
const coyoteLeftImage = new Image();
coyoteLeftImage.src =  'img/CoyoteLeft.png'
const coyoteRightImage = new Image();
coyoteRightImage.src =  'img/CoyoteRight.png'
const niceMathewImage = new Image();
niceMathewImage.src = 'img/niceMathew.png'
const angryMathewImage = new Image();
angryMathewImage.src = 'img/angryMathew.png'
const sharollImage = new Image();
sharollImage.src = 'img/angryCaroll.png'
const carImage = new Image();
carImage.src = 'img/car1.png'
const carImage2 = new Image();
carImage2.src = 'img/car2.png'
const moonImage = new Image()
moonImage.src= 'img/moon.png'
let moonX = 0;


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
let timeBox;
let moon;


class Character {
  constructor(x, y, color, width, height, speed,image) {
    this.x = x;
    this.y = y;
    this.color = color;
    this.width = width;
    this.height = height;
    this.speed = speed;
    this.image = image;
    this.alive = true;
    this.hunting = false;
    this.drawImages = function(){
      ctx.drawImage(this.image, this.x, this.y, this.width, this.height)
  }
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
  constructor(x, y, color, width, height, speed,image) {
    super(x, y, color, width, height, speed,image);
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
  constructor(x, y, img, width, height, speed,image) {
    super(x, y, img, width, height, speed,image);
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
    oly = new Oly(
      canvasWidth - canvasWidth * 0.05,
      spawnHeight - spawnHeight * 0.16,
      "grey",
      canvasWidth * 0.055,
      canvasWidth * 0.055,
      4,
      olyImageLeft
    );
    bunny1 = new Bunny(
      Math.floor(Math.random() * (canvasWidth - canvasWidth * 0.052)),
      randomSpawn(minSpawn,maxSpawn),
      "white",
      canvasWidth * 0.03,
      canvasWidth * 0.03,
      0.3,
      aliveBunnyImage
    )
    bunny2 = new Bunny(
      Math.floor(Math.random() * (canvasWidth - canvasWidth * 0.052)),
      randomSpawn(minSpawn,maxSpawn),
      "white",
      canvasWidth * 0.03,
      canvasWidth * 0.03,
      0.3,
      aliveBunnyImage
    );
    bunny3 = new Bunny(
      Math.floor(Math.random() * (canvasWidth - canvasWidth * 0.052)),
      randomSpawn(minSpawn,maxSpawn),
      "white",
      canvasWidth * 0.03,
      canvasWidth * 0.03,
      0.3,
      aliveBunnyImage
    );
    coyote = new Character(
      Math.floor(Math.random() * (canvasWidth - canvasWidth * 0.052)),
      randomSpawn(minSpawn,maxSpawn),
      "brown",
      canvasWidth * 0.07,
      canvasWidth * 0.07,
      0.7,
      coyoteRightImage
    );
    stoop = new Character(
      canvasWidth * 0.9674,
      spawnHeight * 0.83897,
      "black",
      canvasWidth * 0.042,
      spawnHeight * 0.10827,
      0
    );
    road = new Character(
      canvasWidth * 0.3153,
      0,
      "black",
      canvasWidth * 0.1051,
      canvasHeight
    );
    dash1 = new Character(
      canvasWidth * 0.3627,
      0,
      "yellow",
      canvasWidth * 0.0105,
      canvasHeight * 0.10826
    );
    dash2 = new Character(
      canvasWidth * 0.3627,
      canvasHeight * 0.2165,
      "yellow",
      canvasWidth * 0.0105,
      canvasHeight * 0.10826
    );
    dash3 = new Character(
      canvasWidth * 0.3627,
      canvasHeight * 0.433,
      "yellow",
      canvasWidth * 0.0105,
      canvasHeight * 0.10826
    );
    dash4 = new Character(
      canvasWidth * 0.3627,
      canvasHeight * 0.6496,
      "yellow",
      canvasWidth * 0.0105,
      canvasHeight * 0.10826
    );
    dash5 = new Character(
      canvasWidth * 0.3627,
      canvasHeight * 0.8661,
      "yellow",
      canvasWidth * 0.0105,
      canvasHeight * 0.10826
    );
    car1 = new Character(
      canvasWidth * 0.3134,
      0 - spawnHeight * 0.13534,
      "blue",
      canvasWidth * 0.0473,
      spawnHeight * 0.0812,
      6,
      carImage
    );
    car2 = new Character(
      canvasWidth * 0.3733,
      spawnHeight,
      "blue",
      canvasWidth * 0.0473,
      spawnHeight * 0.0812,
      6,
      carImage2
    )
    sharoll = new Character(
      Math.floor(Math.random() * (canvasWidth * 0.2418)),
      randomSpawn(minSpawn,maxSpawn),
      "orange",
      canvasWidth * 0.1,
      canvasWidth * 0.1,
      0.5,
      sharollImage,
    );
    mathew = new Character(
      canvasWidth * 0.4311 + Math.floor(Math.random() * (canvasWidth * 0.4732)),
      randomSpawn(minSpawn,maxSpawn),
      "purple",
      canvasWidth * 0.07,
      canvasWidth * 0.1,
      0.5,
      niceMathewImage
    );
    timeBox = new Character(
        0, 0, "black", canvasWidth, canvasHeight * .07
  )
    moon = new Character(
      moonX,canvasHeight * .01353,"white", canvasWidth * .0210, canvasWidth * .0210, 1, moonImage
    )

    console.log(timeBox.height)
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
    sharoll.drawImages();
    mathew.drawImages();
    oly.drawImages();
    bunny1.drawImages();
    bunny2.drawImages();
    bunny3.drawImages();
    coyote.drawImages();
    car1.drawImages();
    car2.drawImages();
    timeBox.render();
    timerImg();
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
      oly.y >= (canvasHeight - spawnHeight) + (canvasHeight * .015)
        ? (oly.y -= spawnHeight * canvasWidth * 0.000007114 * oly.speed)
        : null;
      break;

    case "ArrowDown":
      oly.y <= (canvasHeight) - (canvasHeight * .0812) ?
      oly.y += spawnHeight * canvasWidth * 0.000007114 * oly.speed: null
      break;

    case "ArrowLeft":
      oly.x >= 10 ?
      oly.x -= spawnHeight * canvasWidth * 0.000007114 * oly.speed: null
      oly.image = olyImageLeft;
      break;

    case "ArrowRight":
      oly.x <= canvasWidth - 60 ? 
      oly.x += spawnHeight * canvasWidth * 0.000007114 * oly.speed: null
      oly.image = olyImageRight;
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
    coyote.x += spawnHeight * canvasWidth * 0.000007114 * coyote.speed;
    coyote.image = coyoteRightImage
  } else {
    coyote.x -= spawnHeight * canvasWidth * 0.000007114 * coyote.speed;
    coyote.image = coyoteLeftImage
  }

  if (coyote.y < oly.y) {
    coyote.y += spawnHeight * canvasWidth * 0.000007114 * coyote.speed;
  } else {
    coyote.y -= spawnHeight * canvasWidth * 0.000007114 * coyote.speed;
  }
}

//Mathew Hunt you
function mathewHunt(m, dist) {
    if (
      oly.hasBunny &&
      m.x - oly.x <= dist * canvasWidth &&
      m.x - oly.x >= 0 &&
      m.y - oly.y <= dist * spawnHeight &&
      m.y - oly.y >= 0
      ) {
        m.width = canvasWidth * 0.12;
        m.height = canvasWidth * 0.15;
        m.x -= spawnHeight * canvasWidth * 0.000007114 * m.speed;
        m.y -= spawnHeight * canvasWidth * 0.000007114 * m.speed;
        m.image = angryMathewImage;
        m.hunting = true;
      } else if (
        oly.hasBunny &&
        oly.x - m.x <= dist * canvasWidth &&
        oly.x - m.x >= 0 &&
        oly.y - m.y <= dist * spawnHeight &&
        oly.y - m.y >= 0
        ) {
          m.width = canvasWidth * 0.12;
          m.height = canvasWidth * 0.15;
          m.x += spawnHeight * canvasWidth * 0.000007114 * m.speed;
          m.y += spawnHeight * canvasWidth * 0.000007114 * m.speed;
          m.image = angryMathewImage;
          m.hunting = true;
        } else if (
          oly.hasBunny &&
          m.x - oly.x <= dist * canvasWidth &&
          m.x - oly.x >= 0 &&
          oly.y - m.y <= dist * spawnHeight &&
          oly.y - m.y >= 0
          ) {
            m.width = canvasWidth * 0.12;
            m.height = canvasWidth * 0.15;
            m.x -= spawnHeight * canvasWidth * 0.000007114 * m.speed;
            m.y += spawnHeight * canvasWidth * 0.000007114 * m.speed;
            m.image = angryMathewImage;
            m.hunting = true;
          } else if (
            oly.hasBunny &&
            oly.x - m.x <= dist * canvasWidth &&
            oly.x - m.x >= 0 &&
            m.y - oly.y <= dist * spawnHeight &&
            m.y - oly.y >= 0
            ) {
              m.width = canvasWidth * 0.12;
              m.height = canvasWidth * 0.15;
              m.x += spawnHeight * canvasWidth * 0.000007114 * m.speed;
              m.y -= spawnHeight * canvasWidth * 0.000007114 * m.speed;
              m.image = angryMathewImage;
              m.hunting = true;
            } else {
              m.color = "purple";
              m.image = niceMathewImage;
              m.width = canvasWidth * 0.07;
              m.height = canvasWidth * 0.1;
              m.hunting = false
            }
        }
          
function sharollHunt(m, dist) {
  if (
    m.x - oly.x <= dist * canvasWidth &&
    m.x - oly.x >= 0 &&
    m.y - oly.y <= dist * spawnHeight &&
    m.y - oly.y >= 0
  ) {
    m.x -= spawnHeight * canvasWidth * 0.000007114 * m.speed;
    m.y -= spawnHeight * canvasWidth * 0.000007114 * m.speed;
  } else if (
    oly.x - m.x <= dist * canvasWidth &&
    oly.x - m.x >= 0 &&
    oly.y - m.y <= dist * spawnHeight &&
    oly.y - m.y >= 0
  ) {
    m.x += spawnHeight * canvasWidth * 0.000007114 * m.speed;
    m.y += spawnHeight * canvasWidth * 0.000007114 * m.speed;
  } else if (
    m.x - oly.x <= dist * canvasWidth &&
    m.x - oly.x >= 0 &&
    oly.y - m.y <= dist * spawnHeight &&
    oly.y - m.y >= 0
  ) {
    m.x -= spawnHeight * canvasWidth * 0.000007114 * m.speed;
    m.y += spawnHeight * canvasWidth * 0.000007114 * m.speed;
  } else if (
    oly.x - m.x <= dist * canvasWidth &&
    oly.x - m.x >= 0 &&
    m.y - oly.y <= dist * spawnHeight &&
    m.y - oly.y >= 0
  ) {
    m.x += spawnHeight * canvasWidth * 0.000007114 * m.speed;
    m.y -= spawnHeight * canvasWidth * 0.000007114 * m.speed;
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
//       b.x += ((spawnHeight * canvasWidth) * .000007114) * b.speed;
//       b.y += ((spawnHeight * canvasWidth) * .000007114) * b.speed;
//     } else if (
//       oly.x - b.x <= 200 &&
//       oly.x - b.x >= 0 &&
//       oly.y - b.y <= 200 &&
//       oly.y - b.y >= 0
//     ) {
//       b.x - ((spawnHeight * canvasWidth) * .000007114) * b.speed;
//       b.y -= ((spawnHeight * canvasWidth) * .000007114) * b.speed;
//     } else if (
//       b.x - oly.x <= 200 &&
//       b.x - oly.x >= 0 &&
//       oly.y - b.y <= 200 &&
//       oly.y - b.y >= 0
//     ) {
//       b.x += ((spawnHeight * canvasWidth) * .000007114) * b.speed;
//       b.y -= ((spawnHeight * canvasWidth) * .000007114) * b.speed;
//     } else if (
//       oly.x - b.x <= 200 &&
//       oly.x - b.x >= 0 &&
//       b.y - oly.y <= 200 &&
//       b.y - oly.y >= 0
//     ) {
//       b.x -= ((spawnHeight * canvasWidth) * .000007114) * b.speed;
//       b.y += ((spawnHeight * canvasWidth) * .000007114) * b.speed;
//     }
//   }
// }

//Bunny Move!
function bunnyMove(b) {
  if (b.alive) {
    if(b.x >= (canvasWidth *.05256) && b.x <= canvasWidth - (canvasWidth *.05256) && b.y >= (canvasHeight - spawnHeight) + (canvasHeight *.05256) && b.y <= canvasHeight - (canvasHeight *.05256))
    if (
      b.x - oly.x <= canvasWidth * 0.21 &&
      b.x - oly.x >= 0 &&
      b.y - oly.y <= spawnHeight * 0.21 &&
      b.y - oly.y >= 0
    ) {
      b.x += spawnHeight * canvasWidth * 0.000007114 * b.speed;
      b.y += spawnHeight * canvasWidth * 0.000007114 * b.speed;
    } else if (
      oly.x - b.x <= canvasWidth * 0.21 &&
      oly.x - b.x >= 0 &&
      oly.y - b.y <= spawnHeight * 0.21 &&
      oly.y - b.y >= 0
    ) {
      b.x - spawnHeight * canvasWidth * 0.000007114 * b.speed;
      b.y -= spawnHeight * canvasWidth * 0.000007114 * b.speed;
    } else if (
      b.x - oly.x <= canvasWidth * 0.21 &&
      b.x - oly.x >= 0 &&
      oly.y - b.y <= spawnHeight * 0.21 &&
      oly.y - b.y >= 0
    ) {
      b.x += spawnHeight * canvasWidth * 0.000007114 * b.speed;
      b.y -= spawnHeight * canvasWidth * 0.000007114 * b.speed;
    } else if (
      oly.x - b.x <= canvasWidth * 0.21 &&
      oly.x - b.x >= 0 &&
      b.y - oly.y <= spawnHeight * 0.21 &&
      b.y - oly.y >= 0
    ) {
      b.x -= spawnHeight * canvasWidth * 0.000007114 * b.speed;
      b.y += spawnHeight * canvasWidth * 0.000007114 * b.speed;
    }
  }
}

//Game Loop
function gameLoop() {
  //clear baord every loop
  if(!gameOver){

    ctx.clearRect(0, 0, game.width, game.height);
    //render my characters every loop
    stoop.render();
    road.render();
    dash1.render();
    dash2.render();
    dash3.render();
    dash4.render();
    dash5.render();
    oly.drawImages();
    sharoll.drawImages();
    mathew.drawImages();
    bunny1.drawImages();
    bunny2.drawImages();
    bunny3.drawImages();
    coyote.drawImages();
    car1.drawImages();
    car2.drawImages();
    timeBox.render();
    detectHit(oly, bunny1);
    detectHit(oly, bunny2);
    detectHit(oly, bunny3);
    detectHit(oly, coyote);
    detectHit(bunny1, stoop);
    detectHit(bunny2, stoop);
    detectHit(bunny3, stoop);
    detectHit(oly, stoop);
    detectHit(coyote, road);
    //   detectHit(car1,oly)
    //   detectHit(car2,oly)
    coyoteHunt();
    mathewHunt(mathew, 0.5);
    sharollHunt(sharoll, 0.4);
    detectHit(car1, coyote);
    detectHit(car2, coyote);
    detectHit(sharoll, road);
    detectHit(mathew, road);
    detectCarHit(car1, oly);
    detectCarHit(car2, oly);
    detectHit(mathew, oly);
    detectHit(sharoll, oly);
    randomCar();
    bunnyMove(bunny1);
    bunnyMove(bunny2);
    bunnyMove(bunny3);
    addScore(bunny1);
    addScore(bunny2);
    addScore(bunny3);
    timerImg();

    //console.log(bunny1.y, bunny2.y, bunny3.y)

  }
  else {
  }
    
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
      p2.image = deadBunnyImage
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
      endGame(coyote)
      oly.color = "red";
      oly.alive = false;

    } else if (p1.constructor.name === "Bunny" && p2 === stoop) {
      p1.onStoop = true;
      //console.log(this.onStoop)
      // } else if (p1 === car1 || p1 === car2 && p2 === oly){
      //     oly.color = "red"
      //     console.log(`Oly Got hit by a car :()`)
    } else if (p1 === car1 || (p1 === car2 && p2 === coyote)) {
      console.log(`coyote was hit`);
      if (Math.random() < 0.5) {
        spawny = -1;
      } else {
        spawny = 1;
      }
      if (spawny === -1) {
        coyote.y = 0 - Math.floor(Math.random() * (spawnHeight * 0.812));
      } else {
        coyote.y =
          spawnHeight + Math.floor(Math.random() * (spawnHeight * 0.812));
      }
      if (Math.random() < 0.5) {
        spawnx = -1;
      } else {
        spawnx = 1;
      }
      if (spawnx === -1) {
        coyote.x = 0 - Math.floor(Math.random() * (canvasWidth * 0.6307));
      } else {
        coyote.x =
          canvasWidth + Math.floor(Math.random() * (canvasWidth * 0.6307));
      }
    } else if (p1 === coyote && p2 === road) {
      coyote.speed = 3;
    } else if (p1 === mathew || (p1 === sharoll && p2 === oly)) {
      if(p1 === mathew){
        if(mathew.hunting){
          oly.color = "red";
          endGame(p1)
        } else {
          null
        }
      } else {
        oly.color = "red";
        endGame(p1)
      }
      //console.log(`${p1.constructor.name} got oly!`)
    } else if ((p1 === mathew || p1 === sharoll) && p2 === road){
        if(p1 === mathew){
            mathew.x += 5
        } else{
            sharoll.x -= 5
         }
    }
    return true;
  } else {
    coyote.speed = 0.7;
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
    if (p1 === car1 || (p1 === car2 && p2 === oly)) {
      oly.color = "red";
      endGame(p1)
      console.log(`Oly Got hit by a car :()`);
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
    b.image = aliveBunnyImage;
    b.x = Math.floor(Math.random() * (canvasWidth - canvasWidth * 0.052));
    b.y = Math.floor(Math.random() * (spawnHeight - spawnHeight * 0.186));
    console.log(score);
  }
}



function randomCar(){
    if(car1.y < 800){
        car1.y += ((spawnHeight * canvasWidth) * .000007114) * car1.speed;
    } else {
        car1.y = (-1 * (spawnHeight * .09473)) - (Math.floor(Math.random() * (spawnHeight * 2.7067)))
    }

    if(car2.y > -70){
        car2.y -= ((spawnHeight * canvasWidth) * .000007114) * car1.speed
    } else {
        car2.y = (spawnHeight + (spawnHeight * .015))+ (Math.floor(Math.random() * (spawnHeight * 2.7067)))
    }
}

function timerImg(){
    moonX += (canvasWidth/500)
    ctx.drawImage(moonImage, moonX,canvasHeight * .01353, canvasHeight * .05, canvasHeight * .05)
    if(moonX >= canvasWidth){
        gameOver = true;
        timeRanOut = true;
        if (score < 5){
          lostScore = true;
          endGame(lostScore)
        } else {
          lostScore = false;
          endGame();
        }
    }
}

function endGame(a){
  gameOver = true;
  endGameEl.style.display = "block"
  if(a === coyote){
    endGameEl.innerText = "Game Over. Oly was eaten by a coyote"
  } else if (a === mathew){
    endGameEl.innerText = "Game Over. Mathew Caught Oly with a bunny"
  } else if (a === sharoll){
    endGameEl.innerText = "Game Over. Sharoll finally got Oly"
  } else if (a === car1){
    endGameEl.innerText = "Game Over. Oly went splat"
  } else if (a === car2){
    endGameEl.innerText = "Game Over. Oly went splat"
  } else if (a === lostScore && timeRanOut){
    endGameEl.innerText = "Game Over. Oly did not get enough bunnies to impress Kate"
  } else {
    endGameEl.innerText = `Game Over. You did it! You won! You got ${score} bunnies! Guess who is getting wet food today?!`
  } 
}

function randomSpawn(min,max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}







// //function randomCar Where cars stop when sharolls or Mathew are on the road. 
// function randomCar(p1, p2) {
//   let humanOnRoad =
//     p1.y + p1.height > p2.y &&
//     p1.y < p2.y + p2.height &&
//     p1.x + p1.width > p2.x &&
//     p1.x < p2.x + p2.width;

                                          
//     if(humanOnRoad && (p1.y - car1.y <= (spawnHeight * 0.1353)) && (p1.y - car2.y <= - (spawnHeight * 0.1353))){
//         console.log("trigger 1")
//         car1.y = car1.y;
//         car2.y = car2.y
//   } else if (humanOnRoad && (p1.y - car1.y <= (spawnHeight * 0.1353))) {
//     console.log("trigger 2")
//     car1.y = car1.y;
//     if (car2.y > -70) {
//         car2.y -= spawnHeight * canvasWidth * 0.000007114 * car1.speed;
//       } else {
//         car2.y =
//           spawnHeight +
//           spawnHeight * 0.015 +
//           Math.floor(Math.random() * (spawnHeight * 2.7067));
//       }
//   } else if (humanOnRoad && (p1.y - car2.y <= -(spawnHeight * 0.1353))){
//     car2.y = car2.y;
//     console.log("trigger 3")
//     if (car1.y < 800) {
//         car1.y += spawnHeight * canvasWidth * 0.000007114 * car1.speed;
//       } else {
//         car1.y =
//           -1 * (spawnHeight * 0.09473) -
//           Math.floor(Math.random() * (spawnHeight * 2.7067));
//       }
//   }
//   else {
//     if (car1.y < 800) {
//       car1.y += spawnHeight * canvasWidth * 0.000007114 * car1.speed;
//     } else {
//       car1.y =
//         -1 * (spawnHeight * 0.09473) -
//         Math.floor(Math.random() * (spawnHeight * 2.7067));
//     }

//     if (car2.y > -70) {
//       car2.y -= spawnHeight * canvasWidth * 0.000007114 * car1.speed;
//     } else {
//       car2.y =
//         spawnHeight +
//         spawnHeight * 0.015 +
//         Math.floor(Math.random() * (spawnHeight * 2.7067));
//     }
//   }