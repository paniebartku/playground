const objectArr = [
  { format: "cd", title: "Deathcrush", artist: "Mayhem", price: 22 },
  { format: "lp", title: "Paranoid", artist: "Paranoid", price: 45 },
  { format: "cd", title: "Burzum", artist: "Burzum", price: 20 },
  { format: "mc", title: "Emperor", artist: "Promotheus", price: 19 }
];

const sum = objectArr.reduce((acc, current) => {
  console.log(acc);
  return acc + current.price;
}, 10000);

console.log(sum);

const arr = [29.76, 41.85, 46.5, 22, 11, 2222];

const sumOfArr = arr.reduce((acc, current) => acc + current);
console.log(`the sum is ${sumOfArr}`);

//average

const averageOfArr = arr.reduce((acc, current, index, array) => {
  const calculated = acc + current;
  if (index === array.length - 1) {
    return calculated / array.length;
  } else {
    return calculated;
  }
});

console.log(`the average is ${averageOfArr}`);

const shortAverage = arr.reduce((a, b) => a + b) / arr.length;
console.log(`short version of ${shortAverage}`);
