<!-- Based on Sashagi YouTube Tutorial -->
const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
const stars = [];

function init() {
  <!-- Set up Height and Width of Canvas to same as parent element -->
  const banner = document.getElementById('banner');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  
  <!-- Create the stars -->
  for (let i = 0; i < 200; i++) {
    stars.push({
      x: Math.random(),
      y: Math.random(),
      size: Math.random(),
      change: Math.random()/5.0,
    });
  }
}

function update() {
  <!-- For each star, add change to the size -->
  for (const star of stars) {
    star.x += 0.001; 
    if (star.x > 1.0) {
      star.x = 0.0;
    }
    
    <!-- Prevent from getting too big or too small -->
    if (star.size < 0.1) {
      star.change = 0.1;
    } 
    else if (star.size > 0.9) {
      star.change = -0.1;
    }
    star.size += star.change;
  }
}

function render() {
  <!-- Draw the stars -->
  <!-- Get the height and width of the canvas and use clear rect to reset the canvas -->
  const {width, height} = canvas;
  context.clearRect(0,0, width, height);
  for (const star of stars) {
    context.beginPath();
    context.arc(star.x * width, star.y * height, star.size * 3, 0, 2 * Math. PI, false);
    context.fillStyle = 'white';
    context.fill();
  }
}

function twinkle() {
  update();
  render();
}
setInterval(twinkle, 150);

init();
render();