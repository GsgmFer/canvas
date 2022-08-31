var ultima_posicion_x;
var ultima_posicion_y;
var actual_posicion_x;
var actual_posicion_y;

var lienzo = document.getElementById("myCanvas");
var ctx = lienzo.getContext("2d");
var color = "black";
var ancho_linea = 1;
var ancho_pantalla = screen.width;
var nuevo_ancho= screen.width - 70;
var nuevo_alto= screen.height - 300;

    if (ancho_pantalla < 992)
    {
    lienzo.width= nuevo_ancho;
    lienzo.height= nuevo_alto;
    document.body.style.overflow = "hidden";
    }
    
lienzo.addEventListener("touchstart", primer_toque);
    function primer_toque (e)
    {
        ultima_posicion_x = e.touches[0].clientX - lienzo.offsetLeft;
        ultima_posicion_y = e.touches[0].clientY - lienzo.offsetTop;

    }

lienzo.addEventListener("touchmove", tocar_y_mover);
    function tocar_y_mover(e)
    {
        actual_posicion_x=e.touches[0].clientX - lienzo.offsetLeft;
        actual_posicion_y = e.touches[0].clientY - lienzo.offsetTop;
        
            ctx.beginPath();
            ctx.strokeStyle = color;
            ctx.lineWidth = ancho_linea;
    
            console.log("Last position of x and y coordinates = ");
            console.log("x = " + ultima_posicion_x + "y = " + ultima_posicion_y);
            
            ctx.moveTo(ultima_posicion_x, ultima_posicion_y);
    
            console.log("Current position of x and y coordinates = ");
            console.log("x  = " + actual_posicion_x + "y = " + actual_posicion_y);
            ctx.lineTo(actual_posicion_x, actual_posicion_y);
            ctx.stroke();
            ultima_posicion_x = actual_posicion_x; 
            ultima_posicion_y = actual_posicion_y;
     }