let currentInput = "";
let checkingBalance = 0;
let pinEntered = false; 
let cardInserted = false; 
let currentAction = ""; 

const display = document.getElementById("display");
const cardSlot = document.querySelector(".cardSlot");
const thinSlot = document.querySelector(".thinSlot"); 
const cash = document.getElementById("cash"); 


// Append values from the keypad keys entered to the ATM screen display //
function findMyVal(event) {
  if (!cardInserted) {
    display.textContent = "Please Insert Card First!";
    return;
  }
  currentInput += event.target.textContent;
  display.textContent = currentInput;
}

// Clear the screen and display the default message 
function clearATMScreen() {
    if (!cardInserted) {
      display.textContent = "Please Insert Card First!";
      return;
    }
    currentInput = "";
    display.textContent = "Please choose Deposit, Withdraw, or Check Balance.";  // Default message
  }

// Card inserted or removed function simple toggle back and forth on each cardslot press //
function toggleCard() {
  if (!cardInserted) {
    // Insert Card
    cardInserted = true;
    pinEntered = false; // Reset PIN state
    currentInput = "";
    display.textContent = "Card Inserted. \r\nPlease Enter PIN.\r\n(for demo pin in 1234)";
    cardSlot.textContent = "Remove Card"; 
    cardSlot.style.backgroundColor = "green"; 
  } else {
    // Remove Card
    cardInserted = false;
    pinEntered = false;
    checkingBalance = 0; 
    currentInput = "";
    currentAction = "";
    display.textContent = "Welcome! \r\nPlease Insert Card.";
    cardSlot.textContent = "Insert Card"; 
    cardSlot.style.backgroundColor = "red"; 
  }
}

// Enter key on the number key pad is pressed could mean several thigns depending on the status of the transaction / ATM //
function OnNumPadEnter() {
  if (!cardInserted) {
    display.textContent = "Please Insert Card First!";
    return;
  }
  if (!pinEntered) {
    if (currentInput === "1234") { // Default PIN for demo
      pinEntered = true;
      display.textContent =
        "PIN entered successfully.\r\nPlease choose Deposit, Withdraw, or Check Balance.";
      currentInput = "";
    } else {
      display.textContent = "Invalid PIN. \r\nTry again. \r\n(for demo pin in 1234)";
      currentInput = "";
    }
  } else {
    if (currentAction === "deposit") {
      processDeposit();
    } else if (currentAction === "withdraw") {
      processWithdrawal();
    } else {
      display.textContent = "Please choose Deposit, Withdraw, or Check Balance.";
    }
  }
}

// when the Deposit button is pressed 
function deposit() {
  if (!cardInserted) {
    display.textContent = "Please Insert Card First!";
    return;
  }
  if (!pinEntered) {
    display.textContent = "Please enter your PIN first. \r\n(for demo pin in 1234)";
    return;
  }
  currentAction = "deposit";
  currentInput = "";
  display.textContent = "Please enter amount to Deposit.";
}

// when the Withdraw button is pressed 
function withdraw() {
  if (!cardInserted) {
    display.textContent = "Please Insert Card First!";
    return;
  }
  if (!pinEntered) {
    display.textContent = "Please enter your PIN first.\r\n(for demo pin in 1234)";
    return;
  }
  currentAction = "withdraw";
  currentInput = "";
  display.textContent = "Please enter amount to Withdraw.";
}

// when the check balance button is pressed 
function checkBalance() {
    if (!cardInserted) {
      display.textContent = "Please Insert Card First!";
      return;
    }
    if (!pinEntered) {
      display.textContent = "Please enter your PIN first.\r\n(for demo pin in 1234)";
      return;
    }
    display.textContent = `Your balance is: $${checkingBalance}\r\nPlease choose Deposit, Withdraw, or Check Balance.`;
  }

// At the end of the deposit process the user presses enter key triggers the OnNumPadEnter() function that calls ths processDeposit()
function processDeposit() {
    const amount = parseFloat(currentInput);
    if (isNaN(amount) || amount <= 0) {
      display.textContent = "Invalid amount!\r\nPlease choose Deposit, Withdraw, or Check Balance.";
    } else {
      checkingBalance += amount;
      display.textContent = `Deposit of $${amount} successful.\r\nPlease choose Deposit, Withdraw, or Check Balance.`;
  
      // Trigger cash IN animation
      cash.textContent = `$${amount}`;
      cash.style.animation = "none"; // Reset animation
      //void cash.offsetWidth; // Force reflow to restart animation
      cash.style.animation = "cashIn 4s ease-in-out forwards";
  
      // Clear the cash slot after animation completes
      setTimeout(() => {
        cash.textContent = "";
      }, 4000);
    }
    currentInput = "";
    currentAction = "";
  }

// At the end of the withdraw process the user presses enter key that triggers the OnNumPadEnter() function that calls ths processWithdrawal()
  function processWithdrawal() {
  const amount = parseFloat(currentInput);
  if (isNaN(amount) || amount <= 0) {
    display.textContent = "Invalid amount!\r\nPlease choose Deposit, Withdraw, or Check Balance.";
  } else if (amount > checkingBalance) {
    display.textContent = "Insufficient funds!\r\nPlease choose Deposit, Withdraw, or Check Balance.";
  } else {
    checkingBalance -= amount;
    display.textContent = `Withdrawal of $${amount} successful.\r\nPlease choose Deposit, Withdraw, or Check Balance.`;

    // Trigger cash WITHDRAW animation
    cash.textContent = `$${amount}`;
    cash.style.animation = "none"; // Reset animation
    //void cash.offsetWidth; // Force reflow to restart animation
    cash.style.animation = "cashWithdraw 4s ease-in-out forwards";

    // Clear the cash slot after animation completes
    setTimeout(() => {
      cash.textContent = "";
    }, 4000);
  }
  currentInput = "";
  currentAction = "";
}