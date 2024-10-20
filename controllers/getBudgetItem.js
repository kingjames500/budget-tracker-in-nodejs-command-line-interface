// This module defines a function `getBudgetItem` that retrieves and logs details of a budget item by its title.
// It imports necessary utilities and functions from "../imports/imports.js".
// The function loads the budget data from a JSON file, checks if the title exists in the budget,
// and if found, logs the details of the budget item. If the title does not exist, it logs an error message.

import {
  chalk,
  loadBudget,
  checkTitleIsTaken,
  getBudgetItemByTitle,
} from "../imports/imports.js";

function getBudgetItem(title) {
  const budget = loadBudget("./data/BudgetTracker.json");

  if (checkTitleIsTaken(title, budget)) {
    const budgetItem = getBudgetItemByTitle(title, budget);
    if (budgetItem) {
      console.log(chalk.green("Budget item found"));
      console.log("=======================================");
      console.log(`Title: ${budgetItem.title}`);
      console.log(`Quantity: ${budgetItem.quantity}`);
      console.log(`Price: ${budgetItem.price}`);
      return;
    }
  }
  console.log(
    chalk.red(`The budget item with the title '${title}' does not exist`),
  );
  return;
}

export default getBudgetItem;
