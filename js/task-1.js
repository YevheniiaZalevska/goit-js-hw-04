// function makeTransaction(quantity, pricePerDroid) {
//     const totalCost = quantity * pricePerDroid;
    
//     return `You ordered ${quantity} droids worth ${totalCost} credits!`;
// }


function makeTransaction(quantity, pricePerDroid, customerCredits) {
  const totalCost = quantity * pricePerDroid;

  if (totalCost > customerCredits) {
    return "Insufficient funds!";
  } else {
    return `You ordered ${quantity} droids worth ${totalCost} credits!`;
  }
}

// console.log(makeTransaction(5, 3000, 23000));
// console.log(makeTransaction(3, 1000, 15000));
// console.log(makeTransaction(10, 5000, 8000));
// console.log(makeTransaction(8, 2000, 10000));
// console.log(makeTransaction(10, 500, 5000));


function slugify(title) {
  return title.toLowerCase().split(' ').join('-');
}

// console.log(slugify("Arrays for begginers")); 
// console.log(slugify("English for developer")); 
// console.log(slugify("Ten secrets of JavaScript")); 
// console.log(slugify("How to become a JUNIOR developer in TWO WEEKS")); 
