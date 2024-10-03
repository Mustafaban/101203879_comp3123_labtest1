function lowercase_array(mixed_array) {
    if (!Array.isArray(mixed_array)) {
      throw new Error("Please provide an array as input.");
    }
  
    const lowercase_array = mixed_array
                            .filter(item => typeof item === 'string')
                            .map(word => word.toLowerCase());
  
    if (lowercase_array.length === 0) {
      throw new Error("No strings found in the array.");
    }
  
    return lowercase_array;
  }
  
  const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings'];
  
  try {
    const result = lowercase_array(mixedArray);
    console.log(`The lowercase words: ${result.join(', ')}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
  }