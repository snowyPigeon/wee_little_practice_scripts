/*
# Free Code Camp, JavaScript Algorithms and Data Structures
# 
# Cash Register
# 
# Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), 
# payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.
# 
# cid is a 2D array listing available currency.
# 
# The checkCashRegister() function should always return an object with a status key and a change key.
# 
# Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.
# 
# Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.
# 
# Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, 
# as the value of the change key.
#
# Currency Unit	Amount
# Penny	$0.01 (PENNY)
# Nickel	$0.05 (NICKEL)
# Dime	$0.1 (DIME)
# Quarter	$0.25 (QUARTER)
# Dollar	$1 (ONE)
# Five Dollars	$5 (FIVE)
# Ten Dollars	$10 (TEN)
# Twenty Dollars	$20 (TWENTY)
# One-hundred Dollars	$100 (ONE HUNDRED)
# 
# See below for an example of a cash-in-drawer array:
#
#[
#  ["PENNY", 1.01],
#  ["NICKEL", 2.05],
#  ["DIME", 3.1],
#  ["QUARTER", 4.25],
#  ["ONE", 90],
#  ["FIVE", 55],
#  ["TEN", 20],
#  ["TWENTY", 60],
#  ["ONE HUNDRED", 100]
#]
#
# SnowyPigeon note: the cid numeric value is the total value in that denomination. Eg. 1 dollar 1 cent in pennies.
*/

const currency = new Map([
  ["ONE HUNDRED", 100],
  ["TWENTY", 20],
  ["TEN", 10],
  ["FIVE", 5],
  ["ONE", 1],
  ["QUARTER", 0.25],
  ["DIME", 0.1],
  ["NICKEL", 0.05],
  ["PENNY", 0.01],
]);

function checkCashRegister(price, cash, cid) {
  // if cid insufficient return insufficient funds, otherwise return the change due in
  // coins and bills, sorted in highest to lowest order, as the value of the change key.

  // Initialise variables
  let change = cash - price;
  // Calculate the amounts to be deducted from each drawer working your way from highest to lowest denomination
  // TO DO: check if change fully or partially issued from previous drawer
  // TO DO: complete the deductions across multiple drawers
  let results = [];
  cid.reverse();
  ////console.log(cid);
  collectChange(cid, change, results);
  ////console.log(results);
  // Create the returned object, containing a status and change message
  // TO DO: Test the status messages work appropriately across all tests
  let status;
  let sumOfResults = 0;
  results.forEach((element) => {
    sumOfResults += Number(element[1].toFixed(2));
    console.log(sumOfResults);
  });
  console.log(sumOfResults);
  console.log(cid);
  console.log(results);
  if (sumOfResults < change) {
    status = "INSUFFICIENT_FUNDS";
    results = [];
  } else if (JSON.stringify(results) === JSON.stringify(cid)) {
    status = "CLOSED";
    results = cid.reverse();
  } else {
    status = "OPEN";
    const filteredResults = results.filter(removeZeros);
    function removeZeros(result) {
      return result[1] != 0;
    }
    console.log(filteredResults);
    return {status: status, change: filteredResults };
  }
  //console.log(status);
  return { status: status, change: results };
}

