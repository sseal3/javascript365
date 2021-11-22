const canvas = document.getElementById("canvas");
const arcBox = document.getElementById("numArchesTB");
const ctx = canvas.getContext("2d");
let cw = canvas.width = 500,
  cx = cw / 2;
let ch = canvas.height = 500,
  cy = ch / 2;


function drawArches() {

if (canvas.getContext) {
    const ctx = canvas.getContext('2d');
    ctx.strokeStyle = 'green';
    ctx.lineWidth = 2;

    const y = canvas.height / 2,
        space = 0;

  var arcCount = document.getElementById("numArchesTB").value;
  const radius = cx / arcCount;
  const x = radius;
    
    for (let i = 0; i < arcCount; i++) {
        ctx.beginPath();
        ctx.arc(x + i * (radius * 2 + space), y, radius,  Math.PI, 0, false);
        ctx.stroke();
    }
}
}