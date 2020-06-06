function sym(args) {
    let arrays = Object.values(arguments);

    const compare = (arr1, arr2) => {
        let symDiff = [];
        arr1.forEach(num1 => {
            if (!arr2.includes(num1)) {
                symDiff.push(num1);
            }
        })
        return symDiff;
    }

    const compareBoth = (arr1, arr2) => {
        let joinedArr = [];
        joinedArr.push(compare(arr1, arr2));
        joinedArr.push(compare(arr2, arr1));
        return joinedArr.join(',').split(',').map(num => Number(num));
    }

    let resultArr = [...new Set(arrays[0])];
    for (let i = 1; i < arrays.length; i++) {
        resultArr = compareBoth(resultArr, [...new Set(arrays[i])]);
    }
    return resultArr;
}

/*

sym([1, 2, 3], [5, 2, 1, 4]) should return [3, 4, 5].
Passed
sym([1, 2, 3], [5, 2, 1, 4]) should contain only three elements.
Passed
sym([1, 2, 3, 3], [5, 2, 1, 4]) should return [3, 4, 5].
Passed
sym([1, 2, 3, 3], [5, 2, 1, 4]) should contain only three elements.
Passed
sym([1, 2, 3], [5, 2, 1, 4, 5]) should return [3, 4, 5].
Passed
sym([1, 2, 3], [5, 2, 1, 4, 5]) should contain only three elements.
Passed
sym([1, 2, 5], [2, 3, 5], [3, 4, 5]) should return [1, 4, 5]
Passed
sym([1, 2, 5], [2, 3, 5], [3, 4, 5]) should contain only three elements.
Passed
sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]) should return [1, 4, 5].
Passed
sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]) should contain only three elements.
Passed
sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]) should return [2, 3, 4, 6, 7].
Passed
sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]) should contain only five elements.
Passed
sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1]) should return [1, 2, 4, 5, 6, 7, 8, 9].
Passed
sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1]) should contain only eight elements.

*/
