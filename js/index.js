console.log("Hello World");
console.log("shubham");
const mixed = ['str', 89, [3, 5]];
    console.log(mixed)
    const fruits = ['orange', 'grapes', 'mangoes'];
console.log(fruits)
const marks = [1, 2, 3, 4, 5];
console.log(marks)
const arr= new Array(1, 2, 3, 'Apple')
console.log(arr);
marks.push(34)
console.log(marks)
marks.splice(1, 3)
console.log(marks);
arr[0] = "shubham";
console.log(arr)
let value = marks.indexOf(3);
console.log(value)
let myObj =  {
    name : 'shubham',
    channel : 'chachan',
    isActive : true,
    marks1 : [1, 2, 3, 4]
};
console.log(myObj)
const age = 28; 
if(age==19)
{
    console.log('age is 19');
}
else if(age == 65) {
    console.log('age is 65');
}
else {
    console.log('age is not 19');
}
if (age !== 65){
    console.log('age is not 65')
}
else {
    console.log('age is not 19')
}
const doesDrive = true;
const age1 = 45;

if(doesDrive || age1>18){
    console.log('you can drive')
}
else{
    console.log('you can not drive')
}
switch (age) {
    case 18:
        console.log("you are 18")
        break;
        case 38:
        console.log("you are 38")
        break;
        case 28:
        console.log("you are 28")
        break;
default:
    console.log("you are unknown age")
        break;
}
console.log(age1==18? 'age is 45' : 'age is not 45')
for (let i = 0; i < 100; i++) {
    //const element = array[i];
    console.log(i)
    }
    var x= 0;
var y=-1;
var z= 4;
if (x>y && x>z)
{
        if (y>z)
        {
            console.log(x + ", " + y + ", " +z);
        }
        else
        {
            console.log(x + ", " + z + ", " +y);
        }
}
else if (y>x && y >z)
{
        if (x>z)
        {
             console.log(y + ", " + x + ", " +z);
        }
        else
        {
             console.log(y + ", " + z + ", " +x);
        }
}
else if (z>x && z>y)
{
        if (x>y)
        {
            console.log(z + ", " + x + ", " +y);
        }
        else
        {
            console.log(z + ", " + y + ", " +x);
        }
}


function sort(a, b, c) {
    if(a < b && b < c) {
    document.write(a, b , c);
  } else if (a < b && c < b) {
    document.write(a, c, b);
  } else if (b < a && a < c) {
    document.write(b, a, c);
  } else if(b < a && c < a) {
    document.write(b, c, a);      
  } else if(c < a && a < b) {
    document.write(c, a, b);
  } else {
    document.write(c, b , a);
  }
}

sort(3,2,1);
console.log('sort', sort(a, b, c))
console.log("shubham chachan")
