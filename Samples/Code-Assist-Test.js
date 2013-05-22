/**
 * Code Asssist Test
 */
var Test = function() {};
Test.prototype.message = "test";

/**
 * hello
 * @param name Name to be greeted
 */
Test.prototype.hello = function(name) {
	console.log("hello, " + name);
}; 

var test = new Test();
test.