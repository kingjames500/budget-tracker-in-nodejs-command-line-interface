import fs from "fs";

function loadBudget(path) {
  const loadExistingBudget = fs.readFileSync(path, "utf8");
  if (loadExistingBudget) {
    return JSON.parse(loadExistingBudget);
  }
  return [];
}

export default loadBudget;
