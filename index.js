function theBeatlesPlay(musicians, instruments) {
  var arr = [];
  for (var i = 0; i < musicians.length; i++) {
    arr.push(musicians[i] + " plays " + instruments[i]);
  }
  return arr;
}

function johnLennonFacts(arr) {
  var i = arr.length;
  while (i > -1) {
    arr[i] = arr[i] + "!!!";
  }
  return arr;
}
