import { fs, chalk, loadBudget } from "../imports/imports.js";

function getBudgetItem(title) {
  const budget = loadBudget("./data/BudgetTracker.json");
  //validating the user input and displaying an error message if the user input is invalid
  if (title) {
    const budgetItems = budget.find(
      (currentBudget) => currentBudget.title === title,
    );
    if (budgetItems) {
      console.log(chalk.green("Budget item found"));
      console.log("=======================================");
      console.log(budgetItems.title);
      console.log(budgetItems.quantity);
      console.log(budgetItems.price);
      return;
    }
    console.log(
      chalk.red(`The budget item with the title '${title}' does not exist`),
    );
    return;
  }
}

export default getBudgetItem;
