const tampilnama = function (nama) {
    return `Halo ${nama}`;
}
console.log(tampilnama('yayang setiyawan'));
//Arrow Function =>
const nama = nama =>{return `halo ${nama}`}
console.log(nama('arrow function'));

const testing = (nama,kelas) =>{return `saya ${nama} kelas ${kelas}`}
console.log(testing('setiyawan','5D'));

//implisit return 
const implisit = nama => `nama ${nama}`
console.log(implisit('yayang setiyawan')); 