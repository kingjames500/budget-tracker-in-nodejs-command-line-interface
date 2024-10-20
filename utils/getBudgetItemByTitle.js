/**
 * Retrieves a budget item from the list of budgets by its title.
 *
 * @param {string} title - The title of the budget item to find.
 * @param {Array<Object>} budgets - The list of budget items.
 * @returns {Object|null} The budget item with the matching title, or null if not found.
 */
function getBudgetItemByTitle(title, budgets) {
  return (budgets = budgets.find((budget) => budget.title === title || null));
}

export default getBudgetItemByTitle;
