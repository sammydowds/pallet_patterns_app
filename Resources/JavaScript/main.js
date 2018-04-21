

var el = document.getElementById('blocktext')
if(el) {
    el.addEventListener('click', test);
}

function test() {
    console.log('HELLLELLELLELELE');
}

function mouseFollowers(e) {
    //x direction max = 0 - 337
    var x = e.clientX -(548);
    //Y direction max = 0 - 337
    var y = e.clientY - (241);
    var coord = document.getElementById("coord_tag");
    var coor = "(" + x + "," + y + ")";
    document.getElementById("coord_tag").innerHTML = coor;
    
    
    

}

function offset_tire_x(event) {

    var x = e.clientX - 40;
    return x

}

function offset_tire_y(e) {
    var y = e.clientY - 40;
    return y

}

function tire_hovering(event) {
    document.getElementById("tire").style.display = 'block';
    var tire_hov = document.getElementById("tire");

    tire_hov.style.transform = "translate3d(" + offset_tire_x(e) + "px,"+ offset_tire_y(e) + "px, 0px)";

    
}



// function lineFollowers(e) {
// 	document.getElementById("horiz_follow").style.display = 'block';
// 	document.getElementById("vertical_follow").style.display = 'block';
// 	var x_ = e.clientX;
// 	var y_ = e.clientY;
// 	var x_off = x_ - 12;
//     var y_off = y_ - 20;
//     var h_line = document.getElementById("horiz_follow");
//     var v_line = document.getElementById("vertical_follow");
//     h_line.style.transform = "translate3d(" + (x_off) + "px, 0px, 0px)";
//     v_line.style.transform = "translate3d("+"0px," + (y_off) + "px, 0px)";



// }



function clearCoor() {
    document.getElementById("coord_tag").innerHTML = "";
    // document.getElementById("vertical_follow").style.display = 'none';
    // // document.getElementById("horiz_follow").style.display = 'none';
    document.getElementById("tire").style.display = 'none';
    
}