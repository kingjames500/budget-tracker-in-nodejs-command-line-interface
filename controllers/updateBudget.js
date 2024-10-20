import {
  fs,
  chalk,
  loadBudget,
  checkTitleIsTaken,
} from "../imports/imports.js";

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
