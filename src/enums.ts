// represents list of related content

// const small=1;
// const medium=2;
// const large =3;

const enum Size{Small=0, Medium, Large};
let mySize: Size=Size.Medium;
console.log(mySize);
// using const shall generate more optimized js code