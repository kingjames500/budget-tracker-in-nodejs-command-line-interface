import {
  chalk,
  loadBudget,
  checkTitleIsTaken,
  getBudgetItemByTitle,
} from "../imports/imports.js";

/**
 * Retrieves and logs a budget item by its title.
 *
 * @param {string} title - The title of the budget item to retrieve.
 * @returns {void}
 */
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
