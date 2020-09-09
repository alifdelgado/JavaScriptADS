const same = (arr1, arr2) => {
    if (arr1.length !== arr2.length) {
        console.log('false');
        return false;
    }

    for (let i = 0; i < arr1.length; i++) {
        let correctIndex = arr2.indexOf(arr1[i] ** 2);
        if (correctIndex === -1) {
            console.log('false');
            return false;
        }
        arr2.splice(correctIndex, 1);
    }
    console.log('true');
    return true;
};

same([1,2,3,2], [9,1,4,4]);