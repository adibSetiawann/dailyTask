let s = "";
let panjang = 8;
let lebar = 8;

for (let i = 1; i <= panjang; i++) {
  if (i % 2 == 0) {
    for (let j = 1; j <= panjang; j++) {
      if (j % 2 == 0) {
        s += " ";
      } else {
        s += "#";
      }
    }
    // console.log("q");
  } else {
    // console.log("w");
    for (let n = 0; n <= panjang; n++) {
      if (n % 2 == 0) {
        s += " ";
      } else {
        s += "#";
      }
    }
  }
  s += "\n";
}

console.log(s);
