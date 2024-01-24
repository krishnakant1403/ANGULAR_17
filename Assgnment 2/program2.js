function summation(Arr_Of_sum) {
    var i = 0;
    var summation = 0;
    for (i = 0; i < Arr_Of_sum.length; i++) {
        summation = summation + Arr_Of_sum[i];
    }
    return summation;
}
var Arr_Of_sum = [23, 6, 7, 4, 5, 7];
var result = summation(Arr_Of_sum);
console.log("Summation is: " + result);
