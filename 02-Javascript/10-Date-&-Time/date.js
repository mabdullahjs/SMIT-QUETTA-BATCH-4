// let currentDate = new Date();
// console.log(currentDate);
// console.log(typeof currentDate);
// console.log(currentDate.toString());

// console.log(currentDate.getDate());
// console.log(currentDate.getDay());
// console.log(currentDate.getMonth());
// console.log(currentDate.getDate());
// console.log(currentDate.getFullYear());
// console.log(currentDate.getHours());
// console.log(currentDate.getMinutes());
// console.log(currentDate.getSeconds());
// console.log(currentDate.getMilliseconds());

// console.log(currentDate.getTime());

// let currentDate = new Date('November 27, 2025 13:05:23');
// console.log(currentDate);

// calculate age

function calculateAge(userBirth) {
  let currentDate = new Date().getTime();
  let birthDate = new Date(userBirth).getTime();
  let remainingMilliSeconds = currentDate - birthDate;

  return Math.floor(remainingMilliSeconds / 1000 / 60 / 60 / 24 / 365)
}


console.log(calculateAge('November 27, 2003'));
console.log(calculateAge('May 6, 2006'));
console.log(calculateAge('May 1, 2009'));
console.log(calculateAge('October 17, 2004'));
console.log(calculateAge('September 28, 2008'));
