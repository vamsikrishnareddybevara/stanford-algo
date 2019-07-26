function mergesort(array) {
  if (array.length === 1) {
    return array;
  }
  const l = array.length;
  const middle = Math.floor(l / 2);
  const left = array.slice(0, middle);
  const right = array.slice(middle);
  return merge(mergesort(left), mergesort(right))
}
function merge(left, right) {
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++
    }
  }
  console.log(left, right);
  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}