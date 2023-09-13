function toTitleCase(inputString) {
    return inputString
      .toLowerCase()
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }
  
 
  const inputString = "hello world";
  const titleCaseString = toTitleCase(inputString);
  console.log(titleCaseString);
  