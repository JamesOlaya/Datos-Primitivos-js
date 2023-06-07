let mil_millenes = 1000000000;

let milMillones =  1_000_000_000;

console.log(mil_millenes)
console.log(milMillones)

console.log(mil_millenes == milMillones);
console.log(mil_millenes === milMillones); // number and bigInt
console.log(typeof(milMillones))

let milMill = 1e9; // Notacion cientifica
console.log(milMill);

// 120 / 10 = 12 / 10 = 1.2 / 10 = 0.120
//0.12
console.log(1.27e-6);

// 0.0012
//            
console.log(0XF) // Hexadecimal : 0123456789 A B C D E F 
console.log(0xff)// 255
console.log(0xfff)// 4095
console.log(0xffff)// 65535 

//            210 -> 7
console.log(0b10111) // binario 0 1
//            160421 -> 23
console.log(0b000000000000000010111) // binario 0 1
//           160421 -> 23

console.log(0b1111);
console.log(0b11111111);
console.log(0b111111111111);
console.log(0b1111111111111111);

let num = 255;
console.log(num.toString());// convierte a una cadena de caracteres
console.log(num.toString(16));
console.log(num.toString(2));
console.log(123456..toString(36));

//redondeos Math
//               ariba            abajo<5 - arriba>4             abajo
console.log(Math.ceil(2.4) + "- " + Math.round(2.4) + "- " + Math.floor(2.4));

console.log(Math.trunc(2.1)); // solo toma la parte entera del numero


num = 12.34;
console.log(num.toFixed(1)); // redondea la cantidad  de decimales que indique el parámetro
console.log(num.toFixed(5));
num = 12.36;
console.log(num.toFixed(1));

// calculos inprecisos

console.log(1e500);

console.log( 0.1 + 0.2 == 0.3);
console.log( 0.1 + 0.2);

let sum = 0.1 + 0.2;
console.log(sum.toFixed(1) == 0.3);

console.log(9999999999999999);

console.log(+"100px");
console.log(parseInt("100"));
console.log(parseInt("$100px"));
console.log(parseInt("100em"));
console.log(parseInt("0xff", 16));
console.log(parseInt("ff", 16));
console.log(parseInt("2n9c", 36));

console.log(Math.max(3,5,-10,1,8,3));
console.log(Math.min(3,5,-10,1,8,3));

console.log(Math.pow(2, 6));
