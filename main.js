(function(){
  'use strict';
  
  var h = [];
  var constKey = '';
  for (var i = 0; i < 10; i++) {
    h.push(1);
    h.push(2);
    constKey += '  ';
  }
  
  var sums = {};
  var hLength = h.length;
  for (var i = 0; i < hLength - 1; i++) {
    for (var j = i + 1; j < hLength; j++) {
      var key = constKey.substring(0, j - i);
      for (var c = 0, n = j - i; c < n; c++) {
        key[c] = h[c];
      }
      
      sums[key] = sums[key] || {'0': 0, '1': 0, '2': 0};
      sums[key][h[j]]++;
    }
  }
})();
