var fs = require("fs");
var inquirer = require("inquirer");

exports.BasicCard = function(front, back){
	this.front = front,
	this.back = back;
}