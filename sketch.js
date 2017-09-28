function setup() 
{ 
	createCanvas(windowWidth, windowHeight); 
	background("#ab1300");
	noStroke();
}
function draw() 
{
	if (mouseIsPressed) 
	{
	var size = random(10, 100);
	ellipse(mouseX, mouseY, size, size); 
	}
	if(keyIsPressed)
	{
		if(key==" ")
		{
			background("#ab1300");
		}
	}
	console.log(frameCount);
}
