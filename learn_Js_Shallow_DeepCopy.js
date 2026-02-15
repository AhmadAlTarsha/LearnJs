//! shallow copy and deep copy  / 

//الشالو كوبي هنا يحصل طبيعي حيث كل نسخه مستقله عن الاخرى والتغيير يطرا ع كل وحده ع حدا

/*

 ? const user = { name: "Ahmad",age: 30};

const copyUser = { ...user };

copyUser.name = "Ali";

console.log(user.name);     
console.log(copyUser.name); 

*/

// مثال على قيم متداخله

// الشالو كوبي نسخ المرجع فقط، مش المحتوى   
// النسخة السطحية تنسخ المستوى الأول فقط من الكائن أو المصفوفة
// أي اوبجكت أو اريه داخل الكائن الأصلي يظل مرتبط بالنسخة الجديدة

// أي تغيير في القيم الداخلية المتداخله  ينعكس على الكائن الأصلي 



/* 

طرق شائعة : للشالو كوبي

Spread operator (...)

Object.assign()

Array methods: slice(), concat()

مثال 

?const user = {name: "Ahmad",address: {  city: "Amman",  street: "Main",},};

const copyUser = { ...user };

copyUser.address.city = "Irbid";

console.log(user.address.city);  => // irbid
console.log(copyUser.address.city); => //irbid


user.address  ─┐
               ├──> نفس المكان بالذاكرة
copyUser.address ┘


?const user3 = { name: "Sara", address: { city: "Zarqa" }, age: 25 };
const user4 = Object.assign({}, user3);

user4.address.city = "Amman";

console.log(user3.address.city);  
console.log(user4.address.city);




?const numbers1 = [1, [2,3], 4];
const numbers2 = [...numbers1];

numbers2[1][0] = 99;
console.log(numbers1[1][0]); 
console.log(numbers2[1][0]);

?const nestedObj = { a: 1, b: { c: 2, d: { e: 3 } } };

deepObj.b.d.e = 99;

*/

/* */
/* */
/* */
/* */
/* */
/* */
/* */
/* */
