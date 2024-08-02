#! /usr/bin/env node

import inquirer from "inquirer";

let userInput = await inquirer.prompt({
    type: "number",
    name: "seconds",
    message: "Enter countdown duration in seconds!"
});

// destructuring
let {seconds} = userInput;

if (seconds != 0) {
    console.log(`Starting countdown for ${seconds} seconds....`);
    startCountdown(seconds);
} else {
    console.log(`Please enter time duration greater than 0 sec`);
}

function startCountdown (seconds : number) {
    const currentTime = Date.now();
    let userEnteredTime = seconds * 1000 ;     // convert into milliseconds
    let totalTime = currentTime + userEnteredTime;
    // setInterval
    const timer = setInterval(() => {
        let currentTime = Date.now();
        const remainingTime = totalTime - currentTime;

        if (remainingTime >= 0) {
            process.stdout.write(`\rTime remaining ${Math.floor(remainingTime / 1000)} seconds`)
        } else {
            clearInterval(timer);
            console.log(`\nTime Up!`);
            console.log(`Thank you for using our Countdown Timer!`);
        }
    }, 1000)
}

