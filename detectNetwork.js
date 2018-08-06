// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
    // Note: `cardNumber` will always be a string
    // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
    // The American Express network always starts with a 34 or 37 and is 15 digits long

    // Once you've read this, go ahead and try to implement this function, then return to the console.
    var cardNumberLength = cardNumber.length;
    var firstTwoNumbers = cardNumber.slice(0, 2);
    var firstNumber = cardNumber.slice(0, 1);
    var firstFourNumbers = cardNumber.slice(0, 4);
    var firstSixNumbers = cardNumber.slice(0, 6);
    var firstThreeNumbers = cardNumber.slice(0,3);
    var result = "";
    if (firstTwoNumbers === "38" || firstTwoNumbers === "39") {
        if (cardNumberLength === 14) {
            result = 'Diner\'s Club';
            return result;
        }
    } else if (firstTwoNumbers === "34" || firstTwoNumbers === "37") {
        if (cardNumberLength === 15) {
            result = 'American Express';
            return result;
        }
    } else if (firstNumber === "4" && firstFourNumbers !== "4903" && firstFourNumbers !== "4905" && firstFourNumbers !== "4911" && firstFourNumbers !== "4936") {
        if (cardNumberLength === 13 || cardNumberLength === 16 || cardNumberLength === 19) {
            result = 'Visa';
            return result;
        }
    } else if (firstTwoNumbers >= "51" && firstTwoNumbers <= "55") {
        if (cardNumberLength === 16) {
            result = 'MasterCard';
            return result;
        }
    } else if (firstFourNumbers === "6011" || (firstThreeNumbers >= "644" && firstThreeNumbers <= "649") || firstTwoNumbers === "65") {
        if (cardNumberLength === 16 || cardNumberLength === 19) {
            result = 'Discover';
            return result;
        }
    } else if (firstFourNumbers === "5018" || firstFourNumbers === "5020" || firstFourNumbers === "5038" || firstFourNumbers === "6304") {
        if (cardNumberLength >=12 && cardNumberLength <= 19) {
            result = 'Maestro';
            return result;
        }
    } else if ((firstSixNumbers >= "622126" && firstSixNumbers <= "622925") || (firstThreeNumbers >= "624" && firstThreeNumbers <= "626") || (firstFourNumbers >= "6282" && firstFourNumbers <= "6288") ) {
        if (cardNumberLength === 16 || cardNumberLength === 17 || cardNumberLength === 18 || cardNumberLength === 19) {
            result = 'China UnionPay';
            return result;
        }
    }
    else if (firstFourNumbers === "4903" || firstFourNumbers === "4905" || firstFourNumbers === "4911" || firstFourNumbers === "4936" || firstSixNumbers === "564182" || firstSixNumbers === "633110" || firstFourNumbers === "6333" || firstFourNumbers === "6759") {
        if (cardNumberLength === 16 || cardNumberLength === 18 || cardNumberLength === 19) {
            result = 'Switch';
            return result;
        }
    }
};



