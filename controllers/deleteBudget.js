import { chalk, loadBudget, fs } from "../imports/imports.js";

/**
 * Deletes a budget item with the specified title from the budget tracker.
 *
 * @param {string} title - The title of the budget item to delete.
 * @returns {void}
 */

function deleteBudget(title) {
  const budget = loadBudget("./data/BudgetTracker.json");

  if (budget.length === 0) {
    console.log(chalk.yellow("Your budget tracker is empty"));
    return;
  }

  if (title) {
    const budgetItems = budget.filter(
      (currentBudget) => currentBudget.title !== title,
    );
    if (budgetItems.length === budget.length) {
      console.log(
        chalk.bgRed(`The budget item with the title '${title}' does not exist`),
      );
      return;
    }
    fs.writeFileSync("./data/BudgetTracker.json", JSON.stringify(budgetItems));
    console.log(
      chalk.green(`The budget item with the title '${title}' has been deleted`),
    );
    return;
  }
}

export default deleteBudget;
