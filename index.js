import { Command } from "commander";
import fs from "fs";
import chalk from "chalk";

const program = new Command();

program
  .name("BUDGET TRACKER")
  .description("A simple budget tracker build in node.js and cli")
  .version("1.0.0");

//this will add a new item to the budget tracker
program
  .command("addItem")
  .description("adding a new item to the budget tracker")
  .option("-t | --title <value>", "Title of the item")
  .option("-q | --quantity <value>", "Quantity of the item")
  .option("-p | --price <value>", "Price per quantity")
  //the action fuction will have  a parameter options which will have all the values of the options
  .action(function (options) {
    //defining the variables of the buddget tracker
    const title = options.title;
    const quantity = options.quantity;
    const price = options.price;

    //saving the bugdet tracker on a variable
    const newBudget = {
      title: title,
      quantity: quantity,
      price: price,
    };

    //then I read the existing budget tracker items on the json file and save it on a variable
    const loadBudget = fs.readFileSync("./data/BudgetTracker.json", "utf-8");

    let budget;
    if (!loadBudget) {
      budget = [];
    }
    //convert the json  to and array
    budget = JSON.parse(loadBudget);
    //I want to make the title of the budget tracker unique so I will check if the title already exist
    const bugdetTrackerExist = budget.find(
      (currentBudget) => currentBudget.title === title,
    );
    if (bugdetTrackerExist) {
      console.log(
        chalk.bgRed(`The budget item with the title '${title}' already exists`),
      );
      return;
    }
    //push the new budget to the array using push method
    budget.push(newBudget);

    //then write the new budget onn the array using the writeFileSync method
    fs.writeFileSync("./data/BudgetTracker.json", JSON.stringify(budget));

    console.log(chalk.green.bgBlack("New budget item added successfully"));
  });

//this program will list all the items in the budget tracker

program
  .command("listItems")
  .description("listing all the items in the budget tracker")
  .action(function () {
    //read the budgettracker json file to get all the items
    const loadBudget = fs.readFileSync("./data/BudgetTracker.json", "utf-8");

    //parse the json file to an array
    const budget = JSON.parse(loadBudget);

    //check if the budgetTracker is empty
    if (budget.length === 0) {
      console.log(chalk.bgYellow("Your budget tracker is empty"));
      return;
    }

    //loop through the budget array and print the items
    budget.forEach((currentBudget) => {
      console.log(
        chalk.bgGreen(
          `Title: ${currentBudget.title} \n Quantity: ${currentBudget.quantity} \n Price: ${currentBudget.price}`,
        ),
      );
    });
  });

//this program will get a specific item from the budget tracker
program
  .command("getItem")
  .description("getting a specific item from the budget tracker")
  .option("-t | --title <value>", "Title of the item")
  .action(function (options) {
    //declare the title variable
    const title = options.title;

    //read the budget tracker json file
    const loadSingleBudget = fs.readFileSync(
      "./data/BudgetTracker.json",
      "utf-8",
    );

    //convert the json to an array
    let singleBudget = JSON.parse(loadSingleBudget);

    //validating the user input and displaying an error message if the user input is invalid
    if (title) {
      const budget = singleBudget.find(
        (currentBudget) => currentBudget.title === title,
      );
      if (budget) {
        console.log(chalk.green("Budget item found"));
        console.log("=======================================");
        console.log(budget.title);
        console.log(budget.quantity);
        console.log(budget.price);
        return;
      }
      console.log(
        chalk.bgRed(`The budget item with the title '${title}' does not exist`),
      );
      return;
    }
  });

//this program will delete a specific item from the budget tracker
program
  .command("deleteItem")
  .description("deleting a specific item from the budget tracker")
  .option("-t | --title <value>", "Title of the item")
  .action(function (options) {
    const title = options.title;

    const loadBudget = fs.readFileSync("./data/BudgetTracker.json", "utf-8");
    const budget = JSON.parse(loadBudget);

    if (budget.length === 0) {
      console.log(chalk.bgYellow("Your budget tracker is empty"));
      return;
    }

    if (title) {
      const budgetItems = budget.filter(
        (currentBudget) => currentBudget.title !== title,
      );
      if (budgetItems.length === budget.length) {
        console.log(
          chalk.bgRed(
            `The budget item with the title '${title}' does not exist`,
          ),
        );
        return;
      }
      fs.writeFileSync(
        "./data/BudgetTracker.json",
        JSON.stringify(budgetItems),
      );
      console.log(
        chalk.bgGreen(
          `The budget item with the title '${title}' has been deleted`,
        ),
      );
      return;
    }
  });

  //this program will update a specific item from the budget tracker
program.command("updateItem")
.description("updating a specific item from the budget tracker")
.option("-t | --title <value>", "Title of the item")
.option("-q | --quantity <value>", "Quantity of the item")
.option("-p | --price <value>", "Price per quantity")
.action(function(options){
    //declare the title variable
    const title = options.title;
    const quantity = options.quantity;
    const price = options.price;

    //read the budget tracker json file
    const loadSingleBudget = fs.readFileSync(
      "./data/BudgetTracker.json",
      "utf-8",
    );

    //convert the json to an array
    let singleBudget = JSON.parse(loadSingleBudget);
})

program.parse(process.argv);
