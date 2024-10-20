import {
  chalk,
  loadBudget,
  fs,
  checkTitleIsTaken,
} from "../imports/imports.js";

/**
 * Adds a new budget item to the budget tracker.
 *
 * @param {string} title - The title of the budget item.
 * @param {number} quantity - The quantity of the budget item.
 * @param {number} price - The price of the budget item.
 *
 * @returns {void}
 *
 * @description
 * This function creates a new budget item with the provided title, quantity, and price.
 * It then loads the existing budget items from a JSON file and checks if a budget item
 * with the same title already exists. If the title is already taken, it logs an error message
 * and exits the function. Otherwise, it adds the new budget item to the array of budget items
 * and writes the updated array back to the JSON file. Finally, it logs a success message.
 */
function addBudget(title, quantity, price) {
  const newBudget = {
    title: title,
    quantity: quantity,
    price: price,
    createdAt: new Date().toLocaleString,
    updatedAt: new Date().toLocaleString,
  };

  const budget = loadBudget("./data/BudgetTracker.json");

  const isTitleTaken = checkTitleIsTaken(title, budget);
  if (isTitleTaken) {
    console.log(
      chalk.red(`The budget item with the title '${title}' already exists`),
    );
    return;
  }
  //push the new budget to the array using push method
  budget.push(newBudget);

  //then write the new budget onn the array using the writeFileSync method
  fs.writeFileSync("./data/BudgetTracker.json", JSON.stringify(budget));

  console.log(chalk.green("New budget item added successfully"));
}

export default addBudget;
