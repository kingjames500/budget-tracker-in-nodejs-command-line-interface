/**
 * Checks if a given title is already taken in the list of budgets.
 *
 * @param {string} title - The title to check.
 * @param {Array<Object>} budgets - The list of budget objects.
 * @returns {boolean} - Returns true if the title is taken, otherwise false.
 */
function checkTitleIsTaken(title, budgets) {
  const isTitleTaken = budgets.find((budget) => budget.title === title);
  if (isTitleTaken) {
    return true;
  }
  return false;
}
export default checkTitleIsTaken;
