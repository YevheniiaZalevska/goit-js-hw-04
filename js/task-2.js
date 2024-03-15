function getShippingMessage(country, price, deliveryFee) {
    const totalPrice = price + deliveryFee;
    
    return `Shipping to ${country} will cost ${totalPrice} credits`;
}


function formatMessage(message, maxLength) {

    if (message.length <= maxLength) {
        return message;
    } else {
        return message.substring(0, maxLength) + "...";
    }
}

// console.log(formatMessage("Curabitur ligula sapien", 16));
// console.log(formatMessage("Curabitur ligula sapien", 23));
// console.log(formatMessage("Vestibulum facilisis purus nec", 20));
// console.log(formatMessage("Vestibulum facilisis purus nec", 30));
// console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 15));
// console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 41));


function makeArray(firstArray, secondArray, maxLength) {
    const combinedArray = firstArray.concat(secondArray);

    if (combinedArray.length > maxLength) {
        return combinedArray.slice(0, maxLength);
    }

    return combinedArray;
}

// console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3));
// console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4));
// console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3));
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2));
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4));
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0));


function calcAverageCalories(days) {
    if (days.length === 0) {
        return 0;
    }
  
  let totalCalories = 0;
  for (let i = 0; i < days.length; i++) {
    totalCalories += days[i].calories;
  }
  
  return totalCalories / days.length;
}

// console.log(calcAverageCalories([
//   { day: "monday", calories: 3010 },
//   { day: "tuesday", calories: 3200 },
//   { day: "wednesday", calories: 3120 },
//   { day: "thursday", calories: 2900 },
//   { day: "friday", calories: 3450 },
//   { day: "saturday", calories: 3280 },
//   { day: "sunday", calories: 3300 }
// ])); 
// console.log(calcAverageCalories([
//   { day: "monday", calories: 2040 },
//   { day: "tuesday", calories: 2270 },
//   { day: "wednesday", calories: 2420 },
//   { day: "thursday", calories: 1900 },
//   { day: "friday", calories: 2370 },
//   { day: "saturday", calories: 2280 },
//   { day: "sunday", calories: 2610 }
// ])); 
// console.log(calcAverageCalories([])); 