function collectChange(cid, change, results) {
  ////console.log(cid);
  ////console.log(change);
  return cid.reduce((changeRemaining, drawerValue) => {
    //console.log(drawerValue);
    //console.log(changeRemaining);
    if (drawerValue[0] == "ONE HUNDRED") {
      // count how much of changeRemaining divides into this drawer
      //console.log(changeRemaining);
      //console.log(drawerValue);
      results.push([
        drawerValue[0],
        (deductFromSection(changeRemaining, drawerValue) * 10) / 10,
      ]);
      console.log((deductFromSection(changeRemaining, drawerValue) * 10) / 10);
      return (
        (changeRemaining * 10 -
          deductFromSection(changeRemaining, drawerValue) * 10) /
        10
      );
    } else if (drawerValue[0] == "TWENTY") {
      //console.log(changeRemaining);
      //console.log(drawerValue);
      ////console.log(deductFromSection(changeRemaining, drawerValue[1]));
      // count how much of changeRemaining divides into this drawer
      results.push([
        drawerValue[0],
        (deductFromSection(changeRemaining, drawerValue) * 10) / 10,
      ]);
      console.log((deductFromSection(changeRemaining, drawerValue) * 10) / 10);
      //console.log(results);
      return (
        (changeRemaining * 10 -
          deductFromSection(changeRemaining, drawerValue) * 10) /
        10
      );
    } else if (drawerValue[0] == "TEN") {
      //console.log(changeRemaining);
      //console.log(drawerValue);
      // count how much of changeRemaining divides into this drawer
      results.push([
        drawerValue[0],
        (deductFromSection(changeRemaining, drawerValue) * 10) / 10,
      ]);
      console.log((deductFromSection(changeRemaining, drawerValue) * 10) / 10);
      //console.log(results);
      return (
        (changeRemaining * 10 -
          deductFromSection(changeRemaining, drawerValue) * 10) /
        10
      );
    } else if (drawerValue[0] == "FIVE") {
      console.log(changeRemaining);
      // count how much of changeRemaining divides into this drawer
      results.push([
        drawerValue[0],
        (deductFromSection(changeRemaining, drawerValue) * 10) / 10,
      ]);
      console.log((deductFromSection(changeRemaining, drawerValue) * 10) / 10);
      //console.log(results);
      return (
        (changeRemaining * 10 -
          deductFromSection(changeRemaining, drawerValue) * 10) /
        10
      );
    } else if (drawerValue[0] == "ONE") {
      console.log(changeRemaining);
      console.log(drawerValue);
      // count how much of changeRemaining divides into this drawer
      results.push([
        drawerValue[0],
        (deductFromSection(changeRemaining, drawerValue) * 10) / 10,
      ]);
      console.log((deductFromSection(changeRemaining, drawerValue) * 10) / 10);
      return (
        (changeRemaining * 10 -
          deductFromSection(changeRemaining, drawerValue) * 10) /
        10
      );
    } else if (drawerValue[0] == "QUARTER") {
      console.log(changeRemaining);
      //console.log(deductFromSection(changeRemaining, drawerValue[1]));
      // count how much of changeRemaining divides into this drawer
      results.push([
        drawerValue[0],
        (deductFromSection(changeRemaining, drawerValue) * 10) / 10,
      ]);
      console.log((deductFromSection(changeRemaining, drawerValue) * 10) / 10);
      //console.log(results);
      return (
        (changeRemaining * 10 -
          deductFromSection(changeRemaining, drawerValue) * 10) /
        10
      );
    } else if (drawerValue[0] == "DIME") {
      //console.log(changeRemaining);
      //console.log(deductFromSection(changeRemaining, drawerValue[1]));
      // count how much of changeRemaining divides into this drawer
      results.push([
        drawerValue[0],
        (deductFromSection(changeRemaining, drawerValue) * 10) / 10,
      ]);
      return (
        (changeRemaining * 10 -
          deductFromSection(changeRemaining, drawerValue) * 10) /
        10
      );
    } else if (drawerValue[0] == "NICKEL") {
      console.log(changeRemaining);
      //console.log(deductFromSection(changeRemaining, drawerValue[1]));
      // count how much of changeRemaining divides into this drawer
      results.push([
        drawerValue[0],
        (deductFromSection(changeRemaining, drawerValue) * 10) / 10,
      ]);
      console.log((deductFromSection(changeRemaining, drawerValue) * 10) / 10);
      return (
        (changeRemaining * 10 -
          deductFromSection(changeRemaining, drawerValue) * 10) /
        10
      );
    } else if (drawerValue[0] == "PENNY") {
      console.log(changeRemaining);
      //console.log(results);
      //console.log(deductFromSection(changeRemaining, drawerValue[1]));
      // count how much of changeRemaining divides into this drawer
      //console.log(changeRemaining - deductFromSection(changeRemaining, drawerValue[1]));
      //console.log(drawerValue[0], deductFromSection(changeRemaining, drawerValue[1]));
      if (drawerValue[1] >= changeRemaining)
        results.push([drawerValue[0], Number(changeRemaining.toFixed(2))]);
      console.log(changeRemaining);
      return Number(changeRemaining.toFixed(2));
    } else {
      console.log(typeof changeRemaining);
      console.log(typeof Number(changeRemaining.toFixed(2)));
      return Number(changeRemaining.toFixed(2));
    }
  }, change);
}

// helper used for dividing change into cid
function countDenomination(changeRemaining, drawerValue) {
  let qty = 0;
  console.log(
    "change required: " + changeRemaining + " drawer value: " + drawerValue
  );
  if (drawerValue !== 0) {
    qty = Math.floor(drawerValue / changeRemaining);
    console.log(Math.floor(drawerValue / changeRemaining));
    console.log(qty);
  }
  return qty;
}

// helper used to deduct from drawer section
function deductFromSection(changeRemaining, drawerValue) {
  console.log(changeRemaining);
  console.log(drawerValue[1]);
  //console.log(drawerValue[0]);
  ////console.log(drawerValue - change);
  let deduction = 0;
  let currencyValue = currency.get(drawerValue[0]);
  let qty = countDenomination(changeRemaining, drawerValue[1]);
  if (qty > 0) {
    while (deduction <= changeRemaining - currencyValue) {
      deduction += currencyValue;
      console.log(currencyValue);
      console.log(deduction);
      console.log(changeRemaining - deduction);
    }
  } else {
    deduction = drawerValue[1];
    console.log(drawerValue[1]);
    console.log(deduction);
  }
  console.log(deduction);
  return deduction; // can we pass [amount, change] and process elsewhere? 09/04/22
}

/* Tests */
console.log(
  checkCashRegister(19.5, 20, [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100],
  ])
);
console.log(
  checkCashRegister(3.26, 100, [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100],
  ])
);
console.log(
  checkCashRegister(19.5, 20, [
    ["PENNY", 0.01],
    ["NICKEL", 0],
    ["DIME", 0],
    ["QUARTER", 0],
    ["ONE", 0],
    ["FIVE", 0],
    ["TEN", 0],
    ["TWENTY", 0],
    ["ONE HUNDRED", 0],
  ])
);
console.log(
  checkCashRegister(19.5, 20, [
    ["PENNY", 0.01],
    ["NICKEL", 0],
    ["DIME", 0],
    ["QUARTER", 0],
    ["ONE", 1],
    ["FIVE", 0],
    ["TEN", 0],
    ["TWENTY", 0],
    ["ONE HUNDRED", 0],
  ])
);
console.log(
  checkCashRegister(19.5, 20, [
    ["PENNY", 0.5],
    ["NICKEL", 0],
    ["DIME", 0],
    ["QUARTER", 0],
    ["ONE", 0],
    ["FIVE", 0],
    ["TEN", 0],
    ["TWENTY", 0],
    ["ONE HUNDRED", 0],
  ])
);
