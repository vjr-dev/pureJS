export function swapVariables() {
  let a = 23;
  let b = 56;

  console.log("before - a: ", a);
  console.log("before - b: ", b);

  //Method 1 :  swap variable using math without extra var
  // a = a + b // a = 30
  // b = a - b // b = 10, a = 30
  // a = a - b // a = 20

  //Method 2 :  swap variable with extra var
  // let c
  // c = a
  // a = b
  // b = c

  //Method 3 :  swap variable using assignment destructuring
  [a, b] = [b, a];

  //Method 4 :  swap variable using XOR operator math without extra var
  // a = a ^ b
  // b = a ^ b
  // a = a ^ b

  console.log("after - a: ", a);
  console.log("after - b: ", b);
}
