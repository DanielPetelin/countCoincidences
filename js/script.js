var a = ["п","р","ы","в","е","т"],
    b = ["п","р"];

var yes;

var ln1 = a.length
    ln2 = b.length;

for (var i = 0; i < ln1; i++) {
yes = a[i];
    for (var j = 0; j < ln2; j++) {
    if (yes == b[j]) {
    console.log('найдено совпадение: ' + yes);
    break;
        }
    }
}
