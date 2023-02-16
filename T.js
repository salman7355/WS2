function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let min = i;
        for (j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[min]) {
                min = j;
            }
        }

        if (min !== i) { // swap
            let temp = arr[i];
            arr[i] = arr[min];
            arr[min] = temp
        }
    }
    return arr;
}
function findClosest(arr, target)
{
    
    let n = arr.length;
 
    
    if (target <= arr[0])
        return arr[0];
    if (target >= arr[n - 1])
        return arr[n - 1];
 
    
    let i = 0, j = n, mid = 0;
    while (i < j)
    {
        mid = (i + j) / 2;
 
        if (arr[mid] == target)
            return arr[mid];
 
        // If target is less than array
        // element,then search in left
        if (target < arr[mid])
        {
      
            // If target is greater than previous
            // to mid, return closest of two
            if (mid > 0 && target > arr[mid - 1])
                return getClosest(arr[mid - 1],
                                  arr[mid], target);
               
            // Repeat for left half
            j = mid;             
        }
 
        // If target is greater than mid
        else
        {
            if (mid < n - 1 && target < arr[mid + 1])
                return getClosest(arr[mid],
                                  arr[mid + 1],
                                  target);               
            i = mid + 1; // update i
        }
    }
 
    
    return arr[mid];
}
function getClosest(val1, val2, target)
{
    if (target - val1 >= val2 - target)
        return val2;       
    else
        return val1;       
}
function smallestSum(arr){
    let newArr = [];
    let target = 0;
    for(let i = 0 ; i<arr.length ; i++){
        for(let j =i+1 ; j<arr.length ; j++ ){
            newArr.push(arr[i] + arr[j]);
        }
    }
    selectionSort(newArr);
    findClosest(newArr , target);
}


let arr = [1, 4, -5, 3, -2, 10, -6, 20];
let target = 0;
 
console.log(findClosest(arr, target));



