function sumOfDistinctElements(set1, set2) {
    // Combine both sets and create a Set to get distinct elements
    let distinctElements = new Set([...set1, ...set2]);

    // Calculate the sum of distinct elements
    let resultSum = 0;
    for (let element of distinctElements) {
        resultSum += element;
    }

    return resultSum;
}

// Example usage
let set1 = [3, 1, 7, 9];
let set2 = [2, 4, 1, 9, 3];

let result = sumOfDistinctElements(set1, set2);
console.log("Output:", result);
