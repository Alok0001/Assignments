function chunkArray(arr, chunkSize) {
    const result = [];
    
    for (let i = 0; i < arr.length; i += chunkSize) {
      result.push(arr.slice(i, i + chunkSize));
    }
  
    return result;
  }
  
  
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
  const chunkedArray = chunkArray(numbers, 3);
  console.log(chunkedArray);
  
  