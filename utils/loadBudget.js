/**
 * Loads the budget data from a specified file path.
 *
 * @param {string} path - The file path to load the budget data from.
 * @returns {Array|Object} The parsed budget data from the file. Returns an empty array if the file is empty.
 */

import fs from "fs";

function loadBudget(path) {
  const loadExistingBudget = fs.readFileSync(path, "utf8");
  if (loadExistingBudget) {
    return JSON.parse(loadExistingBudget);
  }
  return [];
}

export default loadBudget;
