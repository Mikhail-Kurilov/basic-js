const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  if (disksNumber === 0) {
    return;
  }
  let obj = {turns: 0, seconds: 0};

};
// turnspeed: ходы / час
// Math.ceil(x)

/*
function Hanoi(n, from, to , via)
{
  if (n==0) return;

  Hanoi(n-1, from, via , to);

  moveDisk(from,to);

  // callStack.push([from,to]); // save parameters to callStack array
  
  Hanoi(n-1, via, to , from);
} 

n: number of disks; serves as the problem size for recursion
from: the "from" tower is where the disks are placed
to: the "to" tower is where the disks must be finally placed
via: the "via" tower is that used as an intermediate location as disks are moved between the towers from and to.
*/