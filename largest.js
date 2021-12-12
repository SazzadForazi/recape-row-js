function largest(arry) {
    var large = arry[0];
    for (var i = 0; i < arry.length; i++) {
        // console.log(arry[i]);
        var element = arry[i]
        if (element > large) {
            large = element;
        }
    }
    return large

}
// var arry = [1, 0, 5, 7, 4, 6];
var numberIs = largest([1, 0, 5, 7, 4, 6])
console.log(numberIs);