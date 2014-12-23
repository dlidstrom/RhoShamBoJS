(function () {
    'use strict';
    
    var h = [];
    for (var i = 0; i < 10; i++) {
        h.push(1);
        h.push(2);
    }
    
    var sums = {};
    var hLength = h.length;
    for (var i = 0; i < hLength; i++) {
        for (var j = i + 1; j <= hLength; j++) {
            var key = h.slice(i, j).join();
            sums[key] = sums[key] || { '0': 0, '1': 0, '2': 0 };
            sums[key][h[j]]++;
        }
    }
})();
