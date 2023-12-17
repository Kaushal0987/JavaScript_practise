let dolphins = [96, 108, 89];
let koalas = [88, 91, 110];

let dTotal = 0;
let kTotal = 0;
for (i=0; i<3; i++) {
 dTotal += dolphins[i];
 kTotal += koalas[i];
}

let dAvg = dTotal / 3;
let kAvg = kTotal / 3;

if (dAvg >= 100 && kAvg >= 100) {
 if (dAvg > kAvg) {
  console.log(`Dolphins wins with the average score of ${dAvg} against Koalas with average score of ${kAvg}`);
 }
 else if (kAvg > dAvg) {
  console.log(`Koalas wins with the average score of ${kAvg} against Dolphins with average score of ${dAvg}`);
 }
 else{
  console.log(`Dolphins and Koalas draw with the score of ${dAvg}`)
 }
}
else{
 console.log(`both teams failed to score more then 100 average score`)
}

