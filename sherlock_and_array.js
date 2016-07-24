function processData(input) {
  //Enter your code here
  var inputs = input.split('\n');
  for (var i = 1; i <= inputs[0]; i++) {
    //inputs = arrStr2Num(inputs);
    testLR(inputs[i * 2]);
  }
  
  function arrStr2Num(strings) {
    return strings.map(function(str) {
      return Number(str);
    });
  }
  
  function testLR(line) {
    line = line.trim();
    var result = 'NO\n';
    var numbers = line.split(' ');
    var break_exc = {};
    try {
      numbers.forEach(function(val, idx) {
        var lhs = sumArray(numbers.slice(0, idx));
        var rhs = sumArray(numbers.slice(idx + 1, numbers.length));
        if (lhs === rhs) {
          process.stdout.write('YES\n');
          throw break_exc;
        }
        else if (lhs >= rhs) {
          process.stdout.write('NO\n');
          throw break_exc;
        }
      });
    } catch (e) {
      return;
    }
    
    process.stdout.write('NO\n');
  }
                    
  function sumArray(array) {
    array = arrStr2Num(array);
    var sum = array.reduce(function(pre, cur) {
      return pre + cur;
    }, 0);
    return sum;
  }
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
