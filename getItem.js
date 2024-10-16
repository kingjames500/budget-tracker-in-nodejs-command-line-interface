import { Command } from "commander";
import fs from "fs";
import chalk from "chalk";

const program = new Command();

program
  .name("BUDGET TRACKER")
  .description("A simple budget tracker build in node.js and cli")
  .version("1.0.0");

//this will get a specific item from the budget tracker

program
  .command("getItem")
  .description("getting a specific item from the budget tracker")
  .option("-t | --title <value>", "Title of the item")

  .action(function (option) {
    //declare the title variable
    const title = option.title;

    //read the budget tracker json file
    const loadSingleBudget = fs.readFileSync(
      "./data/BudgetTracker.json",
      "utf-8",
    );

    //convert the json to an array
    let singleBudget = JSON.parse(loadSingleBudget);

    //find the budget with the title
    const budget = singleBudget.find(
      (currentBudget) => currentBudget.title === title,
    );

    //if the budget does not exist
    if (!budget) {
      console.log(
        chalk.bgRed(`The budget item with the title '${title}' does not exist`),
      );
      return;
    }

    //if the budget exist
    console.log(chalk.green.bgBlack("Budget item found"));
    console.log(budget);
  });
