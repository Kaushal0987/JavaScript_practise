let dolphins = [96, 108, 89];
let koalas = [88, 91, 110];

let dTotal = 0;
let kTotal = 0;

for (i=0; i<3; i++) {
 dTotal += dolphins[i];
 kTotal += koalas[i];
}

function average(total) {
 return total / 3
}

function result(avg1, avg2) {
 if (avg1 >= 100 && avg2 >= 100) {
  if (avg1 > avg2) {
   return `Dolphins wins with the average score of ${avg1} against Koalas with average score of ${avg2}`;
  }
  else if (avg2 > avg1) {
   return `Koalas wins with the average score of ${avg2} against Dolphins with average score of ${avg1}`;
  }
  else{
   return `Dolphins and Koalas draw with the score of ${avg1}`
  }
 }
 else{
  return `both teams failed to score more then 100 average score`
 }
}

let davg = average(dTotal)
let kavg = average(kTotal)

console.log(result(davg, kavg))