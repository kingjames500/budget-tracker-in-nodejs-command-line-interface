import { chalk, loadBudget, fs } from "../imports/imports.js";

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
