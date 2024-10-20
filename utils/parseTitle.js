/**
 * Parses the title from the command-line arguments based on a specified flag.
 *
 * @param {string[]} args - The array of command-line arguments.
 * @param {string} flag - The flag indicating the start of the title.
 * @returns {string} The parsed title, or an empty string if the flag is not found.
 */
function parseTitle(args, flag) {
  let title = "";
  const flagIndex = args.indexOf(flag);

  if (flagIndex !== -1) {
    for (
      let i = flagIndex + 1;
      i < args.length && !args[i].startsWith("-");
      i++
    ) {
      title += args[i] + " ";
    }
    title = title.trim();
  }

  return title;
}

export default parseTitle;
