
/**
 * Write a function which returns a provided number asynchronously in at least 500ms
 * and then call this function for each value of
 * this array [1, 2, 3, 4, 5] and console.log the value.
 */

function asyncFunction(num, count) {
  return new Promise(resolve => setTimeout(() => resolve(num), count * 500));
}

async function printMessage(num, count) {
  const number = await asyncFunction(num, count);
  console.log("Num is :- ", number);
}

const inputVal = [1, 2, 3, 4, 5];

inputVal.forEach((item, index) => {
  printMessage(item, index + 1);
});
