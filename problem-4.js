const arr = [1, 2, 8, 9, 12, 46, 76, 82, 15, 20, 30];
const multiples = [1, 2, 3, 4, 5, 6, 7, 8, 9,];

function countMultiples(arr, multiples) {
  const counts = {};
  multiples.forEach((multiple) => {
    counts[multiple] = 0;
    arr.forEach((ele) => {
      if (ele % multiple == 0) {
        counts[multiple]++;
      }
    });
  });
  console.log(counts);
  return counts;
}
countMultiples(arr, multiples);
