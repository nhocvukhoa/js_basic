/**
 * TODO: 1. Toán tử gán
 *  Toán tử      Ví dụ       Tương đương
 *  =            x = y       x = y
 *  +=           x += y      x = x + y
 *  -=           x -= y      x = x - y
 *  (*=          x *= y      x = x * y
 *  /=           x /= y      x = x / y
 *  **=          x **= y     x = x ** y
 */

/**
 * TODO: 2. Toán tử ++ và --
 *  a++: trả về a trước sau đó thực thi a = a + 1
 *  --a: thực thi a = a + 1 trước sau đó trả về a
 */

//TODO: Minh họa cho ++a: tăng giá trị của biến lên 1 và trả về giá trị sau khi tăng
var a = 6
// Việc 1: +1 cho a, a = a + 1 = 6 + 1 = 7
++a;
// Việc 2: Trả về a sai khi đã được cộng 1
console.log(a);

//TODO: Minh họa cho a++: tăng giá trị của biến lên 1 và trả về giá trị trước khi tăng
var b = 6
// Việc 1: `b copy` = 6;
// Việc 2: + 1 cho b, b = b + 1 = 6 + 1 = 7 
// Việc 3: trả về a copy
var c= b++;
console.log(c);

/**
 * TODO: 3. Toán tử chuỗi
 */

var firstName = 'Son';
var lastName = 'Dang';
console.log(firstName + ' ' + lastName);

var name = 'Khoa';
name = name + ' Nguyen';
console.log(name);