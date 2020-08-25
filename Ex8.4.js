`use-strict`
/**
 
Binary Search is searching technique which works on Divide and Conquer approach. It used to search any element in a sorted array.
As compared to linear, binary search is much faster with Time Complexity of O(logN) whereas linear search algorithm works in O(N) time complexity.
Given a sorted array of numbers. The task is to search a given element  in the array using Binary search.

Examples : 
Input : arr[] = {1, 3, 5, 7, 8, 9}
        x = 5
Output : Element found!

Input : arr[] = {1, 3, 5, 7, 8, 9}
        x = 6
Output : Element not found!

 */

 const binarySearch = (arr, element) => {

  let startIndex = 0;
  let endIndex = arr.length-1;
  let midIndex;
  
  while (startIndex <= endIndex){
    
    let midIndex = Math.floor((startIndex + endIndex) / 2);


    if (arr[midIndex] === element){ 
    return midIndex;
    }
    
    if (arr[midIndex] > element){ 
      endIndex = midIndex-1;
    }

    if (arr[midIndex] < element){ 
      startIndex = midIndex+1;
    }
  }
  return -1;
 };

 console.log(binarySearch([1, 3, 5, 7, 8, 9,10,11,12,13,29,30,35,36,78,79,80], 80));