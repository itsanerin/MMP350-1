/* This file shows how to call a function immediately after being declared. We refer to these as "anonymous functions" */

(function() {
	console.log("Guess who?");
})(); // notice that the function is encapsulated inside () and there is another () before a ;

/* We can also send arguments into anonymous functions. */
(function(msg){
	console.log(msg);
})("It's me!"); // notice that we send an argument into the function, that the function is encapsulated inside (), and then we send a string wrapped in "" inside the () to send that argument to the function. And we end with a ;