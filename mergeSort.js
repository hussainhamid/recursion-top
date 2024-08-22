function mergeSort(arr) {
  let arrSize = arr.length;

  if (arrSize === 1) {
    return arr;
  }

  let m = Math.floor(arrSize / 2);

  let lArr = mergeSort(arr.slice(0, m));
  let rArr = mergeSort(arr.slice(m));

  return merge(mergeSort(lArr), mergeSort(rArr));
}

function merge(left, right) {
  let output = [];

  console.log(left);
  console.log(right);

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      console.log(`merged left ${left[0]}`);
      output.push(left.shift());
    } else {
      console.log(`meged right ${right[0]}`);
      output.push(right.shift());
    }
  }

  console.log(left);
  console.log(right);
  console.log(output);
  console.log("merged!");
  return [...output, ...left, ...right];
}
let testOne = [3, 2, 1, 13, 8, 5, 0, 1];
let output = mergeSort(testOne);
console.log(output);
