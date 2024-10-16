import { Command } from "commander";
import fs from "fs";

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

    //convert the json  to and array
    const budget = JSON.parse(loadBudget);

    //push the new budget to the array using push method
    budget.push(newBudget);

    //then write the new budget onn the array using the writeFileSync method
    fs.writeFileSync("./data/BudgetTracker.json", JSON.stringify(budget));
  });

program.parse(process.argv);
