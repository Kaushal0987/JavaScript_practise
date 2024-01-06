let marks = 250;

function grade(percentage) {
 switch(true){
  case percentage >= 90:
   return `A+`;
   break;
  case percentage >= 80 && percentage <= 89:
   return `A`;
   break;
  case percentage >= 70 && percentage <= 79:
   return `B+`;
   break;
  case percentage >= 60 && percentage <= 69:
   return `B`;
   break;
  case percentage >= 50 && percentage <= 59:
   return `C+`;
   break;
  case percentage >= 40 && percentage <= 49:
   return `C`;
   break;
  case percentage < 40:
   return `F`
   break;
  default:
   return `Input Error`;
   break;
 }
}

let percentage = (marks/500) * 100

let result = grade(percentage);
console.log(`Result: ${result}`);