window.onload = function()
{

    var canvas;
    var ctx;
    var delay = 100;
    var xCoord = 0;
    var yCoord = 0; 
    var canvaswidth = 900;
    var canvasheight = 600;
    var blockSize = 30;
    
    init();

    function init ()
    {
    var canvas = document.createElement('canvas');
    canvas.width = canvaswidth;
    canvas.height = canvasheight;
    canvas.style.border = "2px solid";
    document.body.appendChild(canvas);
    ctx = canvas.getContext('2d');
    refreshCanvas();
   
}

    function refreshCanvas()
    {
        xCoord += 5;
        yCoord += 5;   
        ctx.clearRect (0,0,canvaswidth,canvasheight);
        ctx.fillStyle = "#ff0000";
        ctx.fillRect (xCoord, yCoord, 100, 50); //30px x =haut gauche(honrizontal), 30px y (vertical), 100px longeur, 50 hauteur
        setTimeout(refreshCanvas,delay);
    }
    function snake(body){

        this.body = body;
        this.draw = function(){
            ctx.save();
            ctx.fillStyle = "#ff0000";
            Form();
            
        }
        
    }
}