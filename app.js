var fs = require("fs");
var inquirer = require("inquirer");

var BasicCard = require("./BasicCard.js");
var ClozeCard = require("./ClozeCard.js");

// BASIC CARD //

// QUESTION #1:

var firstMonster = new BasicCard(
    "Who was the first Universal Classic Monster of the talkie era?", "Dracula");

// "Who was the first Universal Classic Monster of the talkie era?"
console.log(firstMonster.front); 

// "Dracula"
console.log(firstMonster.back); 

// QUESTION #2:

var secondMonster = new BasicCard(
    "Who was the director of both Frankenstein & The Bride of Frankenstein?", "James Whale");

// "Who was the director of both Frankenstein & The Bride of Frankenstein?"
console.log(secondMonster.front); 

// "James Whale"
console.log(secondMonster.back); 

// QUESTION #3:

var thirdMonster = new BasicCard(
    "Who played the titular character in the 1943 remake of The Phantom of the Opera?", "Claude Rains");

// "Who played the titular character in the 1943 remake of The Phantom of the Opera?"
console.log(thirdMonster.front); 

// "Claude Rains"
console.log(thirdMonster.back); 

// QUESTION #4:

var fourthMonster = new BasicCard(
    "Who is Countess Marya Zaleska?", "Dracula's Daughter");

// "Who is Countess Marya Zaleska?"
console.log(fourthMonster.front); 

// "Countess Marya Zaleska"
console.log(fourthMonster.back); 

// QUESTION #5:

var fifthMonster = new BasicCard(
    "Which actor played The Mummy?", "Boris Karloff");

// "Which actor played The Mummy?"
console.log(fifthMonster.front); 

// "Boris Karloff"
console.log(fifthMonster.back); 

// ~~~ ~~~ ~~~ //



// CLOZE CARD //

// QUESTION #1:

var firstMonsterCloze = new ClozeCard(
    "Dracula was the first Universal Classic Monster of the talkie (sound) era", "Dracula");

// "Dracula"
console.log(firstMonster.cloze); 

// " ... was the first Universal Classic Monster of the talkie (sound) era."
console.log(firstMonsterCloze.partial); 

// "Dracula was the first Universal Classic Monster of the talkie (sound) era."
console.log(firstMonsterCloze.fullText);

// QUESTION #2:

var secondMonsterCloze = new ClozeCard(
    "James Whale was the director of both Frankenstein & The Bride of Frankenstein.", "James Whale");

// "James Whale"
console.log(secondMonster.cloze); 

// " ... was the director of both Frankenstein & The Bride of Frankenstein."
console.log(secondMonsterCloze.partial); 

// "James Whale was the director of both Frankenstein & The Bride of Frankenstein."
console.log(secondMonsterCloze.fullText);

// QUESTION #3:

var thirdMonsterCloze = new ClozeCard(
    "Claude Rains played the titular character in the 1943 remake of The Phantom of the Opera.", "Claude Rains");

// "Claude Rains"
console.log(thirdMonster.cloze); 

// " ... played the titular character in the 1943 remake of The Phantom of the Opera"
console.log(thirdMonsterCloze.partial); 

// "Claude Rains played the titular character in the 1943 remake of The Phantom of the Opera."
console.log(thirdMonsterCloze.fullText);

// QUESTION #4:

var fourthMonsterCloze = new ClozeCard(
    "Countess Marya Zaleska is Dracula's Daughter", "Dracula's Daughter");

// "Dracula's Daughter"
console.log(fourthMonster.cloze); 

// " ... is Countess Marya Zaleska"
console.log(fourthMonsterCloze.partial); 

// "Countess Marya Zaleska is Dracula's Daughter"
console.log(fourthMonsterCloze.fullText);

// QUESTION #5:

var fifthMonsterCloze = new ClozeCard(
    "Boris Karloff is the actor that played The Mummy", "Boris Karloff");

// "Boris Karloff"
console.log(fifthMonster.cloze); 

// " ... is the actor that played The Mummy"
console.log(fifthMonsterCloze.partial); 

// "Boris Karloff is the actor that played The Mummy"
console.log(fifthMonsterCloze.fullText);

inquirer
    .prompt([{
            type: "list",
            message: "Which type of Flashcard do you want to use??",
            choices: ["Basic Flashcard", "Cloze Flashcard"],
            name: "flashcard"
        }])
    .then(function(response) {
            if (response.flashcard === "Basic Flashcard") {
                console.log("you chose basic flashcard");
            } else if(response.flashcard === "Cloze Flashcard") {
                    console.log("you chose cloze flashcard");
                }
    .prompt([{
            type: "list",
            message: "Which type of Flashcard do you want to use??",
            choices: ["Basic Flashcard", "Cloze Flashcard"],
            name: "flashcard"
        }])


});