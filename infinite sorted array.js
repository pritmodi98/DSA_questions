// Search an element in an Infinite Sorted array

function searchInfinite(arr,key) {
    let low=0,high=1

    while (arr[high]<key) {   //while loop runs for logn times
        low=high
        high=2*high
    }
//pseudo code for this solution
    binarySearch(arr,low,high,K)  //logn times
}

//time complexity:O(logn) +O(logn)