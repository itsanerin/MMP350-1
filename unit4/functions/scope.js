/* This file shows how variables and scope works. */

// the following block of code will cause an error

/*
function assign(){
	var x = 0;
	var y = 1;
}

function add() {
	console.log(x + y);
}

assign();
add();
*/

// if we move the variables to become global variables, it will work

var x;
var y;

function assign() {
	x = 0;
	y = 1;
}

function add(){
	console.log(x + y);
}

assign();
add();