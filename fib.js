function fibs(n) {
  let result = [0, 1];
  if (n < 2) {
    result = result.slice(0, n);
  }
  for (let i = 3; i <= n; i++) {
    result.push(result[i - 3] + result[i - 2]);
  }
  return result;
}

console.log(fibs(8));

function fibsRec(n) {
  if (n === 0) {
    return [];
  } else if (n === 1) {
    return [0];
  } else if (n === 2) {
    return [0, 1];
  } else {
    let arr = fibsRec(n - 1);

    arr.push(arr[arr.length - 2] + arr[arr.length - 1]);
    return arr;
  }
}

console.log(fibsRec(8));
