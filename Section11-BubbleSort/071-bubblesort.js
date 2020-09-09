const bubbleSort = (arr = []) => {
    for (let i = arr.length; i >0 ;i--) {
        // console.log(arr[i]);
        for (let j = 0; j < i - 1; j++){
            if (arr[j] > arr[j+1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                console.log({ arr });
            }
        }
    }
    return arr;
};

bubbleSort([37,45,29,8,12,88,-3]);