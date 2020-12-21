/// <reference path="utility-functions.ts" />

const result = Utility.Fees.calculateLateFee(4);
console.log(result);
Utility.maxBooksAllowed(30);

import util = Utility.Fees;

console.log(util.calculateLateFee(10));
