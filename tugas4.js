a = 160;
b = 140;
c = 165;

console.log("yang paling tinggi =");
if (a > c && a > b) {
  console.log(a);
} else if (b > c && b > a) {
  console.log(b);
} else {
  console.log(c);
}

console.log("yang menengah adalah = ");
if ((a < b && a > c) || (a > b && a < c)) {
  console.log(a);
} else if ((b < a && b > c) || (b > a && b < c)) {
  console.log(b);
} else {
  console.log(c);
}

console.log("yang paling pendek = ");
if (c < a && c < b) {
  console.log(c);
} else if (b < c && b < a) {
  console.log(b);
} else {
  console.log(a);
}
