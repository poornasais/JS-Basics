var a = 10;
if (a == 10) {

    //console.log(a);
}

for (i = 0; i < 5; i++) {
     console.log("Print i : " + i);

 }
i = 0;

while (i != 0) {
    console.log("I not equal to zero");
    i--;
}

var person = ['Mithlesh', 'Poorna'];
console.log(person[0]);// Mithlesh

var person = {fname: 'Poorna', lname: 'Sama'};
console.log(person.fname);
key = 'fname';
console.log(person[key]);

for (props in person) {
    console.log(person[props]);
}

function pal(str) {
    if (!str) {
        throw new Error("Give a valid String!");
    }
    org = str;
    var st = str.split('').reverse().join('');
    console.log(st);
    return org == st;

}

try {
    pal("");
} catch (e) {
    console.log(e.name);
    console.log(e.message);
} finally {
    console.log("Run at last")
}
console.log("-------------------------------------");


var arr = [1, 2, 3, 4];
arr.push(2);
arr.push(2);
console.log(arr);

console.log(arr.length);

var finalarr = function (arr, item) {
    for (var i = 0; i < arr.length; i++) {

        if (item === arr[i]) {

            arr.splice(i, 1);

        }
        console.log(i);
        console.log(arr[i]);
        console.log(arr)
    }
    return arr;
}

console.log(finalarr(arr, 2));

var ch = 'poorna';


console.log(ch.replace(/o/g, 'a'));