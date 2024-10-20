import { fs, chalk, loadBudget } from "../imports/imports.js";

/**
 * Retrieves and prints budget items from a JSON file.
 *
 * This function loads budget data from a specified JSON file and prints each budget item.
 * If the budget tracker is empty, it logs a message indicating that the tracker is empty.
 *
 * @function
 * @name getBudgetItems
 */
function getBudgetItems() {
  const budget = loadBudget("./data/BudgetTracker.json");

  //check if the budgetTracker is empty
  if (budget.length === 0) {
    console.log(chalk.bgYellow("Your budget tracker is empty"));
    return;
  }

  //loop through the budget array and print the items
  budget.forEach((currentBudget) => {
    console.log(
      chalk.green(
        `Title: ${currentBudget.title} \n Quantity: ${currentBudget.quantity} \n Price: ${currentBudget.price}`,
      ),
    );
  });
}

export default getBudgetItems;
