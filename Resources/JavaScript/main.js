
var radius = 70;
var sidewall = 30;
console.log(radius)

function tire_hover(e) {
    console.log(radius);
    var x = e.pageX;
    var y = e.pageY;
   
    
    var padding_tire = 10;

    var tire_position = document.getElementById("tire");
    var coordin_text = document.getElementById('coord_text');
    var loc_left = document.getElementById("Pallet").offsetLeft;
    var loc_top = document.getElementById("Pallet").offsetTop; 
    


    //Updating coordinate text
    
    var x_ = (e.pageX - loc_left + 170 + radius);
    var y_ = (e.pageY - loc_top + 170 + radius);
    
    coordin_text.innerHTML = "coordinates: " + (x_) + "," + (y_); 
    
    //updating tire location on the screen (hovering)
    
    tire_position.style.transform = "translate3d(" + (x)+ "px,"+ (y)+ "px,0px)"; 
    
    
    

    
}


function put_tire(e) {
   
    var x = e.clientX;
    var y = e.clientY;

    var new_tire = document.getElementById("tire").cloneNode(true);
    new_tire.style.transform = "translate3d(" + (x)+ "px,"+ (y)+ "px,0px)"; 
    document.getElementById("tires_placed").appendChild(new_tire);



}


function pallet_pix_inches(e) {
    var width = document.getElementById("Width_Pallet").value; 
    var length = document.getElementById("Length_Pallet").value; 
    var x_scale = (1/width)*340; 
   


    //How many pixels the tire needs to be to scale to the pallet pixels
    var tire_pix_od = document.getElementById("OD").value * x_scale; 

    //How many pixels in the vertical direction tire needs to be
  

    document.getElementById("tire").style.width = tire_pix_od - (sidewall*2) + "px"; 
    document.getElementById("tire").style.height = tire_pix_od - (sidewall*2) + "px";  
    console.log(tire_pix_od)
    radius = 0.5*tire_pix_od + 10;
    console.log(radius);
    

}



