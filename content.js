// Create a new iframe element
var iframe = document.createElement('iframe');
// var link = document.createElement('link');
// link.href = './style.css'
// link.type = 'text/css'
// link.rel = 'stylesheet'


// document.head.appendChild(link);
// Set the source of the iframe 
iframe.src = 'https://twyng.com/developers?q=test';
iframe.allow = "camera;microphone"

// Set the iframe style 
// iframe.style.position = 'relative';
// iframe.style.bottom = '10px';
// iframe.style.right = '10px';
iframe.style.width = '100%'; 
iframe.style.height = '270px'; 
// iframe.style.border = '1px solid #000';
// iframe.style.zIndex = '1000'; 

// Set additional attributes if needed (e.g., for sandboxing)
// iframe.setAttribute('sandbox', 'allow-scripts allow-same-origin');

// Append the iframe to the body of the document
const div = document.createElement('div')
const bar = document.createElement('div')

div.id = 'twyng-draggable'
bar.id = "twyng-draggable-bar"

div.appendChild(bar)
div.appendChild(iframe)
document.body.appendChild(div);

const draggable = div
var isMouseDown,initX,initY,height = draggable.offsetHeight,width = draggable.offsetWidth;

draggable.addEventListener('mousedown', function(e) {
  isMouseDown = true;
  document.body.classList.add('no-select');
  initX = e.offsetX;
  initY = e.offsetY;
})

document.addEventListener('mousemove', function(e) {
  if (isMouseDown) {
    var cx = e.clientX - initX,
        cy = e.clientY - initY;
    if (cx < 0) {
      cx = 0;
    }
    if (cy < 0) {
      cy = 0;
    }
    if (window.innerWidth - e.clientX + initX < width) {
      cx = window.innerWidth - width;
    }
    if (e.clientY > window.innerHeight - height+ initY) {
      cy = window.innerHeight - height;
    }
    draggable.style.left = cx + 'px';
    draggable.style.top = cy + 'px';
  }
})

draggable.addEventListener('mouseup', function() {
  isMouseDown = false;
  document.body.classList.remove('no-select');
})



