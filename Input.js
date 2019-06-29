
var CHARCODE_UPPER_A = 65;
var CHARCODE_UPPER_Z = 90;
var CHARCODE_LOWER_A = 97;
var CHARCODE_LOWER_Z = 122;

function charToKeyCode(c) {
    code = c.charCodeAt(0);
    if (code >= CHARCODE_LOWER_A && code <= CHARCODE_LOWER_Z)
        return 65 + (code - CHARCODE_LOWER_A);
    if (code >= CHARCODE_UPPER_A && code <= CHARCODE_UPPER_Z)
        return 65 + (code - CHARCODE_UPPER_A);
    throw "charToKeyCode got an invalid char";
}
var KEY_SPACE = 32;
var KEY_LEFT  = 37;
var KEY_UP    = 38
var KEY_RIGHT = 39

var keysDown = {};
addEventListener("keydown", function(e) {
  //console.log("keydown '" + e.keyCode + "'");
  keysDown[e.keyCode] = true;
}, false);
addEventListener("keyup", function(e) {
  //console.log("keyup   '" + e.keyCode + "'");
  keysDown[e.keyCode] = false;
}, false);
