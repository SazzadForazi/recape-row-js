var largest = ['sazzad', 'Fazle', 'sagor', 'rakibul', 'mahab']
function largestName(names) {
    var largeName = names[0]
    for (var i = 0; i < names.length; i++) {
        var element = names[i];
        // console.log(element.length);
        if (element.length > largeName.length) {
            largest = element
        }
    }
    return largest;
}
var result = largestName(largest);
console.log(result);