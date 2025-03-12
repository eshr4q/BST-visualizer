export function sortNumberList(input: string): number[] {
    
    const sortedInput = input
    .split(/\s*[,.\s]\s*/) 
    .filter((item) => item.trim() !== "" && !isNaN(Number(item))) 
    .map(Number) 
    .sort((a, b) => a - b); 

    return sortedInput;
  }