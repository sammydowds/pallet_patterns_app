

function lineFollowers(e) {
	document.getElementById("horiz_follow").style.display = 'block';
	document.getElementById("vertical_follow").style.display = 'block';
	var x_ = e.clientX
	var y_ = e.clientY
	var x_off = x_ - 12;
    var y_off = y_ - 20;
    var h_line = document.getElementById("horiz_follow");
    var v_line = document.getElementById("vertical_follow");
    h_line.style.transform = "translate3d(" + (x_off) + "px, 0px, 0px)";
    v_line.style.transform = "translate3d("+"0px," + (y_off) + "px, 0px)";


}

function mouseFollowers(e) {
	//x direction max = 0 - 337
	var x_ = e.clientX
    var x = e.clientX -(548);
    var y_ = e.clientY
    //Y direction max = 0 - 337
    var y = e.clientY - (178+63);
   
    var coord = document.getElementById("coord_tag");
    
    coord.style.transform = "translate3d(" + (x_) + "px," + y_ + "px, 0)";
    


    var coor = "(" + x + "," + y + ")";
    document.getElementById("coord_tag").innerHTML = coor;
    
    
    

}

function clearCoor() {
    document.getElementById("coord_tag").innerHTML = "";
    document.getElementById("vertical_follow").style.display = 'none';
    document.getElementById("horiz_follow").style.display = 'none';
    
}