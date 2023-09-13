function findMaxAndMin(arr) {
    if (arr.length === 0) {
      return { max: undefined, min: undefined };
    }
  
    let max = arr[0];
    let min = arr[0];
  
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > max) {
        max = arr[i];
      } else if (arr[i] < min) {
        min = arr[i];
      }
    }
  
    return { max, min };
  }
  
 
  const numbers = [1, 2, 3, 4, 5];
  const result = findMaxAndMin(numbers);
  console.log(`Maximum value: ${result.max}`);
  console.log(`Minimum value: ${result.min}`);
  