function checkCashRegister(price, cash, cid) {

  const cashReference = {
    "PENNY": 0.01,
    "NICKEL": 0.05,
    "DIME": 0.1,
    "QUARTER": 0.25,
    "ONE": 1,
    "FIVE": 5,
    "TEN": 10,
    "TWENTY": 20,
    "ONE HUNDRED": 100
  }

  let cashTotals = cid.map(amount => (Math.round(parseFloat(amount[1]) / parseFloat(cashReference[amount[0]]))))
  // gives back the amount of actual cash by nominal number of banknotes

 // gives back amount of cash in drawer

  let change = (parseFloat(cash) - parseFloat(price)).toFixed(2)
  let changeFlag = Number(change);
 // gives back the amount of change needed

  let changeBanknotes = []

  for (let i = cid.length - 1; i >= 0; i--) {
    if (change / Object.values(cashReference)[i] > 1) {
      let amountToSubtract = Math.floor(change / Object.values(cashReference)[i]) * Object.values(cashReference)[i]
      let availableAmount = cashTotals[i] * Object.values(cashReference)[i]
      if (availableAmount < amountToSubtract) {
        changeBanknotes.push([Object.keys(cashReference)[i], availableAmount])
        change = Number((parseFloat(change) - parseFloat(availableAmount)).toFixed(2))
      } else {
        changeBanknotes.push([Object.keys(cashReference)[i], amountToSubtract]);
        // pushed the amount to archive
        change = Number((parseFloat(change) - parseFloat(amountToSubtract)).toFixed(2))
      }
      //subtracted from change
    }
  }

  let checkTheChange = Number(changeBanknotes.map(amount => amount[1]).reduce((a, b) => parseFloat(a) + parseFloat(b), 0).toFixed(2)) == changeFlag;

  if (cidSum > changeFlag && checkTheChange) {
    return { status: "OPEN", change: changeBanknotes }
  } else if (cidSum < changeFlag || !checkTheChange) {
    return { status: "INSUFFICIENT_FUNDS", change: [] }
  } else if (changeFlag === cidSum) {
    return { status: "CLOSED", change: cid }
  }
}

/*

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]) should return an object.
Passed
checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]) should return {status: "OPEN", change: [["QUARTER", 0.5]]}.
Passed
checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]) should return {status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}.
Passed
checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) should return {status: "INSUFFICIENT_FUNDS", change: []}.
Passed
checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) should return {status: "INSUFFICIENT_FUNDS", change: []}.
Passed
checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) should return {status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]}.

*/
