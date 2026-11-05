// Part 1: Date Display

// 1. Create a Date object for the current date and time.
const currentDate = new Date();

// 2. Get the month, day, and year. Add one because getMonth() starts at zero.
// 3. Pad the month and day so each one always has two digits.
const month = String(currentDate.getMonth() + 1).padStart(2, "0");
const day = String(currentDate.getDate()).padStart(2, "0");
const year = currentDate.getFullYear();

// 4. Build the required MM/DD/YYYY message and display it on the webpage.
document.getElementById("dateOutput").textContent =
  `Today is ${month}/${day}/${year}`;

// Part 2: Number Conversion and Validation

// 1. Create four separate starting values: two whole-number strings, a decimal
//    string, and a string that cannot be converted to a number.
const wholeNumberText = "420";
const decimalNumberText = "69.67";
const invalidNumberText = "hello";
const anotherWholeNumberText = "1337";

// 2. Convert each original string to a number with Number().
const wholeNumber = Number(wholeNumberText);
const decimalNumber = Number(decimalNumberText);
const invalidNumber = Number(invalidNumberText);
const anotherWholeNumber = Number(anotherWholeNumberText);

// 3. Check each converted value for NaN and integer status.
const wholeNumberIsNaN = Number.isNaN(wholeNumber);
const wholeNumberIsInteger = Number.isInteger(wholeNumber);

const decimalNumberIsNaN = Number.isNaN(decimalNumber);
const decimalNumberIsInteger = Number.isInteger(decimalNumber);

const invalidNumberIsNaN = Number.isNaN(invalidNumber);
const invalidNumberIsInteger = Number.isInteger(invalidNumber);

const anotherWholeNumberIsNaN = Number.isNaN(anotherWholeNumber);
const anotherWholeNumberIsInteger = Number.isInteger(anotherWholeNumber);

// 4. Show the original string, converted result, and both checks for each value.
//    These are separate statements, so no array or loop is used for this part.
document.getElementById("wholeNumberResult").textContent =
  `Original: "${wholeNumberText}" → Converted: ${wholeNumber} → isNaN: ${wholeNumberIsNaN} → isInteger: ${wholeNumberIsInteger}`;

document.getElementById("decimalNumberResult").textContent =
  `Original: "${decimalNumberText}" → Converted: ${decimalNumber} → isNaN: ${decimalNumberIsNaN} → isInteger: ${decimalNumberIsInteger}`;

document.getElementById("invalidNumberResult").textContent =
  `Original: "${invalidNumberText}" → Converted: ${invalidNumber} → isNaN: ${invalidNumberIsNaN} → isInteger: ${invalidNumberIsInteger}`;

document.getElementById("anotherWholeNumberResult").textContent =
  `Original: "${anotherWholeNumberText}" → Converted: ${anotherWholeNumber} → isNaN: ${anotherWholeNumberIsNaN} → isInteger: ${anotherWholeNumberIsInteger}`;

// 5. Use an if/else statement to explain whether the invalid example converted.
if (invalidNumberIsNaN) {
  document.getElementById("invalidMessage").textContent =
    "This value is not a valid number because Number() returned NaN.";
} else {
  document.getElementById("invalidMessage").textContent =
    "This value converted successfully to a number.";
}

// 6. Use another if/else statement to describe the whole-number example.
if (wholeNumberIsInteger) {
  document.getElementById("integerMessage").textContent =
    `${wholeNumber} is an integer.`;
} else {
  document.getElementById("integerMessage").textContent =
    `${wholeNumber} is not an integer.`;
}

// Part 3: Math and Number Formatting

// 1. Set up three numeric values for a simple two-item purchase.
const itemPrice = 23.5;
const quantity = 2;
const taxRate = 0.0825;

// 2. Multiply to find the subtotal, multiply again to find tax, then add them.
const subtotal = itemPrice * quantity;
const taxAmount = subtotal * taxRate;
const totalCost = subtotal + taxAmount;

// 3. Format money with toLocaleString() and round the tax to two decimals with
//    toFixed(). These methods make the numeric results easier to read.
const formattedSubtotal = subtotal.toLocaleString("en-US", {
  style: "currency",
  currency: "USD",
});
const formattedTax = taxAmount.toFixed(2);
const formattedTotal = totalCost.toLocaleString("en-US", {
  style: "currency",
  currency: "USD",
});

// 4. Display the calculation and its formatted results on the webpage.
document.getElementById("subtotalOutput").textContent =
  `Subtotal: ${quantity} × $${itemPrice.toFixed(2)} = ${formattedSubtotal}`;

document.getElementById("taxOutput").textContent =
  `Tax at ${(taxRate * 100).toFixed(2)}%: $${formattedTax}`;

document.getElementById("totalOutput").textContent =
  `Total: ${formattedSubtotal} + $${formattedTax} = ${formattedTotal}`;

// Part 4: Conditional Message

// 1. Compare the total with $50 and display a different message for each case.
if (totalCost >= 50) {
  document.getElementById("budgetMessage").textContent =
    "The order total is $50 or more.";
} else {
  document.getElementById("budgetMessage").textContent =
    "The order total is below $50.";
}
