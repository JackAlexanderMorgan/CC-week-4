function setup() {
  // put setup code here
  createCanvas(1000, 1000);
  	background(0);

}

function draw() {
  background(0);
  // put drawing code here
  

  for(let x = 25;x < width;x = x+50) {
    let r = random (0, 255);
    let g = random (0, 255);
    let b = random (0, 255);
    let a = random (0, 255);
    fill (r,g,b,a);
		ellipse(x,25,50,50);
    

      for(let y = 25; y < height; y= y+50)
      {
        let r = random (0, 255);
        let g = random (0, 255);
        let b = random (0, 255);
        let a = random (100, 255);
        fill (r,g,b,a);
        ellipse(x,y,50,50);

        unit = 50;
        switch(key){
          case "1":
            stroke(0);
            ellipse(x,y,unit);
          break;
          case "2": 
            herringBone(x,y,unit);
          break;
          case "3": 
            funkyTown(x,y,unit);
          break;
        } 
        

      }
    }
  }


function herringBone(xVal, yVal, unit) {
  
  stroke(255);
  strokeWeight(1);
        
      
  line(xVal, yVal, xVal - unit, yVal + unit);
  line(xVal, yVal, xVal + unit, yVal + unit);
  line(xVal, yVal - unit, xVal - unit, yVal);
  line(xVal, yVal - unit, xVal + unit, yVal);
  line(xVal, yVal - unit, xVal, yVal + unit);
  line(xVal + unit, yVal - unit, xVal + unit, yVal + unit);
        
  }

function funkyTown(xVal, yVal, unit) {
  stroke(255);
  strokeWeight(0);
  //let r = random (0,60);
  
  for (let x = 0; x < width; x= x + unit) {
    //rect(x,25,x+r,25+r);
    for (let y = 0; y < width; y= y + unit){
      let r = random (0,60);
      rect(x,y,r, r);

    }

  }
  
}
     
      
        

  


