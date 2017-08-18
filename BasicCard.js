var fs = require("fs");
var inquirer = require("inquirer");

module.exports = function(front, back){
	this.front = front,
	this.back = back;
}

