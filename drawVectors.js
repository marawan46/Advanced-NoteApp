let lastX, lastY;
let actions = [];
let currentColor = 1;
let currentStroke = 5;
let CanErase = false;
    function setup() {
      // Create canvas inside the specified container
      const canvas = createCanvas(600, 400);
      background(255)
      canvas.parent('myCanvas');  // Attach the canvas to the container with id 'myCanvasContainer'  // Set default stroke color to black
      currentStroke = document.querySelector('#stroke').value
      strokeWeight(currentStroke);

      document.querySelector('#savefile').addEventListener('click',()=>{
        saveJSON(actions, 'drawing.json')
      })
      document.querySelector('#saveimg').addEventListener('click',()=>{
        saveCanvas('Myimg','png')
      })

      document.querySelector('#loadfile').addEventListener('change',loadDrawing)
    
      document.querySelector('#eraser').addEventListener('click',eraser)

      // Clear Button
      document.querySelector('#clearall').addEventListener('click',()=>{
        background(255);
        actions = [];
      });
      document.querySelector('#pen').addEventListener('click',()=>{
        currentColor = document.querySelector('#changecolor').value
      }
      )

      document.querySelector('#changecolor').addEventListener('change',(event)=>{
        console.log(event.target.value)
        document.querySelector('#colorIcon').style.color = event.target.value
        currentColor = event.target.value
      })
    }
  
    function draw() {
      // Draw shapes from actions
      for (let action of actions) {
        stroke(action.color);
        strokeWeight(action.weight);
        line(action.x1, action.y1, action.x2, action.y2);
      }
    }
    function mouseDragged() {
      // Record current drawing action
      let action = {
        x1: pmouseX, // Previous mouse X
        y1: pmouseY, // Previous mouse Y
        x2: mouseX,  // Current mouse X
        y2: mouseY,  // Current mouse Y
        color: currentColor,
        weight: currentStroke,
      };
      actions.push(action); // Add action to the list
    }
    function loadDrawing(event) {
      console.log(event.target.files[0].name);
      loadJSON('drawing.json', (data) => {
        actions = data; // Load actions from JSON
        redrawCanvas();
        console.log('ok')
      });
    }
    function redrawCanvas(){
      for(let action of actions){
        background(255)
        stroke(0);
        strokeWeight(action.weight)
        line(action.x1, action.y1, action.x2, action.y2);

      }
      
    }
    function changeStroke(e){
      currentStroke = e.target.value
    }
    function eraser(){
        CanErase = !CanErase;
      if(CanErase){
        currentColor = 255
        console.log("erased")
      }
      else{
        currentColor = 0
      }
    }
    function keyPressed() {
      if (key === 's' || key === 'S') {
        saveCanvas('myCanvas', 'png'); // Save canvas as 'myCanvas.png'
      }
    }

