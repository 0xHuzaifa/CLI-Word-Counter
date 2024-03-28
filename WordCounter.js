#!/usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt({
    name: 'sentence',
    type: 'input',
    message: 'Enter your sentence: '
});
function counter(inputString) {
    let wordCount = 0;
    let characterCount = 0;
    let spaceCount = 0;
    let insideWord = true;
    for (let i = 0; i < inputString.length; i++) {
        let char = inputString[i];
        if (char === ' ') {
            spaceCount++;
            while (inputString[i + 1] === ' ') {
                i++;
            }
            insideWord = true;
        }
        else {
            characterCount++;
            if (insideWord) {
                wordCount++;
                insideWord = false;
            }
        }
    }
    return { wordCount, characterCount, spaceCount };
}
const text = answer.sentence;
const count = counter(text);
console.log(`Word Count: ${count.wordCount}`);
console.log(`Character Count: ${count.characterCount}`);
console.log(`Space Count: ${count.spaceCount}`);
