import {
  fs,
  chalk,
  loadBudget,
  checkTitleIsTaken,
} from "../imports/imports.js";

/**
 * Updates a budget item in the BudgetTracker.json file.
 *
 * @param {string} title - The title of the budget item to update.
 * @param {number} [newPrice] - The new price to set for the budget item.
 * @param {number} [newQuantity] - The new quantity to set for the budget item.
 * @param {string} [newTitle] - The new title to set for the budget item.
 *
 * @returns {void}
 *
 * @description
 * This function updates a budget item in the BudgetTracker.json file based on the provided parameters.
 * If the title does not exist, it logs an error message. If the new title already exists, it logs an error message.
 * If no changes are made, it logs a message indicating no changes were made.
 *
 * @example
 * updateBudget('Groceries', 150, null, null);
 * // Updates the price of the 'Groceries' budget item to 150.
 *
 * @example
 * updateBudget('Groceries', null, 10, null);
 * // Updates the quantity of the 'Groceries' budget item to 10.
 *
 * @example
 * updateBudget('Groceries', null, null, 'Food');
 * // Updates the title of the 'Groceries' budget item to 'Food'.
 */
function updateBudget(title, newPrice, newQuantity, newTitle) {
  const budget = loadBudget("./data/BudgetTracker.json");

  if (!checkTitleIsTaken(title, budget)) {
    console.log(chalk.red("Title does not exist"));
    return;
  }

  if (newPrice) {
    const updatedBuget = budget.map((currentBudget) => {
      if (currentBudget.title === title) {
        currentBudget.price = newPrice;
        currentBudget.updatedAt = new Date().toLocaleString();
        return currentBudget;
      }
      return currentBudget;
    });
    fs.writeFileSync("./data/BudgetTracker.json", JSON.stringify(updatedBuget));
    console.log(chalk.green("Budget item updated successfully"));
    return;
  }

  if (newQuantity) {
    const updatedBudget = budget.map((currentBudget) => {
      if (currentBudget.title === title) {
        currentBudget.quantity = newQuantity;
        currentBudget.updatedAt = new Date().toLocaleString();
        return currentBudget;
      }
      return currentBudget;
    });
    fs.writeFileSync(
      "./data/BudgetTracker.json",
      JSON.stringify(updatedBudget),
    );
    console.log(chalk.green("Budget item updated successfully"));
    return;
  }

  if (newTitle) {
    if (checkTitleIsTaken(newTitle, budget)) {
      console.log(chalk.red("Title already exists"));
      return;
    }
    const updatedBudget = budget.map((currentBudget) => {
      if (currentBudget.title === title) {
        currentBudget.title = newTitle;
        currentBudget.updatedAt = new Date().toLocaleString();
        return currentBudget;
      }
      return currentBudget;
    });
    fs.writeFileSync(
      "./data/BudgetTracker.json",
      JSON.stringify(updatedBudget),
    );
    console.log(chalk.green("Budget item updated successfully"));
    return;
  }
  console.log(chalk.yellow("No changes made"));
}

export default updateBudget;
