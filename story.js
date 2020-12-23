let name = "Mehdi";
let age = 27;
let hobby = "Watching vlogs on youtube";
let gender = "male";

let namePrefix = gender == "male" ? "Mr." : "Ms.";
let after33 = age + 33;

console.log(
  `${namePrefix}${name}. in 33 years, you will be ${after33} years old. By then, you will have decades of ${hobby} practice`
);
