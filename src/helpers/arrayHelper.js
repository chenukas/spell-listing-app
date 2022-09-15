export const isHasMatch = (array, index) => {
    let hasMatch = false;
    for (let i of array) {
        if (i.index === index) {
            hasMatch = true;
        }
    }
    return hasMatch;
}