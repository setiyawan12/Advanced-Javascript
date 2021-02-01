// let mahasiswa = {
//     nama : 'yayang setiyawan',
//     energy : 10,
//     makan : function(porsi){
//         this.energy = this.energy + porsi;
//         console.log(`Halo ${this.nama}, selamat makan`)
//     }
// }

// function declaration

// function Mahasiswa(nama , energi){
//     let mahasiswa = {}
//     mahasiswa.nama = nama;
//     mahasiswa.energi = energi;

//     mahasiswa.makan = function (porsi) {
//         this.energi += porsi;
//         console.log(`Halo ${this.nama} selamat makan`);
//     }
//     mahasiswa.main = function (jam) {
//         this.energi -= jam;
//         console.log(`selamat ${this.nama} selamat bermain`);
//     }
//     return mahasiswa
// }

// let setiyawan = Mahasiswa('yayangsetiywan',10);
// let anton = Mahasiswa('Akhmad Tantowi',13);

//constrator
// function Mahasiswa(nama , energi){
//     this.nama = nama;
// this.energi = energi;

//     this.makan = function (porsi) {
//         this.energi += porsi;
//         console.log(`Halo ${this.nama} selamat makan`);
//     }
//     this.main = function (jam) {
//         this.energi -= jam;
//         console.log(`selamat ${this.nama} selamat bermain`);
//     }
// }

// let setiyawan = new Mahasiswa('yayangsetiywan',10);
// let anton = new Mahasiswa('Akhmad Tantowi',13);

// function Plugin (nama , energi){
//     let plugin = {};
//     plugin.nama = nama;
//     plugin.energi = energi;

//     plugin.makan = function (porsi) {
//         this.energi += porsi;
//         console.log(`Halo ${this.nama} selamat Makan`);
//     }
//     plugin.main = function (jam) {
//         this.energi -= jam;
//         console.log(`silahkan ${this.nama} selamat bermain`);
//     }
//     return plugin;
// }

// let setiyawan = Plugin('setiyawan', 10)

// function Plugin(nama , energi) {
//     this.nama = nama;
//     this.energi = energi;

//     this.makan = function (porsi) {
//         this.energi += porsi
//         console.log(`halo ${this.nama} selamat makan`);
//     }
//     this.main = function (jam) {
//         this.energi -= jam;
//         console.log(`selamat ${this.nama} bermain`);
        
//     }
// }

// let setiyawan = new Plugin ('yayang', 10)



// 

function Mahasiswa(nama, energi) {
    this.nama = nama;
    this.energi = energi;
}

Mahasiswa.prototype.makan = function (porsi) {
    this.energi += porsi;

    return `hallo ${this.nama} selamat makan`
}

let setiyawan = new Mahasiswa ('setiyawan',10)