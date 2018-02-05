

var heightElem = document.getElementById("height");
var formElem = document.getElementById("draw-form");
var brickElem = document.getElementById("brick");

// handler function for adjusting the height slider
function heightslider(val) {
    //show the selected height on the slider
    document.getElementById("showheight").innerHTML = val;
    //retrieve the height and symbol
    bricksymbol = brickElem.value;
    heightStr = heightElem.value;
    height = parseInt(heightStr);
    //draw pyramid with these parameters
    drawPyramid(height,bricksymbol);
}

// handler function for changing the brick symbol in the dropdown
function symboldropdown(option) {
    //retrieve the height and symbol
    bricksymbol = brickElem.value;
    heightStr = heightElem.value;
    height = parseInt(heightStr);
    //draw pyramid with these parameters
    drawPyramid(height,bricksymbol);
}

/**
 * drawPyramid
 *
 * Renders, in the HTML document, a Mario pyramid of the specified height
 */
function drawPyramid(height,bricksymbol) {

    // first, clear the old content
    document.getElementById("pyramid").innerHTML = "";

    // for each row....
    for (var row = 0; row < height; row++) {

        // figure out number of bricks and spaces
        var numBricks = row + 2;
        var numSpaces = height - row - 1;

        // build up a string for this row
        var rowStr = "";
        for (var i = 0; i < numSpaces; i++) {
            var spaceChar = "&nbsp"; // this is the HTML encoding for a space " "
            rowStr += spaceChar;
        }
        for (var i = 0; i < numBricks; i++) {
            rowStr += bricksymbol;
        }

        // make a <p> element for this row, and insert it into the #pyramid container
        rowElem = document.createElement("p");
        rowElem.innerHTML = rowStr;
        document.getElementById("pyramid").appendChild(rowElem);
    }
}
