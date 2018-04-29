

function tire_hover(e) {
    var x = e.clientX;
    var y = e.clientY;
    var radius = 45; 
    var padding_tire = 10;

    var tire_position = document.getElementById("tire");
    var coordin_text = document.getElementById('coord_text');
    var loc_left = document.getElementById("Pallet").offsetLeft;
    var loc_top = document.getElementById("Pallet").offsetTop; 


    //Updating coordinate text
    console.log(document.getElementById("Pallet").offsetLeft);
    var x_ = (e.pageX - 481);
    var y_ = (e.pageY - 173);
    console.log(x_, y_);
    coordin_text.innerHTML = "coordinates: " + (x_) + "," + (y_); 
    
    //updating tire location on the screen (hovering)
    
    tire_position.style.transform = "translate3d(" + (x)+ "px,"+ (y)+ "px,0px)"; 
    
    console.log('Here is the mouse position: ' + x + ',' + y); 
    

    
}


function put_tire(e) {
    console.log('BUTTON CLICKED');
    var x = e.clientX;
    var y = e.clientY;

    var new_tire = document.getElementById("tire").cloneNode(true);
    new_tire.style.transform = "translate3d(" + (x)+ "px,"+ (y)+ "px,0px)"; 
    document.getElementById("tires_placed").appendChild(new_tire);



}


function pallet_pix_inches(e) {
    var width = document.getElementById("Width_Pallet").value; 
    var length = document.getElementById("Length_Pallet").value; 
    var x_scale = (1/width)*344; 
    var y_scale = (1/length)*344; 

    var tire_x = document.getElementById("OD").value * x_scale; 
    var tire_y = document.getElementById("OD").value * y_scale; 
    var side_wall = tire_x * 0.20; 

    document.getElementById("tire").style.width = tire_x - (side_wall*2) + "px"; 
    document.getElementById("tire").style.height = tire_y - (side_wall*2) + "px";  
    document.getElementById("tire").style.border = side_wall + "px solid black";
    var radius = 0.5*tire_x + side_wall + 10;
    

}



