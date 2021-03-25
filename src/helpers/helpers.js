/**
 * Mix the values of an array
 *
 * @param {array} arr
 * @returns
 */
const randomize = (arr) => {
    let i;
    let j;
    let tmp;
    const array = arr;

    for (i = array.length - 1; i > 0; i -= 1) {
        j = Math.floor(Math.random() * (i + 1));
        tmp = array[i];
        array[i] = array[j];
        array[j] = tmp;
    }
    return array;
};

export default randomize;
