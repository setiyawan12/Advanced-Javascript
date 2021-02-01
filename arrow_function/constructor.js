//construtor 
const Mahasiswa = function () {
    this.nama = 'Yayang Setiyawan',
    this.umur = 30

    this.hasil = function() {
        console.log(`Halo nama saya ${this.nama} Umur saya ${this.umur}`); 
    };

}

const setiyawan = new Mahasiswa();
console.log(setiyawan);

class Plugin {
    constructor() {
        this.nama = 'yayang setiyawan';
        this.umur = 20;

        this.hasil = function () {
            return `Halo nama saya ${this.nama} Umur saya ${this.umur}`;
        };
        // setInterval(() => {
        //     console.log(this.umur++);
        // }, 5000);

    }
}

const yayang = new Plugin();
// console.log(plugin);


