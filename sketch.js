let soundFX;
let button1;
let button4;
let button3;
let button2;
let feedbackDelay;
let delaySlider;
let distAmount;
let distSlider;

function preload()
{
  feedbackDelay = new Tone.FeedbackDelay("8n",0.5); //adding delay object
  distAmount = new Tone.Distortion(0.5);

  //Tone.Player(s) allows for multiple audio files
  soundFX = new Tone.Players({
    boom: "assets/boom.mp3",
    siren: "assets/siren.mp3",
    techno: "assets/techno.mp3",
    wiggle: "assets/wiggle.mp3"
  });

  soundFX.connect(feedbackDelay);
  feedbackDelay.connect(distAmount);
  distAmount.toDestination();
}

function setup() {
  createCanvas(400, 400);
  
  button1 = createButton("Boom");
  button1.position(110,80);
  button1.mousePressed(() => soundFX.player("boom").start());

  button2 = createButton("Siren");
  button2.position(205,80);
  button2.mousePressed(() => soundFX.player("siren").start());

  button3 = createButton("Techno");
  button3.position(108,120);
  button3.mousePressed(() => soundFX.player("techno").start());

  button4 = createButton("Wiggle");
  button4.position(200,120);
  button4.mousePressed(() => soundFX.player("wiggle").start());

 
  delaySlider = createSlider(0, 0.9, 0, 0.05); //0-0.9 starting at 0 stepping by 0.05
  delaySlider.position(120,200);
  delaySlider.mouseMoved(() => feedbackDelay.delayTime.value = delaySlider.value());

  distSlider = createSlider(0,0.9,0,0.05);
  distSlider.position(120,250);
  distSlider.mouseMoved(() => distAmount.distortion = distSlider.value());

}

function draw() {
  background('gray');

  fill('white');
  rect(80,60,218,105);
  fill('lightgray');
  rect(100,180,175,100)
  fill('black');
  text("DELAY",165,200);
  text("DISTORTION",150,250);
}
