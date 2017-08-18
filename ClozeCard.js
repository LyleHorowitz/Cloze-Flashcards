function ClozeCard(full,answer){
    this.fullText = full;
    this.cloze = answer;
    this.partial = function(){
        var check = this.fullText.indexOf(this.cloze);
        if(check === -1){
            return(this.cloze + " is not a valid answer for this question!");
        }   
        else{
            return this.fullText.replace(this.cloze,"...");
        }
    }
}

var firstMonsterCloze = new ClozeCard(
    "Dracula was the first Universal Classic Monster of the talkie (sound) era", "Dracula");

// "Dracula"
console.log(firstMonsterCloze.cloze); 

// " ... was the first Universal Classic Monster of the talkie (sound) era."
console.log(firstMonsterCloze.partial); 

// "Dracula was the first Universal Classic Monster of the talkie (sound) era."
console.log(firstMonsterCloze.fullText);

// QUESTION #2:

var secondMonsterCloze = new ClozeCard(
    "James Whale was the director of both Frankenstein & The Bride of Frankenstein.", "James Whale");

// "James Whale"
console.log(secondMonsterCloze.cloze); 

// " ... was the director of both Frankenstein & The Bride of Frankenstein."
console.log(secondMonsterCloze.partial); 

// "James Whale was the director of both Frankenstein & The Bride of Frankenstein."
console.log(secondMonsterCloze.fullText);

// QUESTION #3:

var thirdMonsterCloze = new ClozeCard(
    "Claude Rains played the titular character in the 1943 remake of The Phantom of the Opera.", "Claude Rains");

// "Claude Rains"
console.log(thirdMonsterCloze.cloze); 

// " ... played the titular character in the 1943 remake of The Phantom of the Opera"
console.log(thirdMonsterCloze.partial); 

// "Claude Rains played the titular character in the 1943 remake of The Phantom of the Opera."
console.log(thirdMonsterCloze.fullText);

// QUESTION #4:

var fourthMonsterCloze = new ClozeCard(
    "Countess Marya Zaleska is Dracula's Daughter", "Dracula's Daughter");

// "Dracula's Daughter"
console.log(fourthMonsterCloze.cloze); 

// " ... is Countess Marya Zaleska"
console.log(fourthMonsterCloze.partial); 

// "Countess Marya Zaleska is Dracula's Daughter"
console.log(fourthMonsterCloze.fullText);

// QUESTION #5:

var fifthMonsterCloze = new ClozeCard(
    "Boris Karloff is the actor that played The Mummy", "Boris Karloff");

// "Boris Karloff"
console.log(fifthMonsterCloze.cloze); 

// " ... is the actor that played The Mummy"
console.log(fifthMonsterCloze.partial); 

// "Boris Karloff is the actor that played The Mummy"
console.log(fifthMonsterCloze.fullText);

module.exports = ClozeCard;


