
// Apabila angka termasuk bilangan ganjil maka tampilkan Santai, 
// Jika berupa angka genap maka tampilkan Berkualitas, 
// Bila angka tersebut adalah kelipatan 3 dan angka ganjil maka tampilkan I Love Coding

for (var i = 1; i <= 30; i++) {
    if  (i % 3 == 0 && i % 2 !== 0 ) console.log("I love Coding");
     else if (i % 2 !== 0) console.log("Santai");
        else if (i % 2 == 0) console.log("Berkualitas");
}