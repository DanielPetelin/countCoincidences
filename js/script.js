var h = ["п", "р", "ы", "в", "е", "т", 12, 546, 85];
var c = ["п", "fsa", 123, 85];
var g = [2123, 54, 23, 65, 23, 76, 12];

var yes;

function countCoincidences(a, b) {
    for (var i = 0; i < a.length; i++) {
    yes = a[i];
        for (var j = 0; j < b.length; j++) {
            if (yes == b[j]) {
            console.log('найдено совпадение: ' + yes);
            break;
            } else {
                console.log('совпадений не обнаружено');
            };
        };
    };
};

countCoincidences(c, h);