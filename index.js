function theBeatlesPlay(musicians, instruments) {
  var arr = [];
  for (var i = 0; i < musicians.length; i++) {
    arr.push(musicians[i] + " plays " + instruments[i]);
  }
  return arr;
}

function johnLennonFacts(arr) {
  var i = arr.length;
  var arr2 = [];
  while (i > 1) {
    arr2[i] = arr[i] + "!!!";
    i--;
  }
  return arr2;
}
