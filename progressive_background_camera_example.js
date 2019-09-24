let myCapture, // camera
  myVida; // VIDA

let points = [];

let captureWidth, captureHeight;
let pixelsData;

function initCaptureDevice() {
  try {
    myCapture = createCapture(VIDEO);
    myCapture.size(captureWidth, captureHeight);
    myCapture.elt.setAttribute('playsinline', '');
    myCapture.hide();
    console.log(
      '[initCaptureDevice] capture ready. Resolution: ' +
      myCapture.width + ' ' + myCapture.height
    );
  } catch (_err) {
    console.log('[initCaptureDevice] capture error: ' + _err);
  }
}

function setup() {
  captureWidth = 320;
  captureHeight = 240;
  createCanvas(windowWidth, windowHeight); // we need some space...
  initCaptureDevice(); // and access to the camera


  /*myVida = new Vida(this); // create the object
  myVida.progressiveBackgroundFlag = true;
  myVida.mirror = myVida.MIRROR_HORIZONTAL; // uncomment if needed
 
  myVida.imageFilterFeedback = 0.90;
  myVida.imageFilterThreshold = 0.10;*/

  frameRate(30); // set framerate
  pixelsDatan = (captureWidth * captureHeight) * 4;

}


function draw() {
  if (myCapture !== null && myCapture !== undefined) { // safety first
    background(0);

    //image(myCapture, 0, 0);
    readPixelsValue(myCapture);
    //readPixelsValue(myCapture);

  } else {
    background(255, 0, 0);
  }

  //renderMeshPoints();

}

function readPixelsValue(imageToRead) {
  imageToRead.loadPixels();

  for (let y = 0; y < captureHeight; y++) {
    for (let x = 0; x < captureWidth; x++) {

      let index = x + (y * 320);

      if (x % 3 == 0 && (y * 320) % 30 == 0) {

        let r = imageToRead.pixels[(index*4)];
        let g = imageToRead.pixels[(index*4) + 1];
        let b = imageToRead.pixels[(index*4) + 2];
        let a = imageToRead.pixels[(index*4) + 3];

        noStroke();
        fill(r, g, b, a);
       //ellipse(x * 4, y * 4, 5, 5);
        if(r<150 && g<100){
          fill(0);
          text('0',x*4,y*4);
        }else{
          text('1',x*4,y*4);
        }
       
      }



    }

  }

  imageToRead.updatePixels();

}

function renderMeshPoints() {
  points.forEach(point => {
    point.render();
  });
}

function createMeshPoints() {
  for (let y = 0; y < windowHeight; y += 50) {
    for (let x = 0; x < windowWidth; x += 50) {
      points.push(new Point(x, y, 30));

    }
  }

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  points = [];
  //createMeshPoints();
}