import fs from "fs";
import chalk from "chalk";
import loadBudget from "../utils/loadBudget.js";
import checkTitleIsTaken from "../utils/checkTitleIsTaken.js";
import getBudgetItemByTitle from "../utils/getBudgetItemByTitle.js";

/**
 * Exports the following modules and functions:
 *
 * @module
 * @exports fs - File system module for interacting with the file system.
 * @exports chalk - Library for styling terminal strings.
 * @exports loadBudget - Function to load the budget data.
 * @exports parseTitle - Function to parse the title of a budget item.
 * @exports checkTitleIsTaken - Function to check if a budget item title is already taken.
 * @exports getBudgetItemByTitle - Function to get a budget item by its title.
 */
export { fs, chalk, loadBudget, checkTitleIsTaken, getBudgetItemByTitle };
