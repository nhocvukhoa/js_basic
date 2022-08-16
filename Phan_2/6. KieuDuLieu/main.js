/** 
 * 1. Dữ liệu nguyên thủy - Primitive Data: tạo giá trị mới sẽ lưu lại
 * - Number
 * - String
 * - Boolean
 * - Undefined
 * - Null
 * - Symbol
 * 2. Dữ liệu phức tạp - Complex Data
 * - Function
 * - Object
*/

//Number type
var a = 1;
var b = 1.5;

//String type
var fullName = 'Anh Khoa';

//Boolean type
var isSuccess = true;

//Undefined type
var age;

//Null type
var isNull = null; //nothing
console.log(typeof isNull); //object

//Symbol type
var id = Symbol('id'); //unique
var id2 = Symbol('id2'); //unique
console.log(id === id2);

//Function

var myFunction = function() {
    alert('Hello!');
}
myFunction();

//Object type: object và Array
var myObject = {
    name: 'Khoa',
    age: 23,
    address: 'Hội An',
    myFunction: function() {

    }
};
console.log('myObject', myObject);

var myArray = [
    'Java',
    'PHP',
    'Ruby'
];


