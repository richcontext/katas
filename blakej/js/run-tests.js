const COLOR_RESET = "\x1b[0m";
const RED_TEXT = "\x1b[31m";
const GREEN_TEXT = "\x1b[32m";
const CYAN_TEXT = "\x1b[34m";

function runTests(tests, fn) {
  console.log(`${CYAN_TEXT}******* Tests *******\n${COLOR_RESET}`);
  return tests.forEach(([test, solution]) => {
    const result = typeof test === 'function' ? fn(test) : test;
    const success = result === solution;
    const color = success ? GREEN_TEXT : RED_TEXT;

    const testText = success
      ? `${color}Pass${COLOR_RESET}`
      : `${color}Fail: expected ${solution}; Got ${result}${COLOR_RESET}`;

    console.log(`${JSON.stringify(test)} -`, testText);
  });
}

module.exports = runTests;
