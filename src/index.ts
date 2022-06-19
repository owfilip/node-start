console.log('Conditional replacements');

// type sizes = 
interface Product {
  name: string,
  price: number,
  size: 'small' | 'medium' | 'large' | 'x-large' | 'xx-large'
}

// *** Task ***
// Rewrite the following function to not use conditional statements
// You may create helper functions and additional data structures at will
// Try to mitigate the problem the following function has
function calculateTax(product: Product): Product {
  if (product.size == 'small') {
    product.price *= 1.1;
    return product;
  } else if (product.size === 'medium') {
    product.price *= 1.20;
    return product;
  } else if (product.size === 'large') {
    product.price *= 1.3;
    return product;
  } else {
    product.price *= 1.4;
    return product;
  }
}

// *** Solution ***
// Rewrite using map and function references
// The function mutates it's object parameter. Copy object using spread operator
const calculateSmall = (product: Product) => { return { ...product, price: product.price * 1.1 } }
const calculateMedium = (product: Product) => { return { ...product, price: product.price * 1.2 } }
const calculateLarge = (product: Product) => { return { ...product, price: product.price * 1.3 } }
const calculateOther = (product: Product) => { return { ...product, price: product.price * 1.4 } }

const taxMap: { [key: string]: Function } = {
  'small': calculateSmall,
  'medium': calculateMedium,
  'large': calculateLarge
}

function calculateSolution(product: Product): Product {
  return taxMap[product.size] ? taxMap[product.size](product) : calculateOther(product);
}



let p1: Product = {name: 'Coffee', price: 200, size: 'medium' };
console.log('Initial');
console.log(p1);
console.log(calculateTax(p1));
console.log(p1);

let p2: Product = {name: 'Coffee', price: 200, size: 'medium' };
console.log('Solution');
console.log(p2);
console.log(calculateSolution(p2));
console.log(p2);