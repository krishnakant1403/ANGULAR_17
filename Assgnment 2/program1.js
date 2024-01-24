function greater(array) {
    var maximum = array[0];
    for (var i = 0; i < array.length; i++) {
        if (array[i] > maximum) {
            maximum = array[i];
        }
    }
    return maximum;
}
var arr = [23, 89, 29, 90, 45, 77, 32];
var result = greater(arr);
console.log("Maximum value is: " + result);
