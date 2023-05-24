const characters = ['a', 'b', 'c', 'b', 'c', 'c'];

// console.log([...new Set(array)]);

// function countDown(number) {
//   if (number > 0) {
//     console.log(number);
//     return countDown(number - 1);
//   }

//   return number;
// }

// countDown(10);

// function loop(start, end, callback) {
//   if (start < end) {
//     callback(start);
//     return loop(start + 1, end, callback);
//   }
// }

// loop(0, array.length, function (index) {
//   console.log(array[index], array.indexOf(array[index]) === index);
//   return array.indexOf(array[index]) === index;
// });

// function factorial(number) {
//   let output = 1;

//   for (let i = number; i > 0; i--) {
//     output = output * i;
//   }

//   return output;
// }

// console.log(factorial(4));

// function main() {
//   return execute([], characters, 0);
// }

// function execute(arr, characters, index) {
//   if (!arr.indexOf(characters[index])) {
//     console.log(arr.indexOf(characters[index]));
//     return arr;
//   }
//   arr.push(characters[index]);
//   return execute(arr, characters, index + 1);
// }

// function main() {
//   characters.sort();
//   const result = [];
//   let index1 = 0;
//   let index2 = index1 + 1;

//   while (index1 < index2 && index2 <= characters.length) {
//     const el1 = characters[index1];
//     const el2 = characters[index2];
//     if (el1 !== el2) {
//       if (index2 === characters.length - 1) {
//         result.push(el1);
//         result.push(el2);
//       } else {
//         result.push(el1);
//       }
//     }
//     index1++;
//     index2++;
//   }
//   console.log(result);
// }
// main();

function sumRange(num) {
  let total = 0;

  for (let i = num; i > 0; i--) {
    total += i;
  }

  return total;
}

function sumRangeRecursive(num, total = 0) {
  if (num <= 0) {
    return total;
  }

  return sumRangeRecursive(num - 1, total + num);
}

console.log(sumRangeRecursive(4));
