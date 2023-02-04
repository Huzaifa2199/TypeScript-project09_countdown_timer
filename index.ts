#!/usr/bin/env node
console.clear()
import inquirer from "inquirer";
import chalkAnimation from "chalk-animation"
import chalk from 'chalk'

const end = () => {
    return new Promise((res) => {
        setTimeout(res, 3000)
    })
}
async function welcome() {
    let rainbowTitle = chalkAnimation.karaoke(`Welcome to CountDown Project`);

    await end();
    rainbowTitle.stop();

}
await welcome()


async function App() {
    let req = await inquirer.prompt([{
        name: 'user',
        type: 'number',
        message: "Please enter time in seconds",
    }]);

    let seconds = req.user;

    const setTimer = (): void => {
        console.clear();
        if (seconds > 0) {
            console.log(chalk.blueBright(`Remaining Time: ${seconds}`));
            setTimeout(setTimer, 1000);
            seconds -= 1;
        } else {
            console.log(chalk.greenBright((`CountDown Complete`)));
            restartApp()

        }
    };
    console.clear()
    setTimeout(setTimer);
}
App()


async function restartApp() {
    let req = await inquirer.prompt([{
        name: 'user',
        type: 'list',
        message: "Do you want to restart CountDown?",
        choices: [
            'Yes',
            'No'
        ]

    }]);

    let user_req = req.user;

    if (user_req === 'Yes') {
        console.clear()
        App()
    }
    else if (user_req === 'No') {
        console.log(chalk.blueBright('Thank You!'));
    }
}