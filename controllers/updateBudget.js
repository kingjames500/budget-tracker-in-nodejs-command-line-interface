import { fs, chalk, loadBudget } from "../imports/imports.js";

function updateBudget(title, newPrice, newQuantity) {
  const budget = loadBudget("./data/BudgetTracker.json");

  //find the budget with the title
  if (title) {
    const existingBudgets = budget.find(
      (currentBudget) => currentBudget.title === title,
    );
    if (!existingBudgets) {
      console.log(
        chalk.bgRed(`The budget item with the title '${title}' does not exist`),
      );
      return;
    }
    //update the budget
    const updatedBudget = budget.indexOf(existingBudgets);
    budget[updatedBudget].quantity = newQuantity;
    budget[updatedBudget].price = newPrice;

    //write the updated budget back to the file
    fs.writeFileSync("./data/BudgetTracker.json", JSON.stringify(budget));
    console.log(
      chalk.bgGreen(
        `The budget item with the title '${title}' has been updated`,
      ),
    );
  } else {
    console.log(
      chalk.bgRed("please input the title of the item you want to update"),
    );
  }
  return;
}

export default updateBudget;
