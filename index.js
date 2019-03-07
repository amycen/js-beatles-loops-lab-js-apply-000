function theBeatlesPlay(musicians, instruments){
  var arr1 = [];
  var i;
  var musiciansLength = musicians.length;
  var instrumentsLength = instruments.length;

  for (i = 0; i < Math.min(musiciansLength, instrumentsLength); i++) {
    arr1[i] = musicians[i] + " plays " + instruments[i];
  }
  return arr1;
}

function johnLennonFacts(facts){
  var i = 0;
  while (i < facts.length) {
    facts[i] += "!!!";
    i++;
  }
  return facts;
}

function iLoveTheBeatles(number) {
  var arr1 = [];
}
