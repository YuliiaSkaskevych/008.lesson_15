const mainArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let removeElement = (array, item = 5) => {
    let idx = array.indexOf(item);
    if (idx !== -1){
        array.splice(idx, 1);
        return array;
    }
    return `Element ${item} is not found!`;
}

alert(removeElement(mainArray));