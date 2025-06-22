function add(a, operator) {
  // a=2, sub |  a= -1, sub | a = -6, plus | a = 3, plus

  const inner = function (b) {
    // b =3 // b = 5 | b = 9

    if (operator == "plus") {
      // plus

      return add(a + b, operator); // add(-6 + 9, plus)
    }

    if (operator == "sub") {
      //sub

      return add(a - b, operator); // add(-1, sub) | add(-1 -5, sub)
    }

    if (operator == "mul") {
      return add(a * b, operator);
    }
    if (operator == "") {
      return add(a - b);
    }
  };

  inner.valueOf = function () {
    return a;
  };

  //  inner.toString = function() {
  //      return a
  //  }

  return inner;
}

let abc = add(2, "sub")(3, "sub")(5, "plus")(9, "");

console.log(`dasda ${+abc}`);
