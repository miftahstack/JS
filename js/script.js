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

// =====================================================================================

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
// =====================================================================================

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

// =====================================================================================
let agee = 30;
if (agee >= 1 && agee <= 18) {
  console.log("You are a child");
}

// For loop
let num1 = 20;

for (let i = 1; i < 11; i++) {
  console.log(13 + " " + "X" + " " + i + " " + "=" + " " + i * 13);
}

for (let i = 1; i <= 30; i++) {
  console.log(num1 + "" + "X" + "" + i + "" + "=" + " " + i * 20);
}

let members = ["Sabbir", "Tawhid", "Ayesha", "Al-Amin Sir", "Gomes"];
console.log(members[3]);

// Object

let member_list = {
  miftah: {
    name: "Miftah Ul Haq",
    area: "Dhaka",
    passion: "Web Developer",
  },
  rakib: {
    name: "Rakib",
    area: "Sylhet",
    passion: "UX/UI Designer",
  },
  mira: {
    name: "Mira",
    area: "Chittagong",
    passion: "Cyber Security Expert",
  },
};
console.log(member_list.mira);

// =====================================================================================
// Function

let value = "This is a test string";
console.log(` Hello World, ${value}`);

function operation() {
  function math() {
    let C = 18;
    let D = 99;
    console.log(D - C);
  }
  math();

  function math_two() {
    let C = 28;
    let D = 99;
    console.log(C + D);
  }
  math_two();
  console.log(math * math_two);
}
operation();

// Loop + Function

let humans = [
  "Ayon Vaiya",
  "Gomes Vaiya",
  "Al-Amin Sir",
  "Ayesha Unty",
  "Tawhid Vaiya",
];

function loop() {
  for (let i = 0; i < humans.length; i++) {
    console.log("Tumi", humans[i]);
  }
}
loop();

// Map
console.log("THIS IS A MAP FUNCTION : ");

let মানুষ = [
  "Sabbir Vaiya",
  "Sadia Mam",
  "Al-Amin Sir",
  "Motasim Vaiya",
  "Rakib Vaiya",
];

মানুষ.map((Pookie) => {
  console.log(Pookie);
});

// =====================================================================================

let x = 17

if (x >= 25) {
  console.log("This is s a great number");

}
else {
  console.log("Not a good number");

}

// condition ? true : false
x > 25 ? console.log("Goodd!!!") : console.log("badd!!!");


// Split String("") based 
let m = "AR"
console.log(m.split(""));

let n = "My Name Is AR"
console.log(n.split(" "));

let o = "My name is #AR"
console.log(o.split("#"));

let p = "My name is-AR"
console.log(p.split("-"));

let q = "Hello Crazzy peoples"
console.log(q.split(" ")[1]);

let r = "My name is AR Athex"
console.log(r.toUpperCase(""));

let s = "My name is AR Athex"
console.log(s.toLowerCase(""));

// DOM Manupulation 

let test_heading = document.querySelector("h1")
let test_para = document.querySelector("p")
let test_button = document.querySelector("button") 
let test_body = document.querySelector("body") 


test_button.addEventListener("click", function () {
  test_heading.style.background = "#c1121f"
  test_heading.style.color = "#e5e5e5"
  test_button.style.background = "#c1121f"
  test_button.style.color = "#e5e5e5"
  test_body.style.background = "#fefae0"
})
