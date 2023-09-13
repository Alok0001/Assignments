function removeDuplicates(arr) {
    const uniqueArray = [];
    
    for (let i = 0; i < arr.length; i++) {
      if (!uniqueArray.includes(arr[i])) {
        uniqueArray.push(arr[i]);
      }
    }
  
    return uniqueArray;
  }
  
  
  const numbers = [1, 2, 3, 2, 4, 1, 5];
  const uniqueNumbers = removeDuplicates(numbers);
  console.log(uniqueNumbers); 
  