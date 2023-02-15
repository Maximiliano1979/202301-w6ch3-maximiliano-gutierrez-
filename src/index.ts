import chalk from "chalk";
import gradient from "gradient-string";
import inquirer from "inquirer";
import chalkAnimation from "chalk-animation";
import figlet from "figlet";
import { createSpinner } from "nanospinner";

let playerName;

const sleep = async (ms = 2000) => new Promise((time) => setTimeout(time, ms));

const welcome = async () => {
  const rainbowTitle = chalkAnimation.rainbow("Learn to programming \n");

  await sleep();
  rainbowTitle.stop();

  console.log(`${chalk.bgBlue("How to play")}
  This is a test to know how use the node console.
  If you answer is wrong, you are a f... ${chalk.bgRed("crack")}`);
};

await welcome();

const askName = async (): Promise<void> => {
  const answers = await inquirer.prompt({
    name: "player_name",
    type: "input",
    message: "What is your name?",
    default() {
      return "Player";
    },
  });

  playerName = answers.player_name;
};

await askName();
