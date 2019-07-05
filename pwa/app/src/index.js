const config = {
  type: Phaser.AUTO,
  scale: { mode: Phaser.Scale.NONE },
  backgroundColor: "#6a539b",
  physics: {
    default: "matter",
    matter: { debug: false, gravity: { y: 0.2 } },
  },
  scene: { create, preload, update },
};

const game = new Phaser.Game(config);
const floorHeight = 80;
const fontFamily = "Arial, Helvetica, sans-serif";
let score = 0;
let height = window.innerHeight;
let hiScore = localStorage.getItem("hiScore") || 0;
let hiScoreText = null;
let text = null;

function preload() {
  this.load.image("croissant", "assets/croissant.png");
}

function create() {
  const width = window.innerWidth;
  const height = document.body.clientHeight;

  this.game.scale.resize(width, height);
  this.matter.world.setBounds(0, 0, width, height + 200);

  scoreText = this.add.text(0, height / 10, ``, { fontFamily , fontSize: 64, color: "#fff" });
  hiScoreText = this.add.text(0, scoreText.height + scoreText.y, ``, { fontFamily, fontSize: 64, color: "#fff" });

  const croissant = this.matter.add
    .image(width / 2, height / 2, "croissant", null, { restitution: .25, chamfer: 1 })
    .setBounce(0.9)
    .setInteractive()
    .setVelocity(0, -5.0)
    .setDisplaySize(75, 75)
    .on("pointerdown", (event) => {
      const { position } = event;
      const vector = { x: croissant.x - position.x, y: -Math.abs(croissant.y - position.y) };
      vector.x /= 65;
      vector.y /= 65;
      croissant.applyForce(vector);
      score++;
    });

    const floor = this.matter.add.rectangle(width / 2, height - floorHeight / 2, width, floorHeight, { isStatic: true });
    const floorRect = new Phaser.Geom.Rectangle(0, height - floorHeight, width, floorHeight);
    const floorGraphics = this.add.graphics({ fillStyle: { color: 0x991f5a } });
    floorGraphics.fillRectShape(floorRect);

    this.matter.world.on("collisionstart", function (event, bodyA, bodyB) {
      if(bodyA === floor || bodyB === floor) {
        score = 0;
        localStorage.setItem("hiScore", hiScore);
      }
  });
}

function update() {
  const { width } = this.game.canvas;
  hiScore = score > hiScore ? score : hiScore;
  scoreText.setText(`Score: ${score}`);
  hiScoreText.setText(`Hi Score: ${hiScore}`);
  scoreText.x = width / 2 - scoreText.width / 2;
  hiScoreText.x = width / 2 - hiScoreText.width / 2;
}

window.addEventListener("resize", function(event) {
  game.scene.start("default");
});
