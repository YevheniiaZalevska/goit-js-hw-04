function getElementWidth(content, padding, border) {
    const contentWidth = parseFloat(content);
    const paddingWidth = parseFloat(padding) * 2; 
    const borderWidth = parseFloat(border) * 2;

    const totalWidth = contentWidth + paddingWidth + borderWidth;

    return totalWidth;
}


function checkForSpam(message) {
    const lowerCaseMessage = message.toLowerCase();

    return lowerCaseMessage.includes('spam') || lowerCaseMessage.includes('sale');
}


// console.log(checkForSpam('Latest technology news'));
// console.log(checkForSpam('JavaScript weekly newsletter'));
// console.log(checkForSpam('Get best sale offers now!'));
// console.log(checkForSpam('Amazing SalE, only tonight!'));
// console.log(checkForSpam('SPAM How to earn fast money?'));


function filterArray(numbers, value) {
    const filteredNumbers = []; 

    for (const number of numbers) { 
        if (number > value) { 
            filteredNumbers.push(number); 
        }
    }
  return filteredNumbers; 
}

// console.log(filterArray([1, 2, 3, 4, 5], 3)); 
// console.log(filterArray([1, 2, 3, 4, 5], 4));
// console.log(filterArray([1, 2, 3, 4, 5], 5)); 
// console.log(filterArray([12, 24, 8, 41, 76], 38)); 
// console.log(filterArray([12, 24, 8, 41, 76], 20));
