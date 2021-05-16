function reverseArray(arr1) {
    var arr2 = [];
    while (arr1.length) {
      arr2.push(arr1.pop());
    }
    return arr2;
  }
  
  console.log(reverseArray([1, 2, 3, 4, 5, 6, 7]));