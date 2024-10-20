import { Command } from "commander";
import addBudget from "./controllers/addBudget.js";
import updateBudget from "./controllers/updateBudget.js";
import deleteBudget from "./controllers/deleteBudget.js";
import getBudgetItem from "./controllers/getBudgetItem.js";
import getBudgetItems from "./controllers/getBudgetItems.js";
import parseTitle from "./utils/parseTitle.js";

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
    const args = process.argv.slice(2);
    //defining the variables of the buddget tracker
    const title = parseTitle(args, "-t");
    const quantity = options.quantity;
    const price = options.price;

    //calling the add budget function
    addBudget(title, quantity, price);
  });

//this program will get a specific item from the budget tracker
program
  .command("getItem")
  .description("getting a specific item from the budget tracker")
  .option("-t | --title <value>", "Title of the item")
  .action(function (options) {
    const args = process.argv.slice(2);
    const title = parseTitle(args, "-t");
    getBudgetItem(title);
  });

//this program will list all the items in the budget tracker

program
  .command("listItems")
  .description("listing all the items in the budget tracker")
  .action(function () {
    getBudgetItems();
  });

//this program will delete a specific item from the budget tracker
program
  .command("deleteItem")
  .description("deleting a specific item from the budget tracker")
  .option("-t | --title <value>", "Title of the item")
  .action(function (options) {
    const args = process.argv.slice(2);
    const title = parseTitle(args, "-t");

    deleteBudget(title);
  });

//this program will update a specific item from the budget tracker
program
  .command("updateItem")
  .description("updating a specific item from the budget tracker")
  .option("-t | --title <value>", "Title of the item")
  .option("-nt | --newTitle <value>", "New Title of the item")
  .option("-q | --quantity <value>", "Quantity of the item")
  .option("-p | --price <value>", "Price per quantity")
  .action(function (options) {
    const args = process.argv.slice(2);
    const title = parseTitle(args, "-t");

    const newTitle = parseTitle(args, "-nt");
    const quantity = options.quantity;
    const price = options.price;

    //calling the function for updating the budget
    updateBudget(title, price, quantity, newTitle);
  });

program.parse(process.argv);
