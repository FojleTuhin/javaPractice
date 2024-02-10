var ages = [12, 123, 34, 23, 45];

var names = ['fojle', 'rabbi', 'tuhin']
console.log(names);
names.push('lebu', 'dim');
console.log(names);


var parts = names.slice(4, 5);
console.log(parts);


console.log(ages);

console.log(ages[2]);

ages[1] = 120;
console.log(ages);
console.log(ages.length);

var position = ages.indexOf(45);
console.log(position);

ages.push(434);
ages.push(43);
console.log(ages);
console.log(ages.length);

ages.pop();
console.log(ages);
console.log(ages.length);

ages.pop();
console.log(ages);
console.log(ages.length);

// ages.pop();
// console.log(ages);
// console.log(ages.length);


function fault() {
    console.log('this is tuhin');
}

fault();
fault();


// var num = new Array();
//  for (var i = 0; i < 5; i++) {
//     num[i] = parseInt(prompt("Enter the number " + i + ":"));
//  }

// var sum = 0;

// for (var i = 0; i < 5; i++) {
//     console.log(num[i]);
//     sum = sum + num[i];
// }

// console.log("sum: "+sum);


var numbers = [345, 657, 34, 3565];
numbers.sort(function (a, b) {
    return a - b;
}
);
console.log(numbers)




var date = new Date()
console.log(date);
var year = date.getTime();
console.log(year)