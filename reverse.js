function reverse(text) {
    var reversed = '';
    for (var i = text.length - 1; i > 0; i--) {
        var element = text[i]
        reversed = reversed + element;
    }
    return reversed;
}
var result = reverse('Hello This Is Forazi');
console.log(result);