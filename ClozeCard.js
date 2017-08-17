var fs = require("fs");
var inquirer = require("inquirer");

function makePartial(text, cloze) {
	// change text to blanks where cloze is
	// return that new text
}

exports.ClozeCard = function(text, cloze){

	this.cloze = cloze,
	this.partial = makePartial(text, cloze),
	this.fullText = full text;

}

