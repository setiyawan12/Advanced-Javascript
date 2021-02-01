const angka = [-1,8,9,1,4,-5,-4,3,2,9];

const newAngka = angka.filter(function(a){
   return a >= 3;
})

//arrow function
const newAngka2 = angka.filter(a => a>=3);
console.log(newAngka);
console.log(newAngka2);