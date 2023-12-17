let markWeight = 95;
let markHeight = 1.88;
let johnWeight = 85;
let johnHeight = 1.76;

function bmi (weight, height) {
 return weight / height **2;
}

let markBMI = bmi(markWeight, markHeight);
let johnBMI = bmi(johnWeight, johnHeight);

console.log("Marks BMI : ", markBMI);
console.log("Johns BMI : ", johnBMI);
if (markBMI > johnBMI) {
 console.log(`Mark's BMI ${markBMI} is higher then John's ${johnBMI}`);
}
else{
 console.log(`John's BMI ${johnBMI} is higher then Mark's ${markBMI}`);
}