console.log("Hello, Mates!");
let des =
  "গরু একটি গৃহপালিত পশু। গরুর মাংস মানুষ আহরণ করে। গরুর চামড়া দিয়ে জুতা তৈরি হয়। গরুর গোবর দিয়ে সার তৈরি হয়। গরু আমাদের অনেক উপকারে আসে। গরু আমাদের বন্ধু।";
console.log(des);

let manush = {
  name: "`AR",
  age: 99,
  add: "Uganda",
  Single: true,
};

console.log(manush);

let num = 9; //Multiplication Table
console.log(num);
console.log(num + " " + "X" + " " + 0 + " " + "=" + " " + num * 0);
console.log(num + " " + "X" + " " + 1 + " " + "=" + " " + num * 1);
console.log(num + " " + "X" + " " + 2 + " " + "=" + " " + num * 2);
console.log(num + " " + "X" + " " + 3 + " " + "=" + " " + num * 3);
console.log(num + " " + "X" + " " + 4 + " " + "=" + " " + num * 4);
console.log(num + " " + "X" + " " + 5 + " " + "=" + " " + num * 5);
console.log(num + " " + "X" + " " + 6 + " " + "=" + " " + num * 6);
console.log(num + " " + "X" + " " + 7 + " " + "=" + " " + num * 7);
console.log(num + " " + "X" + " " + 8 + " " + "=" + " " + num * 8);
console.log(num + " " + "X" + " " + 9 + " " + "=" + " " + num * 9);
console.log(num + " " + "X" + " " + 10 + " " + "=" + " " + num * 10);

// How a filter function works when we search for a specific value
let gender = "Male";
let age = 30;
let salary = 100000;

console.log("Kazi office lte-");
if (gender == "Male") {
  if (age >= 30) {
    if (salary >= 100000) {
      console.log("Ibe confirme partyy..Biyee hoibo");
    } else {
      console.log("Paisaa kam hae re baba");
    }
  } else {
    console.log("Hanga no horis");
  }
} else {
  console.log("Foya laigbo!");
}

// Marksheet

let mark = 70;

if (mark < 0 || mark > 100) {
  console.log("কিরে কী সমস্যা, ভালো ঠিক ঠাক সংখ্যা দিতে পারেন না?");
} else if (mark < 33) {
  console.log("স্বাগত, তুমি পটল তুলেছো!!!");
} else if (mark >= 33 && mark <= 39) {
  console.log('You have got "D"');
} else if (mark >= 40 && mark <= 49) {
  console.log('You have got "C"');
} else if (mark >= 50 && mark <= 59) {
  console.log('You have got "B"');
} else if (mark >= 60 && mark <= 69) {
  console.log('You have got "A-"');
} else if (mark >= 70 && mark <= 79) {
  console.log('You have got "A"');
} else if (mark >= 80 && mark <= 100) {
  console.log('You have got "A+"');
}
