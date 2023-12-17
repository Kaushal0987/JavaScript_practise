let markWeight = 95;
let markHeight = 1.88;
let johnWeight = 85;
let johnHeight = 1.76;

function bmi (weight, height) {
 return weight / height **2;
}

let markBMI = bmi(markWeight, markHeight);
let johnBMI = bmi(johnWeight, johnHeight);

let markHigherBMI = markBMI > johnBMI ? true : false;

console.log("Marks BMI : ", markBMI);
console.log("Johns BMI : ", johnBMI);
if (markHigherBMI) {
 console.log("Mark has higher BMI then John");
}