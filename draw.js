//var two = new Two({ height: 400,width:400 }).appendTo(document.body);
//rectangle
var z1=0;
var z2=0;
//counter
var th1
var th = 0;
var h1
var xb=200,yb=100,xd=200,yd=300;
var xp=200,yp=200;


function point()
{
	var ctx=canvas.getContext('2d');

	ctx.arc(xp,yp,3,0,360*2*Math.PI/180);
}

function draw()
{
	canvas = document.getElementById('myCanvas');
	var ctx=canvas.getContext('2d');
 
	ctx.clearRect(0,0,1400,400);
	ctx.beginPath();
	ctx.moveTo(xb,yb);
	ctx.lineTo(100,100);
	ctx.lineTo(100,300);
	ctx.lineTo(xd,yd);
	ctx.lineTo(xb,yb);
	ctx.lineTo(100,100);

	ctx.stroke();
	ctx.closePath();
	ctx.moveTo(xp,yp);
	point();
	
	ctx.stroke();
	
	//	ctx.closePath()
}

//point1


function rotatecw()
{ 
	
	var ctx=canvas.getContext('2d');

	h1=yp-yb;
	z1 = z1 + 1;
	var th = 5
	var p1=h1*Math.tan(th*Math.PI/180);

	var h2=yd-yp;
	var p2=h2*Math.tan(th*Math.PI/180);

	th1 = Math.atan(p1/h1)

	xb=xb+p1;
	xd=xd-p2;
	draw();
}
function rotateacw(){
	var ctx=canvas.getContext('2d');


	h1=yp-yb;
	z1  = z1 - 1
	var th = 5	
	var p1=h1*Math.tan(th*Math.PI/180);

	var h2=yd-yp;
	var p2=h2*Math.tan(th*Math.PI/180);

	th1 = Math.atan(p1/h1)

	xb=xb-p1;
	xd=xd+p2;


	draw();}

function up(){

var ctx=canvas.getContext('2d');

if(xb!=xd)
	{
	yp = yp -  5
 	xp = xp + (5*0.0874*z1) ;

	}
	else{yp-=5;}
	draw();}
function down(){

var ctx=canvas.getContext('2d');

	if(xb!=xd)
	{
	yp = yp +  5
 	xp = xp - (5*0.0874*z1) ;

	}
	else{yp+=5;}
	draw();
	ctx.stroke();	}
function right(){
var ctx=canvas.getContext('2d');

	xp+=5;
	xb+=5;
	xd+=5;
	draw();}
function left(){

var ctx=canvas.getContext('2d');

	xp-=5;
	xb-=5;
	xd-=5;
	draw();}


