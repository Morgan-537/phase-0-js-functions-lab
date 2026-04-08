function convertToUpperCase(text) {
    return text.toUpperCase()
}

console.log(convertToUpperCase("blueberry"))


// This is required for the test to function properly  
// module.exports = { calculateTax, convertToUpperCase, findMaximum, isPalindrome, calculateDiscountedPrice };


function calculateTax(input){
    let tax = input * 0.1
    return tax

}
console.log(calculateTax(4000))

function findMaximum(num1, num2) {
    if(num1 >num2){
        return num1
    }
    else{
        return num2
    }
}

function isPalindrome(word) {
    let reversedWord= word.split('').reverse().join('');
    return word===reversedWord;
}
console.log(isPalindrome("radar"));
console.log(isPalindrome("coconut"));

function calculateDiscountedPrice(originalPrice,discountPercentage) {
    let discountAmount= (originalPrice*discountPercentage)/100;
    let finalPrice= originalPrice-discountAmount;
    return finalPrice;
}