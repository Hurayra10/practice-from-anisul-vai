
// var heading3 = document.createElement("h1");
// var text = document.createTextNode("This is heading 3");
//  heading3.appendChild(text);

//  var result = document.getElementById("my-div");
//  result.appendChild(heading3);

//  var remove = document.getElementById("removeI");
//  item.removeChild(removeI);


var photos = ["love.jpg", "2.jpg","3.jpg" ];
var imgTag = document.querySelector("img");

var count = 0;





function next() {
   
    count++;
   
    if(count >= photos.length){
        count= 0;
        imgTag.src= photos[count];

    }else{
        imgTag.src= photos[count];
    };
};



function prev() {
    count--;
   
    if(count <0){
        count= photos.length-1;
        imgTag.src= photos[count];

    }else{
        imgTag.src= photos[count];
    };
};








