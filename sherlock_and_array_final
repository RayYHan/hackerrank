function processData(input) {
  var lines = input.split('\n');
  var arrays = lines.filter(function(val, idx) {
    return (idx > 0 && idx % 2 == 0);
  })
  .map(function(line) {
    return line.split(' ').map(function(em) {
      return Number(em);
    });
  });
  arrays.map(testLine);
  
  function testLine(line) {
    function testLineAux(arr) {
      if (arr[0] === undefined) return 'NO';
      var idx_idx = Math.floor(arr.length / 2);
      var idx = arr[idx_idx];
      //console.log('idx_idx is %d', idx_idx);
      //console.log('idx is %d', idx);
      function sumEms(pre, cur) {return pre + cur}
      var lhs = line.slice(0, idx).reduce(sumEms, 0);
      var rhs = line.slice(idx + 1, line.length).reduce(sumEms, 0);
      //console.log('lhs is %d', lhs);
      //console.log('rhs is %d', rhs);
      if (lhs === rhs) return 'YES';
      else {
        if (lhs < rhs) return testLineAux(arr.slice(idx_idx + 1, arr.length));
        if (lhs > rhs) return testLineAux(arr.slice(0, idx_idx));
      }
    }
    idxs = line.map(function(val, idx) {
      return idx;
    })
    console.log(testLineAux(idxs));
  }
  //console.log(arrays);
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
