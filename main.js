(function () {
    'use strict';
    
    var h = [];
    for (var i = 0; i < 6; i++) {
        h.push(i);
    }
    
    var sums = {};
    var hLength = h.length;
    for (var i = 0; i < hLength - 1; i++) {
        for (var j = i + 1; j < hLength; j++) {
            var key = h.slice(i, j).join();
            sums[key] = sums[key] || { '0': 0, '1': 0, '2': 0 };
            var next = h[j];
            sums[key][next]++;
        }
    }
})();
