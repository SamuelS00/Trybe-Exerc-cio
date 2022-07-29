type callback<T> = (element: T, index?: number, array?: Array<T>) => boolean; 


function myFilter<T>(arr: Array<T>, cb: callback<T>): Array<T> {
    const newArr: Array<T> = [];

    for(let i = 0; i < arr.length; i++) {
        if(cb(arr[i], i, arr)) {
            newArr.push(arr[i]);
        };
    };

    return newArr;
};