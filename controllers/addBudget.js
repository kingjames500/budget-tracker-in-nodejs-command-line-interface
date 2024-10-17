import { chalk, loadBudget, fs } from "../imports/imports.js";

function addBudget(title, quantity, price) {
  const newBudget = {
    title: title,
    quantity: quantity,
    price: price,
    createdAt: new Date().toLocaleString,
  };

  const budget = loadBudget("./data/BudgetTracker.json");

  //I want to make the title of the budget tracker unique so I will check if the title already exist
  const bugdetTrackerExist = budget.find(
    (currentBudget) => currentBudget.title === title,
  );
  if (bugdetTrackerExist) {
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
