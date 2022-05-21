const game = document.querySelector("#game");
let ctx = game.getContext("2d");
game.setAttribute("height", getComputedStyle(game)["height"]);
game.setAttribute("width", getComputedStyle(game)["width"]);

class Character {
  constructor(x, y, img, width, height, speed) {
    this.x = x;
    this.y = y;
    this.img = img;
    this.width = width;
    this.height = height;
    this.speed = speed;
    this.alive = true;
    this.hunting = false;
  }
  //renders images onto canvas
  drawImage(image, dx, dy, dWidth, dHeight) {}

  //very basic move function for non Oly Characters
  move() {
    x += Math.floor(Math.random() * game.width);
    y += Math.floor(Math.random() * game.height);
  }

  //The hunt mechanic for Coyote, and David. 
  hunt(oly,predator){
    predator.x = oly.x;
    predator.y = oly.y;
  }
  
  //die/hitTest
  die(p1,p2){
    if(hitTest){

    }
}
  
}

class Oly extends Character {
  constructor(x, y, img, width, height, speed) {
    super(x, y, img, width, height, speed);
    this.bite = false;
    this.hasBunny = false;
  }

  //Oly's move mechanics. Follows arrow keystrokes
  move() {
    function movementHandler(e) {
      console.log(`the movement was ${e.key}`);

      switch (e.key) {
        case "ArrowUp":
          oly.y >= 0 ? (oly.y -= 5) : null;
          break;

        case "ArrowDown":
          oly.y += 5;
          break;

        case "ArrowLeft":
          oly.x -= 5;
          break;

        case "ArrowRight":
          oly.x += 5;
          break;
      }
      console.log(donkey);
    }
  }

  //Oly bite mechanic. Space bar click bites. If collision with deadBunny and bite ==> hasBunny. 
  bite(e){
    switch(e.key){
        case " ":
        this.bite = true;
        killBunny(oly.aliveBunny)
        append(oly.deadBunny)  
    }
  }

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

class David extends Character {
    constructor(x, y, img, width, height, speed) {
        super(x, y, img, width, height, speed);
}
    //Activates David hunt. Switches his img to Angry David. 
    getAngry(){
        if(hunting){
            img.src = "Angry David"
            this.hunt(oly,david)
        } else {
            img.src = "nice David"
        }
    }
}


