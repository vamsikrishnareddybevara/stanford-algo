function karatsuba(x, y) {
  let base;
  base = 10;
  if( x < base || y < base) return x*y;

  let lenX = Math.floor(x.toString().length/2);
  let lenY = Math.floor(y.toString().length/2);

  let a = parseInt(x.toString().slice(0,lenX),10);
  let b = parseInt(x.toString().slice(lenX),10);
  let c = parseInt(y.toString().slice(0,lenY),10);
  let d = parseInt(y.toString().slice(lenY,10));

  let z1 = karatsuba(a,c);
  let z2 = karatsuba(b,d);
  let z3 = karatsuba((a+b), (c+d)) - z1 -z2;

  let value = Math.pow(10, 2*Math.max(lenX, lenY))*z1 + Math.pow(10, Math.max(lenX, lenY))*z3 + z2;
   return value;
}

console.log(karatsuba(3141592653589793238462643383279502884197169399375105820974944592
, 2718281828459045235360287471352662497757247093699959574966967627
))